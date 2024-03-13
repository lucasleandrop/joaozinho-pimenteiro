import mangaImg from "../../assets/geleia-de-manga.jpg";
import CartDirect from "../../components/CartDirect";

export default function GeleiaDeManga() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Geléia de Manga com Maracujá e Pimenta</h1>
      </div>
      <div className="imgProduct">
        <img src={mangaImg} alt="abacaxi-Img" />
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
          Elaborada com Manga, maracujá, pimenta e açúcar. Produzida de maneira
          artesanal, livre de conservantes químicos e corantes artificiais.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Harmoniza com carnes, grelhados, queijos, torradas, pães ou como
          recheio de diversas sobremesas.
        </p>
      </div>
    </section>
  );
}
