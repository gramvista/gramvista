import { useState } from "react";
import { leadership } from "../../data/leadership";
function Portrait({ person }: { person: typeof leadership[number] }) {
  const [failed, setFailed] = useState(false);
  return person.image && !failed ? <img src={person.image} alt={person.name} style={{ objectPosition: person.imagePosition }} loading="lazy" width="480" height="480" onError={() => setFailed(true)} /> : <div className="leadership-initials" aria-label={`${person.name}, portrait unavailable`}>{person.initials}</div>;
}
export function Leadership() {
  return <section className="section container"><h2>Our leadership</h2><div className="leadership-grid">{leadership.map(person => <article key={person.name}><Portrait person={person} /><div><h3>{person.name}</h3><p className="leadership-role">{person.role}</p><p>{person.bio}</p></div></article>)}</div></section>;
}
