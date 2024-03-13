import abacaxiImg from "../../assets/geleia-de-abacaxi.jpg";
import CartDirect from "../../components/CartDirect";

export default function GeleiaDeAbacaxi() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Geléia de Abacaxi com Pimenta</h1>
      </div>
      <div className="imgProduct">
        <img src={abacaxiImg} alt="abacaxi-Img" />
      </div>
      <div className="contactToBuy">
        <CartDirect />
        <br />
        <br />
      </div>
      <div className="descriptionProduct">
        <h3>Descrição do Produto</h3>
        <br />
        <p>
          Elaborada com abacaxi, pimenta, gengibre e açúcar.Produzida de maneira
          artesanal,livre de conservantes químicos e corantes artificiais.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Harmonização com queijos e carnes de porco, cordeiro e ovelha, além de
          pães, torradinhas, croissants, panquecas, bruschettas, cheesecakes,
          waffer...{" "}
        </p>
      </div>
    </section>
  );
}
