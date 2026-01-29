export default function DoneList({ done }) {
  return (
    <div>
      <h3>DONE</h3>
      {done.map(d => (
        <div key={d.id} className="done">
          <s>{d.text}</s>
        </div>
      ))}
    </div>
  );
}
