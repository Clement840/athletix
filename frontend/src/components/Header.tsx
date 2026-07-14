type HeaderProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

function Header({ collapsed, onToggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700"
        >
          ☰
        </button>

        <h1 className="text-2xl font-bold text-slate-900">
          Athletix
        </h1>
      </div>

      <div className="text-sm text-slate-500">
        Sidebar {collapsed ? "réduite" : "ouverte"}
      </div>
    </header>
  );
}

export default Header;