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

        {/* LINE誘導 */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://line.me/R/ti/p/YOUR_LINE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで簡単お見積り（友達追加）
          </a>
        </div>
        <p className="mt-2 text-xs text-white/70">しつこい営業・電話は一切しません</p>

        <div className="mt-6 rounded-2xl bg-white p-5 text-gray-800 shadow-soft">
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
