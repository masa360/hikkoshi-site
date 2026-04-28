const REASONS = [
  {
    num: "01",
    title: "営業電話の嵐から、お客様を守ります。",
    desc: "登録直後に各社から電話が一斉にかかる…そんな心配は一切なし。大阪市内限定の厳選業者だから、弊社がすべて取りまとめてメールでご返答。お客様は静かにじっくり比較できます。",
    icon: "📵",
  },
  {
    num: "02",
    title: "見積もり比較で引越し料金は最大50%OFF！",
    desc: "厳選した複数業者の見積もりを比較することで、1社依頼より料金が大幅に下がります。大阪市内なら平均3〜5万円安くなった事例も。",
    icon: "💰",
  },
  {
    num: "03",
    title: "業者へのご連絡は、最後の方でOK。",
    desc: "気になる業者が決まってから、お客様のタイミングで直接ご連絡を。スケジュール・サービス内容も含めて、ゆっくりご検討いただけます。",
    icon: "🕊️",
  },
];

export default function Reasons() {
  return (
    <section className="bg-brand-green py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="section-title">
          <span className="rounded-full bg-white px-6 py-2 text-brand-green">
            一括見積もりがオススメの理由
          </span>
        </h2>
        <div className="space-y-4">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft"
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-lg font-bold text-white">
                  {r.num}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-base font-bold text-gray-900 md:text-lg">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{r.desc}</p>
              </div>
              <div className="hidden text-5xl md:block">{r.icon}</div>
            </div>
          ))}
        </div>

        {/* 単身/ファミリーCTA */}
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <a
            href="#quote-form"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white p-5 font-bold text-brand-green shadow-soft transition hover:bg-yellow-50"
          >
            <span className="text-3xl">🧳</span>
            <div className="text-left">
              <div className="text-xs">単身パック</div>
              <div className="text-base">のお引越しです</div>
            </div>
            <span className="text-2xl">▶</span>
          </a>
          <a
            href="#quote-form"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white p-5 font-bold text-brand-green shadow-soft transition hover:bg-yellow-50"
          >
            <span className="text-3xl">👨‍👩‍👧</span>
            <div className="text-left">
              <div className="text-xs">2人以上</div>
              <div className="text-base">のお引越しです</div>
            </div>
            <span className="text-2xl">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
}
