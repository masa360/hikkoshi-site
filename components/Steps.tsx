const STEPS = [
  {
    no: "STEP 1",
    icon: "✏️",
    title: "引越し情報を入力！",
    desc: "現住所・引越し先・人数を入力するだけ。約1分で完了。",
  },
  {
    no: "STEP 2",
    icon: "📩",
    title: "弊社が取りまとめてご返答！",
    desc: "厳選した大阪市の業者から集めた見積もりを、弊社が1通のメールにまとめてお送りします。各社からの一斉電話はありません。",
  },
  {
    no: "STEP 3",
    icon: "🕊️",
    title: "気になる業者にだけご連絡！",
    desc: "じっくり比較して、本当に頼みたい業者にお客様から最後にご連絡。お電話するのは最後の方でOKです。",
  },
];

export default function Steps() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-2xl font-bold md:text-3xl">
          <span className="border-b-4 border-brand-green pb-1">
            引越し見積もりサービスの流れ
          </span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.no}
              className="relative rounded-2xl border-2 border-brand-green-light bg-brand-green-light p-5"
            >
              <div className="mb-2 inline-block rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white">
                {s.no}
              </div>
              <div className="my-2 text-center text-5xl">{s.icon}</div>
              <h3 className="mb-1 text-center text-base font-bold text-gray-900">
                {s.title}
              </h3>
              <p className="text-center text-sm text-gray-700">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-3xl text-brand-green md:block">
                  ▶
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <a href="#quote-form" className="btn-cta-lg">
            🧳 単身パックで見積もる
          </a>
          <a href="#quote-form" className="btn-cta-lg">
            👨‍👩‍👧 2人以上で見積もる
          </a>
        </div>
      </div>
    </section>
  );
}
