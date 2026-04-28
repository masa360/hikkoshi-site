import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white pb-12 pt-6">
      {/* 背景の街並みイラスト風 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-20">
        <div className="mx-auto flex h-full max-w-6xl items-end justify-around px-4 text-4xl">
          <span>🏠</span>
          <span>🏢</span>
          <span>🏬</span>
          <span>🏠</span>
          <span>🏯</span>
          <span>🏢</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* キャッチコピー */}
        <div className="mb-6 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white">
            📵 営業電話の嵐、もうイヤだ。
          </div>
          <h2 className="mb-2 text-2xl font-bold leading-tight md:text-4xl">
            <span className="rounded-md bg-yellow-200 px-2">電話が鳴り止まない</span>
            <br className="md:hidden" />
            <span className="text-brand-orange">一括見積もり、卒業。</span>
          </h2>
          <p className="text-sm text-gray-700 md:text-base">
            大阪市内限定だから<span className="font-bold text-brand-green">厳選した業者</span>を
            <br className="md:hidden" />
            <span className="font-bold">弊社が取りまとめて</span>ご返答します。
            <br />
            <span className="text-xs text-gray-600 md:text-sm">
              お客様は何十社からの電話に追われることはありません。
            </span>
          </p>

          {/* 比較バー：他社 vs うち */}
          <div className="mx-auto mt-4 max-w-2xl overflow-hidden rounded-xl border-2 border-brand-green bg-white shadow-soft">
            <div className="grid grid-cols-2 text-sm font-bold">
              <div className="bg-gray-100 px-3 py-3 text-gray-600">
                <div className="text-[10px] font-normal text-gray-500">よくある一括見積もり</div>
                <div className="mt-1 text-base">📞📞📞📞</div>
                <div className="mt-1 text-[11px] font-normal">登録直後に各社から電話</div>
              </div>
              <div className="bg-gradient-to-b from-brand-green to-brand-green-dark px-3 py-3 text-white">
                <div className="text-[10px] font-normal opacity-90">おおさか引越しナビ</div>
                <div className="mt-1 text-base">📩 1通だけ</div>
                <div className="mt-1 text-[11px] font-normal opacity-90">取りまとめてご返答</div>
              </div>
            </div>
          </div>

          {/* もちろん安さも */}
          <p className="mt-3 text-xs text-gray-600 md:text-sm">
            もちろん厳選業者の比較で、<span className="font-bold text-brand-orange">最大50%OFF</span>も狙えます。
          </p>

          {/* 信頼バッジ */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">📵 電話ラッシュなし</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">✅ 完全無料</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">🏠 大阪市内限定</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">🔒 個人情報保護</span>
          </div>
        </div>

        {/* 見積もりフォーム */}
        <QuoteForm />
      </div>
    </section>
  );
}
