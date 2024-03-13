import React from "react";
import { FaPepperHot } from "react-icons/fa";
import Card from "./Card";
import agridocesImg from "../assets/agridocesImg.png";
import molhosImg from "../assets/molhosImg.png";
import geleiasImg from "../assets/duasgeleiasImg.png";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

import videoGeleias from "../assets/videoGeleias.mp4";

export default function Home() {
  return (
    <main>
      <div className={style.containerHome}>
        <div>
          <h1>
            <FaPepperHot fill="red" />
            Joãozinho Pimenteiro Produtos Artesanais Gourmet
            <FaPepperHot fill="red" />
          </h1>
          <br />
          <p>
            Produtos 100% artesanais livres de conservantes químicos e corantes
            artificais, feitos com produtos frescos visando muita qualidade e
            sabor.
          </p>
          <br />
          <p>Venha experimentar!</p>
        </div>
        <div>
          <br />
          <br />
          <h3>Conheça nossa linha de produtos</h3>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className={style.cardsHome}>
          <Link to="geleias">
            <h2>Geléias</h2>
            <Card img={geleiasImg} />
          </Link>
          <Link to="agridoces">
            <h2>Agridoces</h2>
            <Card img={agridocesImg} />
          </Link>
          <Link to="molhos">
            <h2>Molhos</h2>
            <Card img={molhosImg} />
          </Link>
        </div>
      </div>
      <div className={style.videosHome}>
        <video className={style.videoHome} controls>
          <source src={videoGeleias} type="video/mp4" />
          Seu navegador não suporta a tag video.
        </video>
      </div>
    </main>
  );
}
