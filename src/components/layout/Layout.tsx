import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 전체 화면을 차지하는 컨테이너
    <div className="fixed inset-0 bg-slate-50 flex items-center justify-center">
      {/* 고정 너비 컨테이너 */}
      <div className="w-96 min-h-screen bg-white shadow-sm flex flex-col">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
