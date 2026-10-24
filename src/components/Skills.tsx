import { SKILLS } from '../content'

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative z-[1] scroll-mt-24 bg-black px-5 py-20 text-white sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
          Skills
        </p>
        <h2
          id="skills-title"
          className="mt-4 max-w-2xl text-[clamp(38px,6vw,80px)] leading-[0.98] tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What I work with.
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-[13px] text-white/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
