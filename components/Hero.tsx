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
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-pink px-4 py-1 text-xs font-bold text-white">
            🎉 大阪市内最安値挑戦中
          </div>
          <h2 className="mb-2 text-2xl font-bold leading-tight md:text-4xl">
            <span className="rounded-md bg-yellow-200 px-2">驚きの低価格！</span>
            <br className="md:hidden" />
            <span className="text-brand-orange">最大50%OFF</span>
          </h2>
          <p className="text-sm text-gray-700 md:text-base">
            大阪市の引越しは、たった<span className="font-bold text-brand-orange">1分の入力</span>で
            <br className="md:hidden" />
            早くてかんたんな<span className="font-bold">一括見積もり</span>がおすすめです！
          </p>

          {/* 価格比較バー */}
          <div className="mx-auto mt-4 flex max-w-2xl items-stretch overflow-hidden rounded-xl border-2 border-brand-orange bg-white text-sm font-bold shadow-soft">
            <div className="flex-1 bg-gray-100 px-3 py-3 text-gray-600">
              <div className="text-xs font-normal">A社</div>
              <div className="text-base">5.4万円</div>
            </div>
            <div className="flex-1 bg-gray-100 px-3 py-3 text-gray-600">
              <div className="text-xs font-normal">B社</div>
              <div className="text-base">4.2万円</div>
            </div>
            <div className="flex-1 bg-gradient-to-b from-brand-orange to-brand-orange-dark px-3 py-3 text-white">
              <div className="text-xs font-normal">C社</div>
              <div className="text-base">2.7万円</div>
              <div className="text-[10px]">⭐最安!</div>
            </div>
          </div>

          {/* 信頼バッジ */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">✅ 完全無料</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">✅ 個人情報保護</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">✅ 大阪市内対応</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">✅ 最大10社比較</span>
          </div>
        </div>

        {/* 見積もりフォーム */}
        <QuoteForm />
      </div>
    </section>
  );
}
