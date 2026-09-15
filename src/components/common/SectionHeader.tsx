export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
