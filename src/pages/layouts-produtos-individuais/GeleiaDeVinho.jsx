import vinhoImg from "../../assets/geleia-abacaxi-vinho.jpg";
import CartDirect from "../../components/CartDirect";

export default function GeleiaDeVinho() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Geléia de Abacaxi ao Vinho</h1>
      </div>
      <div className="imgProduct">
        <img src={vinhoImg} alt="abacaxi-Img" />
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
          Nossa geleia de abacaxi ao vinho é uma mistura exótica e deliciosa,
          cuidadosamente criada para proporcionar uma experiência única de
          sabores. Com abacaxis frescos selecionados, açúcar cristal, um toque
          sofisticado de vinho tinto seco, pimenta dedo de moça e o gengibre,
          com sua vivacidade e aroma distintivo, complementa a mistura, criando
          uma harmonia entre o doce, o picante e o exótico.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Essa geleia versátil pode ser apreciada como acompanhamento para
          queijos, carnes grelhadas, torradas, queijos ou até mesmo como parte
          de receitas criativas. Cada colherada é uma explosão de sabores que
          transporta seu paladar para uma jornada deliciosa e memorável
        </p>
      </div>
    </section>
  );
}
