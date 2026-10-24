import { useState } from 'react'
import { EMAIL, QUERY } from '../content'

export function Query() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.open(`mailto:${EMAIL}?subject=${encodeURIComponent(QUERY.subject)}&body=${body}`, '_blank')
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="query"
      aria-labelledby="query-title"
      className="relative z-[1] scroll-mt-24 bg-[#F3F0E8] px-5 py-20 text-[#14140F] sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#14140F]/50">
          Query
        </p>
        <h2
          id="query-title"
          className="mt-4 max-w-2xl text-[clamp(38px,6vw,80px)] leading-[0.98] tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {QUERY.heading}
        </h2>

        <form onSubmit={onSubmit} className="mt-12 max-w-xl space-y-6">
          <div>
            <label
              htmlFor="query-name"
              className="text-[11px] uppercase tracking-[0.18em] text-[#14140F]/45"
            >
              Name
            </label>
            <input
              id="query-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-2 block w-full border-b border-[#14140F]/20 bg-transparent py-3 text-base text-[#14140F] outline-none transition-colors focus:border-[#14140F]"
            />
          </div>

          <div>
            <label
              htmlFor="query-email"
              className="text-[11px] uppercase tracking-[0.18em] text-[#14140F]/45"
            >
              Email
            </label>
            <input
              id="query-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 block w-full border-b border-[#14140F]/20 bg-transparent py-3 text-base text-[#14140F] outline-none transition-colors focus:border-[#14140F]"
            />
          </div>

          <div>
            <label
              htmlFor="query-message"
              className="text-[11px] uppercase tracking-[0.18em] text-[#14140F]/45"
            >
              Message
            </label>
            <textarea
              id="query-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's the dense problem you're trying to make legible?"
              className="mt-2 block w-full border-b border-[#14140F]/20 bg-transparent py-3 text-base text-[#14140F] outline-none transition-colors focus:border-[#14140F] resize-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#14140F] px-6 py-3 text-[13px] text-white transition-colors hover:bg-black"
            >
              Send query
              <span aria-hidden="true">↗</span>
            </button>
            <span
              aria-live="polite"
              className={`text-[13px] transition-opacity ${
                sent ? 'opacity-100' : 'opacity-0'
              } text-[#14140F]/60`}
            >
              Opening your mail client…
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}