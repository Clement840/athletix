import MainLayout from "./layouts/MainLayout";
import Card from "./components/Card";

function App() {
  return (
    <MainLayout>
      <h2 className="mb-8 text-4xl font-bold text-slate-900">
        Bonjour Clément 👋
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card title="🏃 Dernier entraînement">
          <p>Aucune séance enregistrée.</p>
        </Card>

        <Card title="🏆 Dernière compétition">
          <p>Aucune compétition enregistrée.</p>
        </Card>

        <Card title="📈 Progression">
          <p>Les statistiques apparaîtront ici.</p>
        </Card>

        <Card title="🎯 Objectifs">
          <p>Aucun objectif défini.</p>
        </Card>
      </div>
    </MainLayout>
  );
}

export default App;