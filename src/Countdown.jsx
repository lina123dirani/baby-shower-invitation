import { useEffect, useState } from 'react'
import { EVENT_DATE } from './event'

function parts(diff) {
  const total = Math.max(0, Math.floor(diff / 1000))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

function Unit({ value, label }) {
  const text = String(value).padStart(2, '0')
  return (
    <div className="unit">
      <div className="unit-num" key={text}>{text}</div>
      <div className="unit-label">{label}</div>
    </div>
  )
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const { days, hours, minutes, seconds } = parts(EVENT_DATE.getTime() - now)

  return (
    <div
      id="countdown"
      className="countdown"
      role="timer"
      aria-label={`المتبقي ${days} يوماً و${hours} ساعة و${minutes} دقيقة و${seconds} ثانية`}
    >
      <div className="digits">
        <Unit value={days} label="يوم" />
        <span className="colon" aria-hidden="true">:</span>
        <Unit value={hours} label="ساعة" />
        <span className="colon" aria-hidden="true">:</span>
        <Unit value={minutes} label="دقيقة" />
        <span className="colon" aria-hidden="true">:</span>
        <Unit value={seconds} label="ثانية" />
      </div>
    </div>
  )
}
