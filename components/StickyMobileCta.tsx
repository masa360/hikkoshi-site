export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-orange-200 bg-white p-2 shadow-2xl md:hidden">
      <a
        href="#quote-form"
        className="flex items-center justify-center gap-2 rounded-full bg-brand-orange py-3 font-bold text-white shadow-[0_4px_0_#c84a00]"
      >
        🔍 無料で一括見積もりをスタート
      </a>
    </div>
  );
}
