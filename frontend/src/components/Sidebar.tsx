import {
  House,
  Dumbbell,
  Trophy,
  ChartColumn,
  Target,
} from "lucide-react";

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

        <button className="flex items-center gap-3 w-full rounded-lg p-3 hover:bg-orange-100 transition">
            <House size={20} />
            {!collapsed && "Accueil"}
        </button>

        <button className="flex items-center gap-3 w-full rounded-lg p-3 hover:bg-orange-100 transition">
            <Dumbbell size={20} />
            {!collapsed && "Entraînements"}
        </button>

        <button className="flex items-center gap-3 w-full rounded-lg p-3 hover:bg-orange-100 transition">
            <Trophy size={20} />
            {!collapsed && "Compétitions"}
        </button>

        <button className="flex items-center gap-3 w-full rounded-lg p-3 hover:bg-orange-100 transition">
            <ChartColumn size={20} />
            {!collapsed && "Statistiques"}
        </button>

        <button className="flex items-center gap-3 w-full rounded-lg p-3 hover:bg-orange-100 transition">
            <Target size={20} />
            {!collapsed && "Objectifs"}
        </button>

      </nav>
    </aside>
  );
}

export default Sidebar;