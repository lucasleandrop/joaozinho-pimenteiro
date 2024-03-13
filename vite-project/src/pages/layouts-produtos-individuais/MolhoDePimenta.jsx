import molhoPimentaImg from "../../assets/molho-pimenta.jpg";
import CartDirect from "../../components/CartDirect";

export default function MolhoDePimenta() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Molho de Pimenta (fraco,médio ou forte)</h1>
      </div>
      <div className="imgProduct">
        <img src={molhoPimentaImg} alt="abacaxi-Img" />
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
          Sinta a explosão de sabores neste irresistível molho de pimenta,
          vinagre, preparado com uma cuidadosa seleção de ingredientes frescos e
          saudáveis. Tomates maduros, cebolas suculentas, pimentões vibrantes,
          ervas finas habilmente combinadas para criar uma sinfonia de aromas e
          gostos que elevam qualquer prato.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Este molho versátil é a adição perfeita para realçar pratos desde
          churrascos até tacos, proporcionando um toque picante e cheio de
          sabor. Experimente com carnes grelhadas, peixes, massas ou até mesmo
          como um mergulho para petiscos. Dê vida às suas refeições com nosso
          Molho de Pimenta Artesanal, uma experiência culinária que transformará
          cada prato com um toque apimentado e delicioso.
        </p>
      </div>
    </section>
  );
}
