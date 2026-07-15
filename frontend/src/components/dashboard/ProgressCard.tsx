import Card from "../Card";

function ProgressCard() {
  return (
    <Card title="📈 Progression">
      <div className="space-y-3">
        <p className="text-slate-600">
          Saison 2025
        </p>

        <div className="h-3 rounded-full bg-slate-200">
          <div className="h-3 w-3/4 rounded-full bg-orange-600"></div>
        </div>

        <p className="text-sm text-slate-500">
          Progression estimée : 75 %
        </p>
      </div>
    </Card>
  );
}

export default ProgressCard;