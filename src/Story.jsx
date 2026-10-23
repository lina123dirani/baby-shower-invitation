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
        <div className="frame-wrap rise">
          <img src="/art/frame.png" alt="" width="1024" height="785" />
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
        </div>

        <div className="toys">
          <button
            type="button"
            className="toy-slot toy-link stroller rise"
            style={{ '--d': '80ms' }}
            onClick={() => openSection('rsvp')}
          >
            <img className="toy stroller" src="/art/stroller.png" alt="" width="456" height="460" />
            <span className="toy-label on-stroller">
              انقر هنا
              <br />
              لتأكيد الحضور
            </span>
          </button>
          <button
            type="button"
            className="toy-slot toy-link outfit-slot outfit rise"
            style={{ '--d': '160ms' }}
            onClick={() => openSection('gifts')}
          >
            <img className="toy outfit" src="/art/outfit.png" alt="" width="241" height="248" />
            <span className="toy-label on-outfit">
              انقر هنا
              <br />
              لعرض الهدايا المقترحة
            </span>
          </button>
          <button
            type="button"
            className="toy-slot toy-link rings rise"
            style={{ '--d': '240ms' }}
            onClick={() => openSection('details')}
          >
            <img className="toy rings" src="/art/rings.png" alt="" width="282" height="269" />
            <span className="toy-label on-details">
              انقر هنا
              <br />
              للتفاصيل
            </span>
          </button>
        </div>
      </div>
      <Countdown />
    </section>
  )
}
