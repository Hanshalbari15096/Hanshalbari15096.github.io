import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { ACTIONS, EMAIL, INTRO, TYPEWRITER_TEXT } from '../content'

export function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT)
  const [showActions, setShowActions] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShowActions(true), 400)
    return () => window.clearTimeout(timeoutId)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be denied; the address is still visible in the pill.
    }
  }

  return (
    <section className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
      <div className="relative z-10 max-w-xl">
        <p
          className="pointer-events-none mb-5 select-none text-white sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            filter: 'blur(4px)',
          }}
        >
          {INTRO.line1}
          <br />
          {INTRO.line2}
        </p>

        <p
          aria-label={TYPEWRITER_TEXT}
          className="mb-5 text-white sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: 54,
          }}
        >
          {displayed}
          {!done ? (
            <span
              aria-hidden="true"
              className="animate-blink ml-[2px] inline-block h-[1.1em] w-[2px] bg-white align-middle"
            />
          ) : null}
        </p>

        <div
          className={`flex flex-wrap gap-y-1 transition-[opacity,transform] duration-[400ms] ease-out ${
            showActions
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          {ACTIONS.map((action) => (
            <a
              key={action.label}
              href={action.href}
              {...(action.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
            >
              {action.label}
            </a>
          ))}

          <button
            type="button"
            onClick={copyEmail}
            aria-label={`Copy email address ${EMAIL}`}
            className="mx-[0.2em] mb-[0.4em] inline-flex max-w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white bg-transparent px-3 py-[0.3em] text-[12px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
          >
            <span>
              Reach me: <span className="underline underline-offset-1">{EMAIL}</span>
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect
                x="4.25"
                y="1.25"
                width="6.5"
                height="6.5"
                rx="1"
                stroke="currentColor"
              />
              <rect
                x="1.25"
                y="4.25"
                width="6.5"
                height="6.5"
                rx="1"
                stroke="currentColor"
              />
            </svg>
          </button>

          <span aria-live="polite" className="sr-only">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </div>
      </div>
    </section>
  )
}
