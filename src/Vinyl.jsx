import { useEffect, useRef, useState } from 'react'

export default function Vinyl() {
  const [on, setOn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => () => {
    audioRef.current?.pause()
  }, [])

  function press() {
    if (!audioRef.current) {
      const audio = new Audio('/audio/benti.m4a')
      audio.preload = 'auto'
      audio.addEventListener('ended', () => setOn(false))
      audioRef.current = audio
    }

    const audio = audioRef.current
    if (!audio.paused) {
      audio.pause()
      setOn(false)
      return
    }

    audio.play().then(() => setOn(true)).catch(() => setOn(false))
  }

  return (
    <button
      type="button"
      className={on ? 'vinyl is-on' : 'vinyl'}
      onClick={press}
      aria-pressed={on}
      aria-label={on ? 'إيقاف الأغنية' : 'انقر هنا لتشغيل الأغنية'}
    >
      <img src="/art/vinyl.png" alt="" width="236" height="238" />
    </button>
  )
}
