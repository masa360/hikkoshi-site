export default function Campaign() {
  return (
    <section className="bg-brand-cream py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-gradient-to-r from-brand-pink to-pink-400 p-1">
          <div className="rounded-xl bg-white p-5 md:p-8">
            <div className="text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-yellow-200 px-4 py-1 text-xs font-bold text-yellow-900 md:text-sm">
                🌸 春の大感謝プレゼントキャンペーン開催中！
              </div>
              <h3 className="text-xl font-bold md:text-2xl">
                抽選で<span className="text-brand-pink">最大10万円</span>
                キャッシュバック！
              </h3>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-pink-50 p-4 text-center">
                <div className="text-3xl">🏆</div>
                <div className="text-xs font-bold text-pink-700">1名様</div>
                <div className="text-lg font-bold">
                  引越し料金<span className="text-2xl text-brand-pink">10万円</span>
                  キャッシュバック
                </div>
              </div>
              <div className="rounded-xl bg-yellow-50 p-4 text-center">
                <div className="text-3xl">🎁</div>
                <div className="text-xs font-bold text-yellow-700">10名様</div>
                <div className="text-lg font-bold">
                  引越し料金<span className="text-2xl text-brand-orange">1万円</span>
                  キャッシュバック
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-gray-600">
              さらに！抽選でQUOカード500円分を100名様にプレゼント🎫
            </p>
            <p className="mt-1 text-center text-[10px] text-gray-400">
              ※ キャンペーン期間：2026年4月1日〜2026年6月30日
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
