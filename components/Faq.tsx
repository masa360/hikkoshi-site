"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "一括見積もりにお金はかかりますか？",
    a: "いいえ、かかりません。見積もりは完全無料でご利用いただけます。料金が発生するのは、実際にご契約された引越し業者へのお支払いのみです。",
  },
  {
    q: "一括見積もりの登録後にキャンセルすることは可能ですか？",
    a: "はい、可能です。お見積もりを比較してご自身に合った業者がいなかった場合や、引越し自体を取りやめた場合でも、キャンセル料は一切発生しません。",
  },
  {
    q: "営業電話がたくさんかかってきませんか？",
    a: "ご希望に応じて連絡方法を「メールのみ」に設定できます。お気軽にご利用ください。",
  },
  {
    q: "大阪市以外への引越しでも利用できますか？",
    a: "もちろんです。大阪市内同士はもちろん、大阪市から全国どこへの引越しにも対応した業者をご紹介します。",
  },
  {
    q: "見積もりは最短どれくらいで届きますか？",
    a: "最短10分程度で1社目の見積もりが届きます。多くのお客様は24時間以内に5〜10社のお見積もりを受け取られています。",
  },
  {
    q: "個人情報の取り扱いは大丈夫ですか？",
    a: "SSL通信による暗号化、プライバシーマーク取得業者との連携など、個人情報保護を徹底しています。",
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
