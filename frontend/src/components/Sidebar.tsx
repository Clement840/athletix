type SidebarProps = {
  collapsed: boolean;
};

function Sidebar({ collapsed }: SidebarProps) {
  return (
    <aside
      className={`
        h-screen
        bg-white
        border-r
        border-slate-200
        transition-all
        duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      <div className="flex items-center justify-center h-20 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-orange-600">
          {collapsed ? "A" : "ATHLETIX"}
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        <button className="w-full text-left p-3 rounded-lg hover:bg-orange-100">
          🏠 {collapsed ? "" : "Accueil"}
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-orange-100">
          🏃 {collapsed ? "" : "Entraînements"}
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-orange-100">
          🏆 {collapsed ? "" : "Compétitions"}
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-orange-100">
          📈 {collapsed ? "" : "Statistiques"}
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-orange-100">
          🎯 {collapsed ? "" : "Objectifs"}
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;