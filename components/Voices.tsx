const VOICES = [
  {
    name: "K.Tさん（30代女性・大阪市淀川区）",
    avatar: "👩",
    title: "想定より2万円安くなりました！",
    body: "繁忙期で諦めていた費用が、3社の見積もり比較で予算内に収まりました。スタッフの方も丁寧でしたし、また使いたいです。",
    rating: 5,
  },
  {
    name: "M.Sさん（20代男性・大阪市西区）",
    avatar: "👨",
    title: "翌日にはまとめて見積もりが届きました",
    body: "単身パックを探していて、翌日には複数社の見積もりが1通にまとまって届きました。電話が鳴らないのが本当に快適で、ゆっくり比較できました。",
    rating: 5,
  },
  {
    name: "Y.Iさん（40代女性・大阪市天王寺区）",
    avatar: "👩‍🦰",
    title: "電話対応もしっかりしてくれた",
    body: "ネット見積もりだけだと不安だったのですが、サポートに電話したらきちんと相談に乗ってくれました。",
    rating: 4,
  },
  {
    name: "T.Hさん（50代男性・大阪市東住吉区）",
    avatar: "🧔",
    title: "大阪→東京の長距離も格安で",
    body: "長距離は高くなると思っていましたが、4社比較で40%以上安くなりました。事前見積もりで本当に良かった。",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="text-yellow-500">
      {"★".repeat(n)}
      <span className="text-gray-300">{"★".repeat(5 - n)}</span>
    </div>
  );
}

export default function Voices() {
  return (
    <section className="bg-brand-cream py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">
          📣 「おおさか引越しナビ」利用者の声
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          実際にご利用いただいた大阪市のお客様からのリアルな声
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {VOICES.map((v) => (
            <div
              key={v.name}
              className="rounded-2xl bg-white p-5 shadow-soft transition hover:-translate-y-1"
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-2xl">
                  {v.avatar}
                </div>
                <div>
                  <Stars n={v.rating} />
                  <div className="text-xs text-gray-500">{v.name}</div>
                </div>
              </div>
              <h3 className="mb-1 font-bold text-gray-900">「{v.title}」</h3>
              <p className="text-sm leading-relaxed text-gray-700">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
