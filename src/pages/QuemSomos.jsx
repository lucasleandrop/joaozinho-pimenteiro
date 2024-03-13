import React from "react";

import InstagramPage from "../components/InstagramPage";
import FacebookPage from "../components/FacebookPage";
import style from "./QuemSomos.module.css";
export default function QuemSomos() {
  return (
    <div className={style.containerHome}>
      <div>
        <h1>Bem-vindo à Joãozinho Pimenteiro Molhos Artesanais Gourmet!</h1>
        <br />
        <br />
        <p>
          Somos uma empresa familiar chamada Joãozinho Pimenteiro, fundada por
          João Paulo Santana Leandro na cidade de Curitiba-PR.
        </p>

        <br />
        <br />
        <p>
          Nosso objetivo é levar até você os melhores molhos, geleias e
          agridoces artesanais gourmet, feitos com ingredientes frescos e de
          qualidade.
        </p>
        <p>
          Nossa paixão pela gastronomia nos levou a criar produtos únicos,
          desenvolvidos cuidadosamente para adicionar sabor e excitação às suas
          refeições.
        </p>
        <br />
        <br />
        <p>
          Acreditamos no poder dos ingredientes frescos e na produção artesanal
          como elementos-chave para a criação de sabores autênticos e
          inesquecíveis.
        </p>
        <br />
        <br />
        <h3>Atendemos também a sua empresa, venha ser nosso revendedor.</h3>
        <br />
        <br />
        <p>
          Para garantir que você desfrute de nossos produtos no auge do frescor,
          realizamos entregas semanais em Curitiba e região metropolitana. Nós
          nos esforçamos para entregar a você a mesma experiência que teria ao
          visitar nosso estabelecimento. Nossos produtos são embalados com
          cuidado e são transportados em condições ideais para que você possa
          saboreá-los como se tivessem sido feitos naquele mesmo dia.
        </p>
        <br />
        <br />
        <p>
          {" "}
          Na Joãozinho Pimenteiro, você encontrará uma variedade notável de
          molhos, desde os suaves e aromáticos até os picantes e intensos.
          Nossas geleias são perfeitas para adicionar um toque especial aos seus
          pratos, e os agridoces artesanais vão surpreender o seu paladar. Cada
          produto é elaborado com dedicação e amor pela gastronomia, visando
          proporcionar momentos únicos de prazer gustativo. Navegue em nosso
          site para conhecer nossa história, explorar nossa linha de produtos e
          encontrar inspiração para suas receitas.
        </p>
        <br />
        <br />
        <p>
          {" "}
          Além disso, fique por dentro de nossas promoções e novidades seguindo
          nossas redes sociais para receber atualizações exclusivas.{" "}
          <InstagramPage />
          <FacebookPage />
        </p>
        <br />
        <br />
        <p>
          A Joãozinho Pimenteiro está ansiosa para ser sua escolha número um
          quando se trata de molhos, geleias e agridoces artesanais gourmet.
          Permita-nos apimentar sua vida gastronômica com sabores frescos,
          deliciosos e autênticos. Faça seu pedido hoje mesmo e experimente o
          melhor da culinária artesanal.
        </p>
      </div>
    </div>
  );
}
