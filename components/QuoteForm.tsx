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

      <div className="mt-6 text-center">
        <button type="submit" className="btn-cta-lg w-full md:w-auto">
          <span>無料</span>
          <span>見積もりをスタート</span>
          <span>▶</span>
        </button>
        <p className="mt-2 text-[11px] text-gray-500">
          ※ 入力1分・完全無料・しつこい営業電話なし
        </p>
      </div>
    </form>
  );
}
