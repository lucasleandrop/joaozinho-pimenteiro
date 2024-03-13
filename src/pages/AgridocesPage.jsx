import pepinoImg from "../assets/pepino-agridoce.jpg";
import gengibreImg from "../assets/gengibre.jpg";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function AgridocesPage() {
  return (
    <section className="products">
      <Link to="pepino-agridoce" className="linkProduct">
        <Card name={"Pepino Agridoce"} img={pepinoImg} />
      </Link>
      <Link to="gengibre-agridoce" className="linkProduct">
        <Card name={"Gengibre Agridoce"} img={gengibreImg} />
      </Link>
    </section>
  );
}
