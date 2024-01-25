import pepinoImg from "../assets/pepino-agridoce.jpg";
import gengibreImg from "../assets/gengibre.jpg";
import Card from "../components/Card";

export default function AgridocesPage() {
  return (
    <section className="products">
      <Card name={"Pepino Agridoce"} img={pepinoImg} />
      <Card name={"Gengibre Agridoce"} img={gengibreImg} />
    </section>
  );
}
