import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Better Tomorrow School — Donholm, Nairobi',
  description:
    'A community school in Vumilia Slum, Donholm, Embakasi East, Nairobi. Founded in 2019, we teach around 350 children from playgroup to Grade 6.',
  icons: { icon: '/photos/logo.jpeg' },
  openGraph: {
    title: 'Better Tomorrow School — Donholm, Nairobi',
    description:
      'Founded in 2019 in Vumilia Slum, Donholm. Around 350 children, playgroup to Grade 6.',
    images: ['/photos/heylocals-background_hero.jpg'],
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Better Tomorrow School',
  foundingDate: '2019',
  description:
    'Community school in Vumilia Slum, Donholm, Embakasi East, Nairobi County, Kenya, serving children from playgroup to Grade 6.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vumilia Slum, Donholm, Embakasi East',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/',
  ],
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#gallery', label: 'Photos' },
  { href: '#involved', label: 'Get involved' },
  { href: '#contact', label: 'Contact' },
]

const facebookUrl =
  'https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="siteHeader">
          <div className="container siteHeaderInner">
            <a className="brand" href="#top">
              <Image
                src="/photos/logo.jpeg"
                alt="Better Tomorrow School logo"
                width={46}
                height={46}
                priority
                style={{ borderRadius: '12px' }}
              />
              <span className="brandText">
                Better Tomorrow School
                <span>Donholm · Nairobi</span>
              </span>
            </a>
            <nav className="nav">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <a className="navCta" href={facebookUrl}>
                Support us
              </a>
            </nav>
          </div>
        </header>

        <main id="top">{children}</main>

        <footer className="siteFooter" id="contact">
          <div className="container">
            <div className="footerGrid">
              <div>
                <h3>Better Tomorrow School</h3>
                <p>
                  Vumilia Slum, Donholm, Embakasi East
                  <br />
                  Nairobi County, Kenya
                </p>
                <p>
                  Founded 2019 · Playgroup to Grade 6
                  <br />
                  A community school run by the community it serves.
                </p>
              </div>
              <div>
                <h3>Explore</h3>
                <ul className="footerLinks">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Reach us</h3>
                <ul className="footerLinks">
                  <li>
                    <a href={facebookUrl}>Facebook page</a>
                  </li>
                  <li>
                    <a href="https://civskenya.org/">Volunteer via CIVS Kenya</a>
                  </li>
                  <li>
                    <a href="https://volunteering.at/">
                      Volunteer via Grenzenlos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerBottom">
              <span>
                © 2026 Better Tomorrow School. All rights reserved.
              </span>
              <span>Photographs courtesy of our partners and volunteers.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
