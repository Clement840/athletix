import { useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "../components/sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar collapsed={collapsed} />

      <main className="flex-1">
        <header className="flex items-center border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 transition"
          >
            ☰
          </button>

          <h1 className="ml-6 text-2xl font-bold text-slate-900">
            Athletix
          </h1>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;