const GIFTS = [
  { src: '/art/bunny.png', w: 221, h: 261, label: 'كتب وقصص صغيرة' },
  { src: '/art/rainbow.png', w: 284, h: 240, label: 'تذكار يبقى معها' },
  { src: '/art/outfit.png', w: 241, h: 248, label: 'ملابس جميلة' },
  { src: '/art/elephant.png', w: 154, h: 199, label: 'ألعاب ودمى' },
]

export default function Gifts() {
  return (
    <section id="gifts" className="gifts chapter">
      <div className="sheet gifts-sheet">
        <div className="gift-head">
          <img className="gift-flower" src="/art/gift-flower-left.png" alt="" width="218" height="259" />
          <h2 className="section-title rise">هدايا صغيرة، وذكريات تدوم</h2>
          <img className="gift-flower" src="/art/gift-flower-right.png" alt="" width="221" height="260" />
        </div>
        <p className="gift-lead rise" style={{ '--d': '80ms' }}>
          وجودكم بيننا هو أجمل هدية، وفرحتكم بقدوم لورا تكفينا.
        </p>
        <p className="gift-lead rise" style={{ '--d': '140ms' }}>
          وإن أحببتم إهداء أميرتنا الصغيرة شيئاً، جمعنا لكم بعض الأفكار
          <br />
          بكل حب:
        </p>
        <hr className="rule rise" />
        <ul className="gift-grid">
          {GIFTS.map((gift, index) => (
            <li key={gift.label} className="gift rise" style={{ '--d': `${index * 80}ms` }}>
              <img src={gift.src} alt="" width={gift.w} height={gift.h} />
              <p>{gift.label}</p>
            </li>
          ))}
        </ul>
        <hr className="rule" />
        <p className="gift-foot rise">اختاروا ما يلامس قلوبكم، فالمحبة هي أجمل ما نهديه.</p>
      </div>
    </section>
  )
}
