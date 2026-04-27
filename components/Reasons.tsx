const REASONS = [
  {
    num: "01",
    title: "見積もり比較で引越し料金最大50%OFF！",
    desc: "1社だけに依頼するより、複数業者の見積もりを比較するだけで料金が大幅に下がります。大阪市内なら平均3〜5万円安くなった事例も。",
    icon: "💰",
  },
  {
    num: "02",
    title: "スケジュールの合う業者が見つかる！",
    desc: "希望日にちょうど空きがある業者を効率よく見つけられます。繁忙期（3〜4月）でも安心。",
    icon: "📅",
  },
  {
    num: "03",
    title: "各業者のサービス比較にも便利！",
    desc: "梱包資材無料・養生サービス・荷物の一時預かりなど、業者ごとの特典をまとめて比較できます。",
    icon: "📋",
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
