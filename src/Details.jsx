import { CalendarIcon, CameraIcon, ClockIcon, PinIcon, SparkIcon } from './icons'
import { EVENT } from './event'

const MEMORIES = [
  {
    title: 'لحظات مباركة',
    text: 'نجتمع لنبارك قدوم لورا ونشارك فرحتنا',
    icon: CalendarIcon,
  },
  {
    title: 'صور وذكريات',
    text: 'نلتقط صوراً جميلة لتبقى ذكرى',
    icon: CameraIcon,
  },
  {
    title: 'ضيافة وحلوى',
    text: 'نشارك الحلوى والضيافة في أجواء مليئة بالمحبة',
    icon: SparkIcon,
  },
]

export default function Details() {
  return (
    <section id="details" className="details chapter">
      <div className="details-cream">
        <span className="pampas-slot pampas-slot-top" aria-hidden="true">
          <img className="pampas" src="/art/pampas-b.png" alt="" width="320" height="365" />
        </span>
        <span className="pampas-slot pampas-slot-bottom" aria-hidden="true">
          <img className="pampas" src="/art/pampas-a.png" alt="" width="320" height="365" />
        </span>

        <div className="sheet details-sheet">
          <h2 className="section-title rise">تفاصيل احتفالنا بأميرتنا الصغيرة</h2>

          <div className="when-row rise" style={{ '--d': '120ms' }}>
            <img className="rings-side" src="/art/rings.png" alt="" width="282" height="269" />
            <ol className="when">
              <li>
                <span className="when-icon"><CalendarIcon /></span>
                <span className="when-text">{EVENT.dateLabel}</span>
              </li>
              <li>
                <span className="when-icon"><PinIcon /></span>
                <span className="when-text">{EVENT.place}</span>
              </li>
              <li>
                <span className="when-icon"><ClockIcon /></span>
                <span className="when-text">{EVENT.timeLabel}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="memories">
        <img className="mem-elephant" src="/art/elephant.png" alt="" width="154" height="199" />
        <img className="mem-flower mem-flower-top" src="/art/bouquet.png" alt="" width="261" height="279" />
        <div className="memories-copy">
          <h2 className="memories-title rise">تفاصيل صغيرة ، وذكريات كبيرة</h2>
          <ul className="memory-list">
            {MEMORIES.map((item, index) => {
              const Icon = item.icon
              return (
                <li key={item.title} className="rise" style={{ '--d': `${index * 90}ms` }}>
                  <h3>
                    <Icon />
                    <span>{item.title}</span>
                  </h3>
                  <p>{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="memories-foot">
          <img className="mem-flower mem-flower-bottom" src="/art/bouquet.png" alt="" width="261" height="279" />
          <p className="memory-close rise">وجودكم هو أجمل ما يزين فرحتنا !</p>
          <img className="giraffe" src="/art/giraffe.png" alt="" width="221" height="325" />
        </div>
      </div>
    </section>
  )
}
