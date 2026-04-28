const COMPARE = [
  {
    label: "見積もり依頼直後",
    other: {
      icon: "📞📞📞📞",
      text: "登録した瞬間、各社から一斉に電話。仕事中・育児中でも容赦なし。",
      bad: true,
    },
    ours: {
      icon: "📩",
      text: "弊社から1通だけ受付メール。電話は一切鳴りません。",
      bad: false,
    },
  },
  {
    label: "業者とのやり取り",
    other: {
      icon: "🔁",
      text: "5〜10社それぞれと個別に電話・メール対応。同じ説明を何度も。",
      bad: true,
    },
    ours: {
      icon: "🤝",
      text: "弊社が窓口になって取りまとめ。やり取りは1本化。",
      bad: false,
    },
  },
  {
    label: "業者の数と質",
    other: {
      icon: "🌀",
      text: "全国数百社が登録。聞いたこともない業者からも連絡が。",
      bad: true,
    },
    ours: {
      icon: "🏆",
      text: "大阪市の地域限定。実績のある業者だけを厳選してご紹介。",
      bad: false,
    },
  },
  {
    label: "業者へ電話するタイミング",
    other: {
      icon: "⏰",
      text: "向こうから次々かかってくる。出ないと留守電・SMSでフォロー。",
      bad: true,
    },
    ours: {
      icon: "🕊️",
      text: "見積もりを比較して、本当に頼みたい業者にお客様から最後にご連絡。",
      bad: false,
    },
  },
];

export default function NoSpamCall() {
  return (
    <section className="bg-gradient-to-b from-white via-brand-green-light/40 to-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* リード */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-block rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white">
            おおさか引越しナビが選ばれる理由
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
            <span className="rounded bg-yellow-200 px-2">電話の嵐</span>に追われない、
            <br className="md:hidden" />
            新しい見積もり比較。
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-700 md:text-base">
            「一括見積もりを申し込んだら、登録直後から知らない番号で電話が鳴り止まなくなった…」
            <br className="hidden md:block" />
            そんな経験、ありませんか？
            <br />
            <span className="font-bold text-brand-green">
              おおさか引越しナビは、大阪市内限定だからこそ業者を厳選し、弊社がすべて取りまとめてご返答します。
            </span>
          </p>
        </div>

        {/* 比較テーブル */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
          {/* ヘッダー行 */}
          <div className="grid grid-cols-[100px_1fr_1fr] gap-0 border-b-2 border-gray-200 text-center text-xs font-bold md:grid-cols-[160px_1fr_1fr] md:text-sm">
            <div className="bg-gray-50 px-2 py-3 text-gray-600"></div>
            <div className="bg-gray-100 px-2 py-3 text-gray-600">
              <div>よくある</div>
              <div>一括見積もりサイト</div>
            </div>
            <div className="bg-brand-green px-2 py-3 text-white">
              <div>おおさか</div>
              <div>引越しナビ</div>
            </div>
          </div>

          {/* 行 */}
          {COMPARE.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[100px_1fr_1fr] gap-0 border-b border-gray-100 last:border-0 md:grid-cols-[160px_1fr_1fr] ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="flex items-center justify-center bg-gray-50 px-2 py-4 text-center text-[11px] font-bold leading-tight text-gray-700 md:text-xs">
                {row.label}
              </div>
              <div className="px-3 py-4 text-center text-xs leading-relaxed text-gray-600 md:text-sm">
                <div className="mb-1 text-2xl grayscale">{row.other.icon}</div>
                <p>{row.other.text}</p>
              </div>
              <div className="border-l-2 border-brand-green/30 bg-brand-green-light/30 px-3 py-4 text-center text-xs leading-relaxed text-gray-800 md:text-sm">
                <div className="mb-1 text-2xl">{row.ours.icon}</div>
                <p className="font-medium">{row.ours.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* スタンス */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-dashed border-brand-green bg-white p-5 md:p-6">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🕊️</div>
            <div>
              <h3 className="mb-1 text-base font-bold text-brand-green md:text-lg">
                「業者にお電話するのは、最後の方でOK」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                まずはゆっくりお見積もりを比較してください。気になる業者が見つかったら、お客様のタイミングでご連絡を。
                <br />
                それまでお客様の電話は静かなままです。
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3 text-sm font-bold text-white shadow-cta transition hover:brightness-110 md:text-base"
          >
            📩 静かな見積もり比較を試す
          </a>
          <p className="mt-2 text-xs text-gray-500">入力1分 / 完全無料 / 電話ラッシュなし</p>
        </div>
      </div>
    </section>
  );
}
