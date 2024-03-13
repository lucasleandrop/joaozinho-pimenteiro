import geleiaPimenta from "../../assets/geleiaPimenta.jpg";
import CartDirect from "../../components/CartDirect";

export default function GeleiaDePimenta() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Geléia de Pimenta</h1>
      </div>
      <div className="imgProduct">
        <img src={geleiaPimenta} alt="abacaxi-Img" />
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
          A nossa Geleia de Pimenta dedo de moça, elaborada com pimenta, maçã e
          açucar de maneira artesanal e livre de conservantes. É uma mistura de
          doce e picante que surpreende muitoo e ela combina com tantas coisas
          que quem gosta de comer e gosta de pimenta, não consegue esquecer esse
          sabor. É a perfeita combinação entre a doçura e picância.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Uma geleia versátil, perfeita para sanduíches, hambúrgueres, torradas,
          dadinho de tapioca, queijos e até carnes grelhadas.
        </p>
      </div>
    </section>
  );
}
