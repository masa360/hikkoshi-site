export default function FinalCta() {
  return (
    <section className="bg-gradient-to-b from-brand-green to-brand-green-dark py-12">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <p className="mb-2 text-sm">いますぐ無料で見積もり！</p>
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          大阪市の引越し料金、
          <br className="md:hidden" />
          最安値で見つけよう。
        </h2>
        <a href="#quote-form" className="btn-cta-lg">
          🔍 無料一括見積もりへ
        </a>

        <div className="mt-8 rounded-2xl bg-white p-5 text-gray-800 shadow-soft">
          <div className="text-xs">困った時も安心！カスタマーセンターへお電話ください</div>
          <a
            href="tel:0120-000-000"
            className="mt-1 block text-3xl font-bold text-brand-orange md:text-4xl"
          >
            📞 0120-000-000
          </a>
          <div className="text-xs text-gray-500">受付時間：9:00〜21:00（年中無休）</div>
        </div>
      </div>
    </section>
  );
}
