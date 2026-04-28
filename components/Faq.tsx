"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "申し込んだら各社から電話が一斉にかかってきませんか？",
    a: "いいえ、かかってきません。大阪市内限定で厳選した業者にのみ弊社が見積もりを依頼し、結果を弊社が取りまとめて1通のメールでお送りします。お客様の電話番号が各社に渡って一斉に着信する、という従来型の一括見積もりとは仕組みが違います。",
  },
  {
    q: "業者への連絡はいつすればいいですか？",
    a: "見積もりを比較して、本当に頼みたい業者が決まってからで構いません。それまではゆっくり比較をしていただいて、お客様のタイミングで最後に直接ご連絡ください。「電話するのは最後の方でOK」が私たちのスタンスです。",
  },
  {
    q: "業者の数が少ないのでは？大手は入っていますか？",
    a: "全国対応の総合サイトと比べれば登録社数は絞られていますが、大阪市内の引越しに本当に強い業者・実績のある業者だけを厳選しています。地域限定だからこそ、お客様の条件に合う業者を確実にご提案できます。",
  },
  {
    q: "一括見積もりにお金はかかりますか？",
    a: "いいえ、かかりません。見積もり比較は完全無料でご利用いただけます。料金が発生するのは、実際にご契約された引越し業者へのお支払いのみです。",
  },
  {
    q: "見積もりが届いた後、断ることはできますか？",
    a: "はい、もちろん可能です。お見積もりを比較してご自身に合った業者がいなかった場合や、引越し自体を取りやめた場合でも、キャンセル料は一切発生しません。お断りのご連絡も弊社にお任せいただけます。",
  },
  {
    q: "大阪市以外への引越しでも利用できますか？",
    a: "大阪市内からのお引越しであれば、市外・府外・全国どこへの引越しにも対応しています。逆に他府県から大阪市への引越しなど、出発地が大阪市でないお引越しは対応外となります。",
  },
  {
    q: "見積もりは最短どれくらいで届きますか？",
    a: "弊社が業者からの回答を取りまとめてお送りするため、最短当日中、遅くとも翌営業日中にはお見積もりをまとめてお届けします。",
  },
  {
    q: "個人情報の取り扱いは大丈夫ですか？",
    a: "お客様の電話番号やお名前を、いきなり業者全社に渡すことはありません。お客様が業者を選んで直接ご連絡されるまで、個別の連絡先は弊社で適切に管理します。SSL通信による暗号化も徹底しています。",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          ❓ よくあるご質問
        </h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-gray-50"
              >
                <span className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                    Q
                  </span>
                  <span className="font-bold text-gray-900">{f.q}</span>
                </span>
                <span
                  className={`shrink-0 text-brand-green transition-transform ${
                    openIdx === i ? "rotate-45" : ""
                  }`}
                >
                  ＋
                </span>
              </button>
              {openIdx === i && (
                <div className="border-t border-gray-100 bg-brand-green-light/40 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                      A
                    </span>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {f.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
