import './globals.css'
import SiteNav from '../components/SiteNav'
import WhatsAppWidget from '../components/WhatsAppWidget'
import { Globe, Mail, MapPin, MessageCircle } from 'lucide-react'
import {
  EMAIL,
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
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
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
    images: [
      {
        url: '/photos/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Better Tomorrow School pupils, Donholm, Nairobi',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Better Tomorrow School — Donholm, Nairobi',
    description:
      'Founded in 2019 in Vumilia Slum, Donholm. Around 350 children, playgroup to Grade 8.',
    images: ['/photos/og-cover.jpg'],
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
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vumilia Slum, Donholm, Embakasi East',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${WHATSAPP_NUMBER}`,
    email: EMAIL,
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
  { href: '#admissions', label: 'Admissions' },
  { href: '#faq', label: 'FAQ' },
  { href: '#involved', label: 'Get involved' },
  { href: '#contact', label: 'Contact' },
]

const facebookUrl =
  'https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/'

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

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

        <footer className="siteFooter">
          <div className="container">
            <div className="footerGrid">
              <div>
                <h3>Better Tomorrow School</h3>
                <p className="footerAddress">
                  <MapPin size={18} aria-hidden="true" />
                  <span>
                    Vumilia Slum, Donholm, Embakasi East
                    <br />
                    Nairobi County, Kenya
                  </span>
                </p>
                <p>
                  Founded 2019 · Playgroup to Grade 8
                  <br />A community school run by the community it serves.
                </p>
                <div className="footerSocial">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="socialIcon"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <a
                    href={whatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="socialIcon"
                  >
                    <MessageCircle size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    aria-label="Email"
                    className="socialIcon"
                  >
                    <Mail size={20} aria-hidden="true" />
                  </a>
                </div>
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
                <ul className="footerLinks footerContact">
                  <li>
                    <a
                      href={whatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} aria-hidden="true" />
                      <span>WhatsApp {WHATSAPP_DISPLAY}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`}>
                      <Mail size={18} aria-hidden="true" />
                      <span>{EMAIL}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon size={18} />
                      <span>Facebook page</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://volunteering.at/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={18} aria-hidden="true" />
                      <span>Volunteer via Grenzenlos</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerBottom">
              <span>© 2026 Better Tomorrow School. All rights reserved.</span>
              <span>Photographs courtesy of Better Tomorrow School.</span>
            </div>
          </div>
        </footer>

        <WhatsAppWidget />
      </body>
    </html>
  )
}
