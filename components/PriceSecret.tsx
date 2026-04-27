const PRICE_COMPARISONS = [
  {
    title: "単身引越し（大阪市内）",
    a: "32,000円",
    b: "17,000円",
    off: "47%",
    save: "15,000円",
  },
  {
    title: "2人家族（大阪→兵庫）",
    a: "50,000円",
    b: "30,000円",
    off: "40%",
    save: "20,000円",
  },
  {
    title: "4人家族（大阪→東京）",
    a: "80,000円",
    b: "40,000円",
    off: "50%",
    save: "40,000円",
  },
];

export default function PriceSecret() {
  return (
    <section className="bg-brand-cream py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mx-auto mb-2 max-w-3xl text-center text-xl font-bold md:text-2xl">
          <span className="text-brand-orange">どうして？</span>
        </h2>
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          一括見積もりで引越し料金が安くなる秘密！？
        </h2>

        <div className="mb-6 rounded-2xl bg-white p-5 shadow-soft md:p-6">
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            引越し業者によって<span className="font-bold text-brand-orange">得意な引越しと苦手な引越し</span>があり、料金の差が出ます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <div className="text-3xl">📦</div>
              <div className="text-sm font-bold">荷物量の多い引越しが得意</div>
            </div>
            <div className="rounded-xl bg-green-50 p-4 text-center">
              <div className="text-3xl">🧳</div>
              <div className="text-sm font-bold">単身引越しが得意</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
            また「ダンボール箱の料金」「作業員人数による割増」も異なります。そのため
            <span className="font-bold text-brand-orange">複数のお見積もりを比較する事</span>で、最大50%もの引越し料金が安くなる可能性があります。
          </p>
        </div>

        {/* 価格比較テーブル */}
        <div className="space-y-3">
          {PRICE_COMPARISONS.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-2xl bg-white shadow-soft"
            >
              <div className="bg-brand-green px-4 py-2 text-sm font-bold text-white">
                {p.title}
              </div>
              <div className="grid grid-cols-3 items-center gap-2 p-4 text-center">
                <div>
                  <div className="text-xs text-gray-500">A社</div>
                  <div className="text-lg font-bold text-gray-400 line-through">
                    {p.a}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-brand-orange">B社</div>
                  <div className="text-xl font-bold text-brand-orange">{p.b}</div>
                </div>
                <div>
                  <div className="inline-block rounded-full bg-brand-pink px-3 py-1 text-xs font-bold text-white">
                    {p.off} OFF
                  </div>
                  <div className="mt-1 text-xs font-bold">{p.save}もお得！</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm font-bold md:text-base">
          このように…複数の業者を比較すると
          <span className="rounded bg-yellow-200 px-2">引越し料金が安くなる！</span>
        </p>
      </div>
    </section>
  );
}
