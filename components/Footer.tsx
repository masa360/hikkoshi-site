export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-2 text-lg font-bold text-white">
              🏠 おおさか引越しナビ
            </div>
            <p className="text-xs text-gray-400">
              大阪市の引越し見積もり比較サイト。
              最大10社の業者から無料で一括見積もりが取れます。
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-bold text-white">サービス</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#quote-form" className="hover:text-white">
                  無料一括見積もり
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  単身パック
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  ファミリー引越し
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  オフィス移転
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-bold text-white">大阪市の対応エリア</h3>
            <ul className="grid grid-cols-2 gap-x-2 text-xs">
              {[
                "北区", "中央区", "西区", "天王寺区", "浪速区", "淀川区",
                "東淀川区", "城東区", "阿倍野区", "住吉区",
              ].map((w) => (
                <li key={w}>大阪市{w}</li>
              ))}
              <li>...全24区対応</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-bold text-white">お問い合わせ</h3>
            <p className="text-xs">📞 0120-000-000</p>
            <p className="text-xs">9:00〜21:00（年中無休）</p>
            <ul className="mt-3 space-y-1 text-xs">
              <li>
                <a href="/company" className="hover:text-white">
                  運営会社
                </a>
              </li>
              <li>
                <a href="/policy" className="hover:text-white">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/term" className="hover:text-white">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          © 2026 おおさか引越しナビ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
