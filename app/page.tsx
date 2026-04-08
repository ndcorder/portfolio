import { DecryptText } from './components/decrypt-text'
import { ScrollReveal } from './components/scroll-reveal'
import { CopyButton } from './components/copy-button'
import { CursorGlow } from './components/cursor-glow'
import { Nav } from './components/nav'
import { AsciiPhoto } from './components/ascii-photo'

// Swap this path to test different photos
const PHOTO_SRC = '/photo.jpg'

const BIO =
  'I\'m the CISO and Head of Engineering at Redrock Software. We build TracCloud, a platform used by hundreds of universities.\n' +
    '\n' +
    'I split my time between security and engineering. On the security side, that\'s compliance — TX-RAMP, CAIQ, HECVAT, CMMC, NIST SP 800-53 — writing policies, mapping controls, getting through audits.\n' +
    '\n' +
    'On the engineering side, I write PHP, Python, Go, and C# day to day. I handle all the integrations, API work, serverless infrastructure, and AWS from architecture to billing. If TracCloud talks to another service or runs on a server, it goes through me.\n' +
    '\n' +
    'I\'ve been in ed-tech for a long time and technology in general for a lot longer. I\'m always interested in how others are approaching the same problems!'

const SKILLS = [
  {
    heading: 'COMPLIANCE',
    items: [
      { name: 'NIST SP 800-53', note: 'Security & privacy controls' },
      { name: 'NIST Privacy Framework', note: 'Privacy risk management' },
      { name: 'TX-RAMP', note: 'Texas risk authorization based on FedRAMP' },
      { name: 'CIS 8.1', note: 'Cybersecurity controls' },
      { name: 'NIST CSF', note: 'Cybersecurity framework' },
      { name: 'HECVAT', note: 'Higher-education vendor assessment' },
      { name: 'CAIQ', note: 'Cloud security self-assessment' },
    ],
  },
  {
    heading: 'ENGINEERING',
    items: [
      { name: 'PHP', note: 'Primary language' },
      { name: 'Python', note: 'Automation & tooling, scripting' },
      { name: 'Go', note: 'Services & CLI tools' },
      { name: 'C#', note: '.NET integrations' },
      { name: 'Bash', note: 'System administration & scripting' },
      { name: 'Rust', note: 'Systems programming' },
      { name: 'TypeScript', note: 'Frontend & tooling' },
      { name: 'Legacy Applications', note: 'Keeping old code alive' },
    ],
  },
  {
    heading: 'INFRASTRUCTURE',
    items: [
      { name: 'AWS', note: '30+ services, architecture to billing' },
      { name: 'Linux / Apache', note: 'Production stack' },
      { name: 'MySQL / Redis', note: 'Data & caching layer' },
      { name: 'Serverless', note: 'Lambda & event-driven workflows' },
      { name: 'CI/CD', note: 'Continuous integration & deployment'},
      {name: 'Docker', note: 'Containers & local dev'},
    ],
  },
]

const HIGHLIGHTS: { label: string; description: string; href?: string }[] = [
  {
    label: 'TracCloud',
    description:
      "I built TracCloud and run it today — a SaaS platform serving 400+ universities on Linux, Apache, PHP, MySQL, and Redis on AWS.",
    href: 'https://trac.cloud',
  },
  {
    label: 'Compliance Program',
    description:
      "I own the compliance program end to end: policy writing, control mapping, gap fixes, and audit prep across TX-RAMP, NIST 800-53, HECVAT, and others.",
  },
  {
    label: 'International Privacy',
    description:
      "Wrote privacy docs covering US state laws, GDPR, Canadian, UK, Kuwaiti, and Qatari requirements, plus DPAs.",
  },
  {
    label: 'Security Training',
    description:
      "Built and run the company's security awareness training, including phishing simulations.",
  },
  {
    label: 'Open Source Tooling',
    description:
      'I build open source tools in Rust, Python, TypeScript, and Svelte — research agents, LLM orchestration, security scanners.',
    href: 'https://github.com/ndcorder',
  },
  {
    label: 'Polyglot Engineer',
    description:
      "I write production code in PHP, Python, Go, C#, Rust, and TypeScript. I'd rather pick the right language than make one do everything.",
  },
]

const PERSONAL = [
  {
    label: 'Eagle Scout',
    description:
      'Earned Eagle Scout in 2007. Still involved as a Scout leader.',
  },
  {
    label: '20 Years Teaching Martial Arts',
    description:
      "I've taught martial arts for twenty years. It's where I learned to teach — breaking things down and meeting people where they are.",
  },
]

const LINKS = [
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'GitHub', href: 'https://github.com/ndcorder' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicolas-corder-7511783b8/' },
  { label: 'Medium', href: 'https://medium.com/@nicdcorder'},
  { label: 'Bluesky', href: 'https://bsky.app/profile/ndcorder.bsky.social' },
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0e] overflow-hidden">
      {/* Dot grid */}
      <div className="fixed inset-0 grid-bg" aria-hidden="true" />

      {/* Cursor glow */}
      <CursorGlow />

      <Nav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 z-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div>
            <h1 className="font-mono text-[clamp(2.5rem,9vw,9rem)] font-bold leading-[0.85] tracking-[-0.04em] text-[#d4d2cf]">
              <DecryptText text="NICOLAS" delay={300} />
              <br />
              <DecryptText
                text="CORDER"
                delay={700}
                className="text-[#2dd4bf]"
              />
            </h1>

            <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-[#52525b]">
              <DecryptText text="CISO" delay={1300} />
              <span className="text-[#2dd4bf]/40">·</span>
              <DecryptText text="PRINCIPAL ENGINEER" delay={1500} />
            </div>

            <div className="mt-2 font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-[#3f3f46]">
              <DecryptText text="REDROCK SOFTWARE CORPORATION" delay={1900} />
            </div>
          </div>

          <div className="w-full max-w-[280px] md:max-w-[360px] lg:max-w-[420px] aspect-[3/4] shrink-0">
            <AsciiPhoto src={PHOTO_SRC} />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-[12px] tracking-[0.3em] text-[#3a3a42]">
            ABOUT
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#3a3a42]/60 to-transparent" />
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-20 mx-8 md:mx-16 lg:mx-24">
        <div className="h-px bg-[#18181b]" />
      </div>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" className="relative z-20 px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Skills */}
          <div className="lg:w-1/2 shrink-0 flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {SKILLS.map((group, gi) => (
                <div key={group.heading}>
                  <ScrollReveal delay={gi * 120}>
                    <h2 className="font-mono text-xl tracking-[0.3em] uppercase text-[#52525b] mb-6">
                      {group.heading}
                    </h2>
                  </ScrollReveal>
                  <div className="space-y-3">
                    {group.items.map((item, i) => (
                      <ScrollReveal key={item.name} delay={gi * 120 + i * 60}>
                        <div>
                          <span className="font-mono text-lg text-[#d4d2cf] tracking-tight">
                            {item.name}
                          </span>
                          <p className="mt-0.5 font-mono text-base text-[#52525b] tracking-wide uppercase">
                            {item.note}
                          </p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <ScrollReveal>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-[#d4d2cf]/80 whitespace-pre-line">
                {BIO}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-20 mx-8 md:mx-16 lg:mx-24">
        <div className="h-px bg-[#18181b]" />
      </div>

      {/* ═══════════ HIGHLIGHTS ═══════════ */}
      <section id="highlights" className="relative z-20 px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <ScrollReveal>
          <h2 className="font-mono text-2xl tracking-[0.3em] uppercase text-[#52525b] mb-12">
            HIGHLIGHTS
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {HIGHLIGHTS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div>
                <h3 className="font-mono text-base md:text-xl text-[#d4d2cf] tracking-tight">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2dd4bf] transition-colors duration-300"
                    >
                      {item.label}
                      <span className="ml-2 text-[#52525b] text-sm">&#8599;</span>
                    </a>
                  ) : (
                    item.label
                  )}
                </h3>
                <p className="mt-1.5 text-lg text-[#52525b] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-20 mx-8 md:mx-16 lg:mx-24">
        <div className="h-px bg-[#18181b]" />
      </div>

      {/* ═══════════ BEYOND WORK ═══════════ */}
      <section id="personal" className="relative z-20 px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <ScrollReveal>
          <h2 className="font-mono text-2xl tracking-[0.3em] uppercase text-[#52525b] mb-12">
            BEYOND WORK
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {PERSONAL.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div>
                <h3 className="font-mono text-base md:text-xl text-[#d4d2cf] tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-1.5 text-lg text-[#52525b] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-20 mx-8 md:mx-16 lg:mx-24">
        <div className="h-px bg-[#18181b]" />
      </div>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="relative z-20 px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="flex-1">
            <ScrollReveal>
              <h2 className="font-mono text-base tracking-[0.3em] uppercase text-[#52525b] mb-6">
                GET IN TOUCH
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:ndcorder@pm.me"
                  className="text-xl md:text-3xl lg:text-4xl font-mono tracking-tight text-[#d4d2cf] hover:text-[#2dd4bf] transition-colors duration-300"
                >
                  ndcorder@pm.me
                </a>
                <CopyButton text="ndcorder@pm.me" />
              </div>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={150}>
              <div className="mt-10 flex flex-wrap gap-6">
                {LINKS.map((link) => {
                  const isExternal = link.href.startsWith('http')
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="font-mono text-xs tracking-[0.15em] uppercase text-[#52525b] hover:text-[#2dd4bf] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="w-60 h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded overflow-hidden shrink-0">
              <AsciiPhoto src="/photo2.jpg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="relative z-20 px-8 md:px-16 lg:px-24 py-8 border-t border-[#18181b]">
        <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#3f3f46]">
          © 2026 NICOLAS CORDER
        </div>
      </footer>
    </main>
  )
}
