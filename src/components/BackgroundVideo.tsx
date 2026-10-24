import { useVideoScrub } from '../hooks/useVideoScrub'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4'

export function BackgroundVideo() {
  const { videoRef, handleSeeked } = useVideoScrub()

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      className="fixed inset-0 z-0 h-full w-full object-cover object-[70%_center]"
    />
  )
}
