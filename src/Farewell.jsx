import { EVENT } from './event'

export default function Farewell() {
  return (
    <section id="farewell" className="farewell chapter">
      <img className="farewell-flower rise" src="/art/bouquet.png" alt="" width="261" height="279" />
      <p className="farewell-kicker rise">بفضل الله أزهرت حكايتنا</p>
      <h2 className="name rise" style={{ '--d': '80ms' }}>{EVENT.baby}</h2>
      <p className="farewell-line rise" style={{ '--d': '140ms' }}>
        وجودكم هو أجمل ما يزين فرحتنا
      </p>
      <ul className="farewell-facts rise" style={{ '--d': '200ms' }}>
        <li>{EVENT.dateLabel}</li>
        <li>{EVENT.timeLabel}</li>
        <li>{EVENT.place}</li>
      </ul>
    </section>
  )
}
