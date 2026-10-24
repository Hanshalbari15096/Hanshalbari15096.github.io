import { useEffect, useState } from 'react'

/**
 * Reveals `text` one character at a time after an initial delay.
 * Newlines are preserved so the headline can break exactly where intended.
 */
export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    let index = 0
    let intervalId: number | undefined

    const delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setDisplayed(text.slice(0, index))

        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(delayId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
