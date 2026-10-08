import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import { EMAIL, WHATSAPP_DISPLAY, whatsAppLink } from '../lib/site'

const stats = [
  { value: '2019', label: 'Year founded' },
  { value: '350', label: 'Children enrolled' },
  { value: 'P–8', label: 'Playgroup to Grade 8' },
  { value: '13', label: 'Staff members' },
]

const programs = [
  {
    title: 'Quality education',
    body: 'The full curriculum from playgroup through Grade 8, taught by a dedicated team of ten teachers who know every child by name.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h7a3 3 0 0 1 3 3v9a3 3 0 0 0-3-3H4z" />
        <path d="M20 6h-4a3 3 0 0 0-3 3v9a3 3 0 0 1 3-3h4z" />
      </svg>
    ),
  },
  {
    title: 'Feeding programme',
    body: 'Regular meals at school so children can learn on a full stomach — for many, the reason they stay in the classroom.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 3v8a2 2 0 0 0 4 0V3" />
        <path d="M8 11v10" />
        <path d="M17 3c-1.5 2-2 4-2 6s.5 3 2 3h1V3z" />
        <path d="M18 12v9" />
      </svg>
    ),
  },
  {
    title: 'Guiding & counselling',
    body: 'Pastoral care and mentoring that helps children through family hardship, exams and the challenges of growing up in the slum.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 12a8 8 0 1 1-3.2-6.4" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Community clean-ups',
    body: 'Regular clean-up and health drives across Vumilia, keeping the neighbourhood the school calls home clean and safe.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21c4-3 7-6.5 7-10a7 7 0 1 0-14 0c0 3.5 3 7 7 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
]

const gallery = [
  { src: '/photos/school-01.webp', alt: 'Better Tomorrow School, Nairobi — photo 1' },
  { src: '/photos/school-02.webp', alt: 'Better Tomorrow School, Nairobi — photo 2' },
  { src: '/photos/school-03.webp', alt: 'Better Tomorrow School, Nairobi — photo 3' },
  { src: '/photos/school-04.webp', alt: 'Better Tomorrow School, Nairobi — photo 4' },
  { src: '/photos/school-05.webp', alt: 'Better Tomorrow School, Nairobi — photo 5' },
  { src: '/photos/school-06.webp', alt: 'Better Tomorrow School, Nairobi — photo 6' },
  { src: '/photos/school-07.webp', alt: 'Better Tomorrow School, Nairobi — photo 7' },
  { src: '/photos/school-08.webp', alt: 'Better Tomorrow School, Nairobi — photo 8' },
  { src: '/photos/school-09.webp', alt: 'Better Tomorrow School, Nairobi — photo 9' },
  { src: '/photos/school-10.webp', alt: 'Better Tomorrow School, Nairobi — photo 10' },
  { src: '/photos/school-11.webp', alt: 'Better Tomorrow School, Nairobi — photo 11' },
  { src: '/photos/school-12.webp', alt: 'Better Tomorrow School, Nairobi — photo 12' },
  { src: '/photos/school-13.webp', alt: 'Better Tomorrow School, Nairobi — photo 13' },
  { src: '/photos/school-14.webp', alt: 'Better Tomorrow School, Nairobi — photo 14' },
  { src: '/photos/school-15.webp', alt: 'Better Tomorrow School, Nairobi — photo 15' },
  { src: '/photos/school-16.webp', alt: 'Better Tomorrow School, Nairobi — photo 16' },
  { src: '/photos/school-17.webp', alt: 'Better Tomorrow School, Nairobi — photo 17' },
  { src: '/photos/school-18.webp', alt: 'Better Tomorrow School, Nairobi — photo 18' },
]

const involve = [
  {
    title: 'Volunteer',
    body: 'Teach, play with the children and support the staff for one week or several months. Placements are arranged with our partner organisations.',
    action: 'Volunteer with CIVS Kenya',
    href: 'https://civskenya.org/',
  },
  {
    title: 'Partner with us',
    body: 'Schools, churches and companies can sponsor a class, a term of meals or new learning materials and see exactly where the support goes.',
    action: 'Talk to us on Facebook',
    href: 'https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/',
  },
  {
    title: 'Give',
    body: 'Contributions fund books, uniforms, meals and classroom supplies for children whose families can only give a little.',
    action: 'Support the school',
    href: 'https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/',
  },
]

const admissionSteps = [
  {
    title: 'Get in touch',
    body: 'Send a WhatsApp message, an email or use the form below. Tell us your child’s age and the grade you have in mind.',
  },
  {
    title: 'Visit the school',
    body: 'Come and see the classrooms in Vumilia, meet the teachers and ask everything you want to ask before deciding.',
  },
  {
    title: 'Agree the plan',
    body: 'We confirm the right grade placement and go through the termly contributions so there are no surprises.',
  },
]

const faqs = [
  {
    q: 'Where is the school?',
    a: 'Vumilia Slum, Donholm, Embakasi East, Nairobi County, Kenya — a short walk from Donholm.',
  },
  {
    q: 'Which grades do you teach?',
    a: 'Playgroup through Grade 8, following the full curriculum. Children join from around age 3.',
  },
  {
    q: 'How many children attend?',
    a: 'Around 350 pupils, taught by 13 staff members including 10 teachers.',
  },
  {
    q: 'What does a school day include?',
    a: 'Lessons as well as a regular meal for the children, pastoral care and guiding, and community clean-up drives.',
  },
  {
    q: 'How much are the fees?',
    a: 'Contributions are termly and depend on the grade, so we share the current figures when you contact us.',
  },
  {
    q: 'How do I admit my child?',
    a: 'Message us on WhatsApp or email the school — we will walk you through placement and what to bring.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroMedia">
          <Image
            src="/photos/hero-school.webp"
            alt="Better Tomorrow School, Donholm, Nairobi"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container heroInner">
          <span className="eyebrow">Est. 2019 · Vumilia, Donholm</span>
          <h1>A better tomorrow starts in this classroom.</h1>
          <p className="heroLead">
            Better Tomorrow School is a community school in Vumilia Slum,
            Embakasi East, giving around 350 children from playgroup to Grade 8
            a safe place to learn, eat and grow.
          </p>
          <div className="actions">
            <a
              className="btn btnPrimary"
              href="https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/"
            >
              Support the school
            </a>
            <a className="btn btnGhost" href="#gallery">
              See photos
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="split" style={{ marginTop: '64px' }}>
            <div>
              <span className="eyebrow">Who we are</span>
              <h2>Rooted in the community it serves</h2>
              <p className="lead">
                Better Tomorrow School was founded in 2019 in Vumilia Slum,
                Donholm, Embakasi East. What started as a small neighbourhood
                initiative now welcomes around 350 children aged 3 to 15 —
                many of them the first in their family to go to school.
              </p>
              <p>
                The school runs on the dedication of its founder and staff,
                the goodwill of friends, and small termly contributions from
                parents. Volunteers from partner organisations join the
                classrooms through the year, and every contribution — books,
                a meal, an hour of teaching — goes straight to the children.
              </p>
            </div>
            <figure className="figure" style={{ margin: 0 }}>
              <Image
                src="/photos/school-01.webp"
                alt="Pupils of Better Tomorrow School"
                fill
                sizes="(max-width: 940px) 100vw, 40vw"
              />
              <figcaption>Vumilia Slum, Donholm, Nairobi</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="programs">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h2>Four things we do every day</h2>
          <p className="lead">
            Teaching is only part of the job. A child learns best when they
            are fed, heard and safe — so that is what we look after too.
          </p>
          <div className="cardGrid">
            {programs.map((program) => (
              <article className="card" key={program.title}>
                <div className="icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <span className="eyebrow">Photos</span>
          <h2>Life at Better Tomorrow</h2>
          <p className="lead">
            Photographs shared by the school and its community.
          </p>
          <div className="galleryGrid">
            {gallery.map((photo) => (
              <figure className="figure" key={photo.src} style={{ margin: 0 }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 940px) 50vw, 25vw"
                />
              </figure>
            ))}
          </div>
          <p className="galleryNote">
            More photos live on our{' '}
            <a href="https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/">
              Facebook page
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section sectionAlt" id="admissions">
        <div className="container">
          <span className="eyebrow">Joining the school</span>
          <h2>How to enrol your child</h2>
          <p className="lead">
            Enrolment starts with a conversation. Grade placement and termly
            contributions depend on your child’s age, so talk to us first and
            we will walk you through everything step by step.
          </p>
          <div className="steps">
            {admissionSteps.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="stepNum">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <a
              className="btn btnSolid"
              href={whatsAppLink(
                'Hello Better Tomorrow School! I would like to ask about admitting my child.'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp
            </a>
            <a className="btn btnOutline" href="#contact">
              Send a message
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <span className="eyebrow">Questions</span>
          <h2>What parents ask us</h2>
          <p className="lead">
            The short answers to what people ask most often — and anything
            else, just message us.
          </p>
          <div className="faqGrid">
            {faqs.map((faq) => (
              <div className="faqItem" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="involved">
        <div className="container">
          <span className="eyebrow">Get involved</span>
          <h2>How you can help</h2>
          <p className="lead">
            The school is small, the need is real, and every form of help is
            welcome — time, skills, materials or funding.
          </p>
          <div className="involveGrid">
            {involve.map((item) => (
              <article className="involveCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={item.href}>{item.action} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="contact">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h2>Talk to us</h2>
          <div className="split contactSplit">
            <div>
              <p className="lead">
                Questions about admissions, volunteering or supporting the
                school? Reach us any way that suits you — we answer messages
                as fast as we can.
              </p>
              <ul className="contactList">
                <li>
                  <b>Visit</b>
                  <span>
                    Vumilia Slum, Donholm, Embakasi East
                    <br />
                    Nairobi County, Kenya
                  </span>
                </li>
                <li>
                  <b>WhatsApp</b>
                  <a
                    href={whatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>
                  <b>Email</b>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <b>Facebook</b>
                  <a
                    href="https://www.facebook.com/people/Better-Tomorrow-School/100087755767222/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Better Tomorrow School
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
