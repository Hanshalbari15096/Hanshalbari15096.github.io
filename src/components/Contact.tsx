import { CONTACT, EMAIL, GITHUB_URL, LOCATION } from '../content'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-[1] scroll-mt-24 bg-[#0B0B0A] px-5 py-20 text-white sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
          {CONTACT.kicker}
        </p>
        <h2
          id="contact-title"
          className="mt-4 max-w-4xl text-[clamp(40px,7vw,88px)] leading-[0.98] tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {CONTACT.heading}
        </h2>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/55">
          {CONTACT.note}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="text-[clamp(20px,3.6vw,38px)] leading-tight underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            {EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>
        </div>

        <dl className="mt-16 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Based in
            </dt>
            <dd className="mt-2 text-sm text-white/80">{LOCATION}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Focus
            </dt>
            <dd className="mt-2 text-sm text-white/80">{CONTACT.focus}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Stack
            </dt>
            <dd className="mt-2 text-sm text-white/80">{CONTACT.stack}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Currently
            </dt>
            <dd className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#E23D28]"
              />
              {CONTACT.status}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}