import LastTrainingCard from "../components/dashboard/LastTrainingCard";
import LastCompetitionCard from "../components/dashboard/LastCompetitionCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import GoalsCard from "../components/dashboard/GoalsCard";

function DashboardPage() {
  return (
    <>
      <h2 className="mb-2 text-4xl font-bold text-slate-900">
        Bonjour Clément 👋
      </h2>

      <p className="mb-8 text-slate-600">
        Heureux de te revoir sur Athletix !
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <LastTrainingCard />
        <LastCompetitionCard />
        <ProgressCard />
        <GoalsCard />
      </div>
    </>
  );
}

export default DashboardPage;