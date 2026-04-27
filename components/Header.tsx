export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-2xl">
            🏠
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-brand-green">
              おおさか引越しナビ
            </h1>
            <p className="text-[10px] leading-tight text-gray-500">
              大阪市の引越し見積もり比較
            </p>
          </div>
        </div>
        <a
          href="tel:0120-000-000"
          className="hidden items-center gap-2 rounded-full border border-brand-green px-4 py-2 text-sm font-bold text-brand-green md:flex"
        >
          📞 0120-000-000
        </a>
      </div>
    </header>
  );
}
