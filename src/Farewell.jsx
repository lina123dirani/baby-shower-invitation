import { useEffect, useState } from 'react'

const STORAGE_KEY = 'lora-rsvp'

export default function Farewell() {
  const [name, setName] = useState('')
  const [choice, setChoice] = useState('')
  const [saved, setSaved] = useState(false)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
      if (!stored?.saved) return
      setName(stored.name || '')
      setChoice(stored.choice || '')
      setSaved(true)
    } catch {
      /* a private browser can block storage */
    }
  }, [])

  function pick(next) {
    const trimmed = name.trim()
    if (!trimmed) {
      setMissing(true)
      return
    }
    setChoice(next)
    setSaved(true)
    setMissing(false)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: trimmed,
        choice: next,
        saved: true,
      }))
    } catch {
      /* the confirmation still shows for this visit */
    }
  }

  function again() {
    setName('')
    setChoice('')
    setSaved(false)
    setMissing(false)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* nothing else to clear */
    }
  }

  return (
    <section id="rsvp" className="rsvp chapter">
      <div className="rsvp-sheet">
        <img className="rsvp-sprig rsvp-sprig-left" src="/art/rsvp-pampas-left.png" alt="" width="236" height="264" />
        <img className="rsvp-sprig rsvp-sprig-right" src="/art/rsvp-pampas-right.png" alt="" width="236" height="264" />

        <p className="rsvp-intro rise">
          <span>يسعدنا أن نعرف إن كنتم ستشاركونا فرحة استقبال صغيرتنا لورا،</span>
          <span>لنسعد لقائكم بأكثر حب.</span>
        </p>

        <div className="rsvp-stage rise" style={{ '--d': '120ms' }}>
          <form className="rsvp-card" onSubmit={(event) => event.preventDefault()}>
            <img className="rsvp-flower" src="/art/rsvp-flower.png" alt="" width="369" height="357" />
            <h2>RSVP</h2>

            <label className="rsvp-name">
              <span>الاسم</span>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                  if (event.target.value.trim()) setMissing(false)
                }}
                aria-invalid={missing}
                autoComplete="name"
              />
            </label>

            <p className="rsvp-question">هل ستنضمون إلينا؟</p>
            <div className="rsvp-choices">
              <button
                type="button"
                className={choice === 'yes' ? 'is-yes on' : 'is-yes'}
                aria-pressed={choice === 'yes'}
                onClick={() => pick('yes')}
              >
                أجل، سأكون حاضر
              </button>
              <button
                type="button"
                className={choice === 'no' ? 'is-no on' : 'is-no'}
                aria-pressed={choice === 'no'}
                onClick={() => pick('no')}
              >
                أعتذر عن الحضور
              </button>
            </div>

            {saved && (
              <div className="rsvp-saved">
                <p>Response saved</p>
                <button type="button" className="rsvp-again" onClick={again}>
                  Submit new response
                </button>
              </div>
            )}
          </form>
          <img className="rsvp-bunny" src="/art/rsvp-bunny.png" alt="" width="327" height="415" />
        </div>
      </div>
    </section>
  )
}
