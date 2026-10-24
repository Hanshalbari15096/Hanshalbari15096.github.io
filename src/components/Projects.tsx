import { PROJECTS, PROJECTS_URL } from '../content'

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative z-[1] scroll-mt-24 bg-[#F3F0E8] px-5 py-20 text-[#14140F] sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 border-b border-[#14140F]/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#14140F]/50">
              Selected work
            </p>
            <h2
              id="work-title"
              className="mt-4 max-w-2xl text-[clamp(38px,6vw,80px)] leading-[0.98] tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Dense information,
              <br />
              made usable.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#14140F]/55">
            Retrieval, multilingual NLP and data tools, built with Python and LLM
            APIs. Three projects where the document was the hard part.
          </p>
        </div>

        <div>
          {PROJECTS.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid items-start gap-5 border-b border-[#14140F]/15 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <p className="text-xs tabular-nums text-[#14140F]/35 md:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div className="md:col-span-3">
                <h3
                  className="text-2xl leading-tight tracking-tight transition-opacity group-hover:opacity-60 md:text-[28px]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#14140F]/45">
                  {project.kicker}
                </p>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-[#14140F]/65">
                  {project.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#14140F]/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-[#14140F]/55"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end md:col-span-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#14140F]/20 text-base transition-colors duration-200 group-hover:border-[#14140F] group-hover:bg-[#14140F] group-hover:text-white">
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href={PROJECTS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 border-b border-[#14140F]/30 pb-1 text-sm text-[#14140F]/70 transition-opacity hover:opacity-50"
        >
          All projects on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
