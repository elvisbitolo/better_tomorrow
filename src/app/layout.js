import './globals.css'
import SiteNav from '../components/SiteNav'
import WhatsAppWidget from '../components/WhatsAppWidget'
import {
  SITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  whatsAppLink,
} from '../lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Better Tomorrow School — Donholm, Nairobi',
  description:
    'A community school in Vumilia Slum, Donholm, Embakasi East, Nairobi. Founded in 2019, we teach around 350 children from playgroup to Grade 8.',
  keywords: [
    'Better Tomorrow School',
    'school in Donholm',
    'Nairobi primary school',
    'Vumilia Slum school',
    'Embakasi East school',
    'community school Nairobi',
    'school feeding programme Kenya',
  ],
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'Nhs8gc3RwgRKBibskar-5rweTZL0n2-W_XgqLUAtpXk',
  },
  openGraph: {
    title: 'Better Tomorrow School — Donholm, Nairobi',
    description:
      'Founded in 2019 in Vumilia Slum, Donholm. Around 350 children, playgroup to Grade 8.',
    url: '/',
    siteName: 'Better Tomorrow School',
    images: ['/photos/hero-school.jpg'],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Better Tomorrow School — Donholm, Nairobi',
    description:
      'Founded in 2019 in Vumilia Slum, Donholm. Around 350 children, playgroup to Grade 8.',
    images: ['/photos/hero-school.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Better Tomorrow School',
  url: SITE_URL,
  logo: `${SITE_URL}/photos/logo.jpeg`,
  foundingDate: '2019',
  description:
    'Community school in Vumilia Slum, Donholm, Embakasi East, Nairobi County, Kenya, serving children from playgroup to Grade 8.',
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vumilia Slum, Donholm, Embakasi East',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: 'customer service',
    availableLanguage: ['English', 'Swahili'],
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
        <SiteNav links={links} cta={facebookUrl} />

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
                  Founded 2019 · Playgroup to Grade 8
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
                    <a
                      href={whatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp {WHATSAPP_DISPLAY}
                    </a>
                  </li>
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
              <span>Photographs courtesy of Better Tomorrow School.</span>
            </div>
          </div>
        </footer>

        <WhatsAppWidget />
      </body>
    </html>
  )
}
