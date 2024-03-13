import morangoImg from "../../assets/geleia-morango.jpg";

import CartDirect from "../../components/CartDirect";
export default function GeleiaDeMorango() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Geléia de Morango com ou sem Pimenta</h1>
      </div>
      <div className="imgProduct">
        <img src={morangoImg} alt="abacaxi-Img" />
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
          A Geleia de Morango do Joãozinho Pimenteiro é saborosa, e com um toque
          pra lá de especial, a com pimenta é levemente picante.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Ideal para acompanhar torradas, tapiocas e outros petiscos.
          Experimente combinar a geleia de morango com um canapé de queijo,
          presunto ou ricota.
        </p>
      </div>
    </section>
  );
}
