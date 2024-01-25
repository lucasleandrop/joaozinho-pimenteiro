import abacaxiImg from "../assets/geleia-de-abacaxi.jpg";
import abacaxiVinhoImg from "../assets/geleia-abacaxi-vinho.jpg";
import mangaImg from "../assets/geleia-de-manga.jpg";
import morangoImg from "../assets/geleia-morango.jpg";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function GeleiasPage() {
  return (
    <section className="products">
      <Card name={"Geléia de Abacaxi com Pimenta"} img={abacaxiImg} />
      <Link to="geleia-de-abacaxi"> Saiba mais</Link>

      <Card name={"Geléia de Manga com Maracuja e Pimenta"} img={mangaImg} />
      <Card name={"Geléia de Morango com ou sem Pimenta"} img={morangoImg} />
      <Card name={"Geléia de Abacaxi ao Vinho"} img={abacaxiVinhoImg} />
    </section>
  );
}
