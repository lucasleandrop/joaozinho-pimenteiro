import gengibreImg from "../../assets/gengibre.jpg";
import CartDirect from "../../components/CartDirect";

export default function GengibreAgridoce() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Gengibre Agridoce</h1>
      </div>
      <div className="imgProduct">
        <img src={gengibreImg} alt="abacaxi-Img" />
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
          uma deliciosa conserva de gengibre fatiado com um sabor levemente
          picante e adocicado
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Ideal para acompanhar os pratos japoneses como o sushi, sashimi,
          niguiri, saladas e outros pratos orientais. Experimente!
        </p>
      </div>
    </section>
  );
}
