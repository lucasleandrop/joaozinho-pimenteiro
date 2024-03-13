import style from "./Card.module.css";

export default function Card({ name, img }) {
  return (
    <div className={style.card}>
      <img src={img} alt={name} />

      <div className={style.cardText}> {name}</div>
    </div>
  );
}
