import Card from "../Card";

function LastTrainingCard() {
  return (
    <Card title="🏃 Dernier entraînement">
      <div className="space-y-2">
        <p className="text-xl font-semibold text-slate-900">
          Sprint
        </p>

        <p className="text-slate-600">
          8 × 60 m
        </p>

        <p className="text-sm text-slate-400">
          Hier
        </p>
      </div>
    </Card>
  );
}

export default LastTrainingCard;