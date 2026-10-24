import { useEffect, useRef } from 'react'

const SENSITIVITY = 0.8
const MIN_SEEK_DELTA = 0.005

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

/**
 * Horizontal mouse scrubbing for a background video.
 *
 * Movement across the window maps to a position in the timeline. A seek lock
 * stops every mousemove from flooding the element; when a seek lands, the hook
 * checks whether the target moved on and queues the next one.
 */
export function useVideoScrub() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const targetTime = useRef(0)
  const isSeeking = useRef(false)

  const seek = () => {
    const video = videoRef.current
    if (!video || isSeeking.current) return
    if (!Number.isFinite(video.duration) || video.duration <= 0) return
    if (Math.abs(video.currentTime - targetTime.current) < MIN_SEEK_DELTA) return

    isSeeking.current = true
    video.currentTime = targetTime.current
  }

  const handleSeeked = () => {
    isSeeking.current = false
    seek()
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX: number | null = null

    const handleMouseMove = (event: MouseEvent) => {
      if (prevX === null) {
        prevX = event.clientX
        return
      }

      const delta = event.clientX - prevX
      prevX = event.clientX

      if (!Number.isFinite(video.duration) || video.duration <= 0) return

      targetTime.current = clamp(
        targetTime.current + (delta / window.innerWidth) * SENSITIVITY * video.duration,
        0,
        video.duration,
      )

      seek()
    }

    const resetPointer = () => {
      prevX = null
    }

    const handleLoadedMetadata = () => {
      targetTime.current = video.currentTime
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('blur', resetPointer)
    document.documentElement.addEventListener('mouseleave', resetPointer)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('blur', resetPointer)
      document.documentElement.removeEventListener('mouseleave', resetPointer)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  return { videoRef, handleSeeked }
}
