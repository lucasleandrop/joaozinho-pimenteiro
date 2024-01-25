import molhoPimentaImg from "../assets/molho-pimenta.jpg";
import molhoVinagreteImg from "../assets/molho-vinagrete.jpg";
import Card from "../components/Card";

export default function MolhosPage() {
  return (
    <section className="products">
      <Card name={"Molho de Pimenta"} img={molhoPimentaImg} />
      <Card name={"Molho Vinagrete"} img={molhoVinagreteImg} />
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
