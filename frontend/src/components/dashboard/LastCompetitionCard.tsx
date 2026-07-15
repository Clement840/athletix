import Card from "../Card";

function LastCompetitionCard() {
  return (
    <Card title="🏆 Dernière compétition">
      <div className="space-y-2">
        <p className="text-xl font-semibold text-slate-900">
          100 m
        </p>

        <p className="text-orange-600 text-2xl font-bold">
          11"32
        </p>

        <p className="text-sm text-slate-400">
          +0.8 m/s
        </p>
      </div>
    </Card>
  );
}

export default LastCompetitionCard;