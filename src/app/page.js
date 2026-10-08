import Image from 'next/image'

const stats = [
  { value: '2019', label: 'Year founded' },
  { value: '350', label: 'Children enrolled' },
  { value: 'P–6', label: 'Playgroup to Grade 6' },
  { value: '13', label: 'Staff members' },
]

const programs = [
  {
    title: 'Quality education',
    body: 'The full curriculum from playgroup through Grade 6, taught by a dedicated team of ten teachers who know every child by name.',
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
  { src: '/photos/heylocals-description_img.jpg', alt: 'Pupils at Better Tomorrow School' },
  { src: '/photos/civs-better-tomorrow.jpg', alt: 'Children outside the school building' },
  { src: '/photos/heylocals-weekend_img_4.jpg', alt: 'A day at Better Tomorrow School' },
  { src: '/photos/youtube-headmaster-maxresdefault.jpg', alt: 'The headmaster speaking at assembly' },
  { src: '/photos/heylocals-weekend_img_2.jpg', alt: 'Classroom life in Donholm' },
  { src: '/photos/volunteering-at-Community-Kenia.jpg', alt: 'Volunteers with the school community' },
  { src: '/photos/heylocals-why_participate_3_img.jpg', alt: 'Better Tomorrow School grounds' },
  { src: '/photos/youtube-morning-devotion-maxresdefault.jpg', alt: 'Morning devotion at the school' },
  { src: '/photos/heylocals-bulletpoints_media_poster.png', alt: 'The school and its neighbourhood' },
  { src: '/photos/volunteering-at-Kinderprojekt-Kenia.jpg', alt: 'Younger pupils in class' },
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

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroMedia">
          <Image
            src="/photos/heylocals-background_hero.jpg"
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
            Embakasi East, giving around 350 children from playgroup to Grade 6
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
                src="/photos/civs-better-tomorrow.jpg"
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
            Photographs shared by our partners, volunteers and the school
            community.
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
    </>
  )
}
