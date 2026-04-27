const STEPS = [
  {
    no: "STEP 1",
    icon: "✏️",
    title: "引越し情報を入力！",
    desc: "現住所・引越し先・人数を入力するだけ。約1分で完了。",
  },
  {
    no: "STEP 2",
    icon: "📨",
    title: "届いた見積りを比較！",
    desc: "最大10社から見積もりが届くので、料金・サービスを比較。",
  },
  {
    no: "STEP 3",
    icon: "🤝",
    title: "希望の引越し業者と契約！",
    desc: "気に入った業者に直接連絡して引越し当日を迎えるだけ。",
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
