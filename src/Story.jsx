import Countdown from './Countdown'
import { getInvite } from './event'
import Vinyl from './Vinyl'

function openSection(id) {
  const node = document.getElementById(id)
  if (!node) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  node.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export default function Story() {
  const invite = getInvite()
  return (
    <section id="story" className="story chapter">
      <div className="sheet">
        <div className="story-scene rise">
          <img className="story-art" src="/art/story-scene.png" alt="" width="812" height="1016" />
          <div className="frame-copy">
            <p className="frame-poem">
              <span>بفضل الله أزهرت</span>
              <span>حكايتنا بأجمل العطايا</span>
              <span>أشرقت دنيانا بقدوم</span>
            </p>
            <p className="name">لورا</p>
            <p className="frame-date">{invite.dateLabel}</p>
          </div>
          <Vinyl />
          <button type="button" className="scene-hit stroller" onClick={() => openSection('rsvp')}>
            <span className="scene-label">انقر هنا لتأكيد الحضور</span>
          </button>
          <button type="button" className="scene-hit dress" onClick={() => openSection('gifts')}>
            <span className="scene-label">
              انقر هنا
              <br />
              لعرض الهدايا المقترحة
            </span>
          </button>
          <button type="button" className="scene-hit basket" onClick={() => openSection('details')}>
            <span className="scene-label">
              انقر هنا
              <br />
              لمعرفة التفاصيل
            </span>
          </button>
        </div>
      </div>
      <Countdown />
    </section>
  )
}
