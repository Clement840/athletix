import { useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar collapsed={collapsed} />

      <main className="flex-1">
        <Header
            collapsed={collapsed}
            onToggleSidebar={() => setCollapsed(!collapsed)}
        />

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;