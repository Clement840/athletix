import Card from "../components/Card";

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
        <Card title="🏃 Dernier entraînement">
          <p className="text-slate-500">Aucune séance enregistrée.</p>
        </Card>

        <Card title="🏆 Dernière compétition">
          <p className="text-slate-500">Aucune compétition enregistrée.</p>
        </Card>

        <Card title="📈 Progression">
          <p className="text-slate-500">Les statistiques apparaîtront ici.</p>
        </Card>

        <Card title="🎯 Objectifs">
          <p className="text-slate-500">Aucun objectif défini.</p>
        </Card>
      </div>
    </>
  );
}

export default DashboardPage;