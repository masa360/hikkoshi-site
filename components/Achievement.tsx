export default function Achievement() {
  return (
    <section className="bg-brand-green py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-white p-6 text-center shadow-soft">
          <div className="text-xs text-gray-500">大阪市の引越し見積もり</div>
          <div className="my-1 text-3xl font-bold md:text-4xl">
            利用者実績<span className="text-brand-orange">12万人</span>突破！
          </div>
          <div className="mt-2 inline-flex items-center gap-2 text-xs text-gray-600">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            大阪市内限定だから業者を厳選。だから安心。
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
            <div className="rounded bg-brand-green-light p-2">
              📞 電話受付
              <div className="font-bold">9:00〜21:00</div>
            </div>
            <div className="rounded bg-brand-green-light p-2">
              📧 メール受付
              <div className="font-bold">24時間365日</div>
            </div>
            <div className="rounded bg-brand-green-light p-2">
              🚚 厳選提携業者
              <div className="font-bold">大阪市内限定</div>
            </div>
            <div className="rounded bg-brand-green-light p-2">
              ⭐ 平均満足度
              <div className="font-bold">4.6 / 5.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
