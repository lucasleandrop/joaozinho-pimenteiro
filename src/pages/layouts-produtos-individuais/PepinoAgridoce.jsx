import pepinoImg from "../../assets/pepino-agridoce.jpg";
import CartDirect from "../../components/CartDirect";

export default function PepinoAgridoce() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Pepino Agridoce</h1>
      </div>
      <div className="imgProduct">
        <img src={pepinoImg} alt="abacaxi-Img" />
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
          Agridoce na medida certa, o antepasto de pepino é preparado com
          ingredientes frescos, sem corantes ou conservantes.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Ótimo para servir com pães italianos, torradas ou bolachas
          salgadas,carnes e saladas. Experimente servir gelado e com gergelim
          tostado por cima, fica uma delícia.
        </p>
      </div>
    </section>
  );
}
