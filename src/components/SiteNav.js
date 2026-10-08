'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SiteNav({ links, cta }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Image
            src="/photos/logo.jpeg"
            alt="Better Tomorrow School logo"
            width={46}
            height={46}
            priority
            className="brandLogo"
          />
          <span className="brandText">
            Better Tomorrow School
            <span>Donholm · Nairobi</span>
          </span>
        </a>

        <button
          type="button"
          className="navToggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={open ? 'nav navOpen' : 'nav'}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="navCta" href={cta} onClick={() => setOpen(false)}>
            Support us
          </a>
        </nav>
      </div>
    </header>
  )
}
