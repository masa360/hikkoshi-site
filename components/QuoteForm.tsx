"use client";

import { useState } from "react";

const OSAKA_WARDS = [
  "北区", "都島区", "福島区", "此花区", "中央区", "西区", "港区", "大正区",
  "天王寺区", "浪速区", "西淀川区", "淀川区", "東淀川区", "東成区", "生野区",
  "旭区", "城東区", "鶴見区", "阿倍野区", "住之江区", "住吉区", "東住吉区",
  "平野区", "西成区",
];

const PREFECTURES = [
  "大阪府", "兵庫県", "京都府", "奈良県", "滋賀県", "和歌山県", "三重県",
  "東京都", "神奈川県", "千葉県", "埼玉県", "愛知県", "福岡県", "その他",
];

const FAMILY_TYPES = [
  { value: "single", label: "単身（1人）" },
  { value: "couple", label: "2人" },
  { value: "family3", label: "3人家族" },
  { value: "family4", label: "4人以上" },
  { value: "office", label: "事業所・オフィス" },
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // 実装時はここでAPIへPOST
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border-4 border-brand-green bg-white p-8 text-center shadow-soft">
        <div className="mb-3 text-5xl">✅</div>
        <h3 className="mb-2 text-2xl font-bold text-brand-green">
          見積もり依頼を受け付けました！
        </h3>
        <p className="text-gray-700">
          24時間以内に提携業者から最大10社のお見積もりが届きます。
          <br />
          メールをご確認ください。
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-brand-green underline"
        >
          別の条件で再度見積もる
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-3xl border-4 border-brand-orange bg-white p-5 shadow-soft md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-bold text-gray-700">
            🏠 現住所（大阪市の区）
          </label>
          <select
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          >
            <option value="">区を選択</option>
            {OSAKA_WARDS.map((w) => (
              <option key={w} value={w}>
                大阪市{w}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-gray-700">
            🚚 引越し先の都道府県
          </label>
          <select
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          >
            <option value="">選択してください</option>
            {PREFECTURES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-gray-700">
            👨‍👩‍👧 引越し人数
          </label>
          <select
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          >
            <option value="">選択してください</option>
            {FAMILY_TYPES.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-bold text-gray-700">
            📅 引越し希望日（目安）
          </label>
          <input
            type="date"
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-gray-700">
            📧 メールアドレス
          </label>
          <input
            type="email"
            required
            placeholder="example@mail.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          />
        </div>
      </div>

      {/* LINE誘導バナー */}
      <div className="mt-4 flex items-center gap-3 rounded-xl border-2 border-[#06C755] bg-[#f0fdf4] px-4 py-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#06C755]">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
        </div>
        <div className="min-w-0 flex-1 text-xs text-gray-700">
          LINEでの簡単お見積りを希望の方は
          <a
            href="https://line.me/R/ti/p/YOUR_LINE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-0.5 font-bold text-[#06C755] underline underline-offset-2"
          >
            こちらより友達追加してください
          </a>
          <span className="ml-1 text-[10px] text-gray-500">（電話・しつこい営業は一切しません）</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button type="submit" className="btn-cta-lg w-full md:w-auto">
          <span>無料</span>
          <span>見積もりをスタート</span>
          <span>▶</span>
        </button>
        <p className="mt-3 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-bold text-gray-600">
          <span className="flex items-center gap-1"><span className="text-red-500">📵</span> しつこい営業電話は絶対にしません</span>
          <span className="flex items-center gap-1"><span className="text-green-600">✅</span> 完全無料</span>
          <span className="flex items-center gap-1"><span>⏱️</span> 入力1分</span>
        </p>
      </div>
    </form>
  );
}
