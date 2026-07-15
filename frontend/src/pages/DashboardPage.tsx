import Card from "../components/Card";
import { dashboardCards } from "../data/dashboard";

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
        {dashboardCards.map((card) => (
            <Card
                key={card.title}
                title={card.title}
            >
                <p className="text-slate-500">
                    {card.description}
                </p>
            </Card>
        ))}
      </div>
    </>
  );
}

export default DashboardPage;