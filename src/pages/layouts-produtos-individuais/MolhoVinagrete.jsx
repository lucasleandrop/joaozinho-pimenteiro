import vinagreteImg from "../../assets/molho-vinagrete.jpg";
import CartDirect from "../../components/CartDirect";

export default function MolhoVinagrete() {
  return (
    <section className="single-product">
      <div className="titleProduct">
        <h1>Molho Vinagrete</h1>
      </div>
      <div className="imgProduct">
        <img src={vinagreteImg} alt="abacaxi-Img" />
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
          Nosso molho vinagrete gourmet artesanal é uma combinação requintada de
          cebolas finamente cortadas, pimentão para uma mistura sutil de doçura
          e pungência, e tomates suculentos que trazem frescor, equilibrados por
          notas ácidas. As ervas finas adicionam camadas de aroma e sabor,
          enquanto o sal é ajustado para realçar os sabores naturais. O vinagre
          de alta qualidade proporciona uma nota ácida irresistível. A
          combinação cria uma verdadeira obra de arte culinária, destacando
          frescor e complexidade de sabores.
        </p>
      </div>
      <div className="suggestionProduct">
        <h3>Sugestões de Uso </h3>
        <br />
        <p>
          Além de ser usado para cozinhar, nosso Molho Vinagrete combina com
          várias opções de comidas, como: churrasco, pizza, pastel, coxinha,
          hambúrguer, lasanha, panqueca, ovos mexidos/frito e muito mais... O
          simples se torna incrível! Experimente!
        </p>
      </div>
    </section>
  );
}
