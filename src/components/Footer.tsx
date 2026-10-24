import { NAME, PROJECTS_URL } from '../content'

export function Footer() {
  return (
    <footer className="bg-[#0B0B0A] px-5 py-8 text-[11px] uppercase tracking-[0.14em] text-white/35 sm:px-8 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {NAME}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={PROJECTS_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            More on GitHub
          </a>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}