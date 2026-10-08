import { readdirSync, statSync, unlinkSync, existsSync } from 'node:fs'
import { dirname, extname, join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const photosDir = join(root, 'public', 'photos')

const KEEP = new Set(['logo.jpeg', 'og-cover.jpg'])
const QUALITY = Number(process.env.QUALITY || 78)
const GALLERY_LONG_EDGE = Number(process.env.LONG_EDGE || 1200)
const HERO_LONG_EDGE = 1600

function makeOgCover(source) {
  if (!source || existsSync(join(photosDir, 'og-cover.jpg'))) return
  return sharp(source)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(join(photosDir, 'og-cover.jpg'))
}

const files = readdirSync(photosDir)
const hero = join(photosDir, 'hero-school.jpg')
await makeOgCover(existsSync(hero) ? hero : null)

let totalBefore = 0
let totalAfter = 0

for (const name of files) {
  if (KEEP.has(name)) continue
  const ext = extname(name).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const input = join(photosDir, name)
  const output = join(photosDir, `${basename(name, ext)}.webp`)

  const before = statSync(input).size
  const longEdge = name.startsWith('hero') ? HERO_LONG_EDGE : GALLERY_LONG_EDGE
  const pipeline = sharp(input)
  const meta = await pipeline.metadata()
  const needsResize = Math.max(meta.width, meta.height) > longEdge

  const resized = needsResize
    ? sharp(input).resize({ width: longEdge, height: longEdge, fit: 'inside', withoutEnlargement: true })
    : sharp(input)

  const info = await resized
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(output)

  totalBefore += before
  totalAfter += info.size
  unlinkSync(input)
  const saved = ((1 - info.size / before) * 100).toFixed(0)
  console.log(
    `${name} -> ${basename(output)}  ${(before / 1024).toFixed(0)} KB -> ${(info.size / 1024).toFixed(0)} KB (−${saved}%)`
  )
}

if (totalBefore) {
  const saved = 100 - (totalAfter / totalBefore) * 100
  console.log(
    `\ntotal ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB (−${saved.toFixed(0)}%)`
  )
} else {
  console.log('no JPEG/PNG photos to convert')
}
