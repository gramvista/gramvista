import { stats } from "../../data/stats";
export function StatsSection() {
  return (
    <div className="container stats">
      {stats.map((s) => (
        <div key={s.label}>
          <span>{s.label}</span>
          <strong>{s.value}</strong>
        </div>
      ))}
    </div>
  );
}
