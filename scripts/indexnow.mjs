import { readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = (
  process.env.URL ||
  process.env.SITE_URL ||
  'https://better-tomorrow-school.netlify.app'
).replace(/\/$/, '')

if (process.env.INDEXNOW_SKIP === '1') {
  console.log('[indexnow] skipped (INDEXNOW_SKIP=1)')
  process.exit(0)
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')

const keyFile = readdirSync(publicDir).find((name) => name.endsWith('.txt'))

if (!keyFile) {
  console.error('[indexnow] no key file found in public/ (expected <key>.txt)')
  process.exit(1)
}

const key = keyFile.replace(/\.txt$/, '')

async function ping() {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key,
      keyLocation: `${SITE_URL}/${keyFile}`,
      urlList: [SITE_URL],
    }),
  })

  const body = await response.text()
  console.log(`[indexnow] ${response.status} ${response.statusText} — ${body || 'ok'}`)

  if (response.status >= 300 && response.status !== 202) {
    process.exitCode = 1
  }
}

ping().catch((error) => {
  console.error('[indexnow] failed:', error.message)
  process.exitCode = 1
})
