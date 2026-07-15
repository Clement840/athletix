import Card from "../Card";

function GoalsCard() {
  return (
    <Card title="🎯 Objectifs">
      <div className="space-y-2">
        <p className="font-medium text-slate-900">
          Passer sous les 11"00
        </p>

        <p className="text-sm text-slate-500">
          Objectif principal de la saison.
        </p>
      </div>
    </Card>
  );
}

export default GoalsCard;