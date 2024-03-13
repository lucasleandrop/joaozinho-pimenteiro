import { Link } from "react-router-dom";
import molhoPimentaImg from "../assets/molho-pimenta.jpg";
import molhoVinagreteImg from "../assets/molho-vinagrete.jpg";
import Card from "../components/Card";

export default function MolhosPage() {
  return (
    <section className="products">
      <Link to="molho-de-pimenta" className="linkProduct">
        <Card name={"Molho de Pimenta"} img={molhoPimentaImg} />
      </Link>
      <Link to="molho-vinagrete" className="linkProduct">
        <Card name={"Molho Vinagrete"} img={molhoVinagreteImg} />
      </Link>
    </section>
  );
  {
    /*       <div className="cardMolhoVinagrete">
        <img
          src={molhoVinagreteImg}
          style={{ width: "50px", height: "auto" }}
          alt=""
        />

        <p> Molho Vinagrete</p>
      </div> */
  }
}
