export default function Cover({ phase, onOpen }) {
  const sealed = phase === 'sealed'

  return (
    <section id="cover" className={`cover chapter ${phase}`}>
      <div className="cover-inner">
        <h1 className="cover-title">
          <span>حكاية حب صغيرة</span>
          <span>تبدأ بوصول أميرتنا</span>
        </h1>

        <div className="envelope-stage">
          <div className="envelope-float">
            <img
              className="envelope-img"
              src="/art/envelope.png"
              alt=""
              width="696"
              height="447"
            />
          </div>

          <button
            type="button"
            className="seal"
            onClick={onOpen}
            disabled={!sealed}
            aria-label="افتحي الرسالة"
          />
        </div>

        <p className="cover-caption">
          افتحوا الرسالة لنكتمل فرحنا بكم
          <small>بكل الحب، عائلتنا الصغيرة</small>
        </p>
      </div>
    </section>
  )
}
