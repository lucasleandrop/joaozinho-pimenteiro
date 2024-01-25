export default function Card({ name, img }) {
  return (
    <div className="card">
      <img src={img} style={{ width: "50px", height: "auto" }} alt={name} />

      <p> {name}</p>
    </div>
  );
}
