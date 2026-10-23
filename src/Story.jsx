import Countdown from './Countdown'
import { getInvite } from './event'
import Vinyl from './Vinyl'

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
          <span className="toy-slot rise" style={{ '--d': '80ms' }}>
            <img className="toy stroller" src="/art/stroller.png" alt="" width="456" height="460" />
          </span>
          <span className="toy-slot outfit-slot rise" style={{ '--d': '160ms' }}>
            <img className="toy outfit" src="/art/outfit.png" alt="" width="241" height="248" />
          </span>
          <span className="toy-slot rise" style={{ '--d': '240ms' }}>
            <img className="toy rings" src="/art/rings.png" alt="" width="282" height="269" />
          </span>
        </div>
      </div>
      <Countdown />
    </section>
  )
}
