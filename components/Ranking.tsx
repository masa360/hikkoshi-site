const COMPANIES = [
  {
    rank: 1,
    name: "アート引越センター",
    rating: 4.8,
    feature: "大阪市内シェアNo.1 / 養生サービス充実",
    color: "bg-yellow-400",
  },
  {
    rank: 2,
    name: "サカイ引越センター",
    rating: 4.7,
    feature: "創業大阪 / 全国対応 / 自社車両多数",
    color: "bg-gray-300",
  },
  {
    rank: 3,
    name: "アーク引越センター",
    rating: 4.5,
    feature: "単身パックが安い / 短距離得意",
    color: "bg-orange-400",
  },
  {
    rank: 4,
    name: "ハート引越センター",
    rating: 4.4,
    feature: "格安パック充実 / 大阪市内対応",
    color: "bg-blue-300",
  },
  {
    rank: 5,
    name: "アリさんマークの引越社",
    rating: 4.3,
    feature: "丁寧な作業に定評 / 関西圏に強い",
    color: "bg-green-300",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="text-yellow-500">
      {"★".repeat(full)}
      {half && "☆"}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
      <span className="ml-1 text-xs text-gray-700">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function Ranking() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-2 text-center">
          <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white">
            大阪市の人気業者
          </span>
        </div>
        <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">
          🏆 引越し業者ランキング
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          大手引越し業者から、地域に密着した大阪市で対応可能な業者まで100社を厳選！
          <br />
          あなたにぴったりの引越し業者がきっと見つかります。
        </p>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-soft">
          <div className="grid grid-cols-12 gap-2 bg-brand-green-light px-4 py-3 text-xs font-bold text-gray-700">
            <div className="col-span-2">順位</div>
            <div className="col-span-5">業者名</div>
            <div className="col-span-3">評価</div>
            <div className="col-span-2 text-right">詳細</div>
          </div>
          {COMPANIES.map((c) => (
            <div
              key={c.rank}
              className="grid grid-cols-12 items-center gap-2 border-t border-gray-100 px-4 py-3 text-sm transition hover:bg-gray-50"
            >
              <div className="col-span-2">
                <div
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${c.color} font-bold text-white`}
                >
                  {c.rank}
                </div>
              </div>
              <div className="col-span-5">
                <div className="font-bold">{c.name}</div>
                <div className="text-xs text-gray-500">{c.feature}</div>
              </div>
              <div className="col-span-3">
                <Stars rating={c.rating} />
              </div>
              <div className="col-span-2 text-right">
                <a
                  href="#quote-form"
                  className="rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white"
                >
                  見積もる
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
