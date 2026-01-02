import abacaxiImg from "../assets/geleia-de-abacaxi.jpg";
import abacaxiVinhoImg from "../assets/geleia-abacaxi-vinho.jpg";
import mangaImg from "../assets/geleia-de-manga.jpg";
import morangoImg from "../assets/geleia-morango.jpg";
import geleiaPimenta from "../assets/geleiaPimenta.jpg";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function GeleiasPage() {
  return (
    <section className="products">
      <Link to="geleia-de-abacaxi" className="linkProduct">
        <Card name={"Geléia de Abacaxi com Pimenta"} img={abacaxiImg} />
      </Link>

      <Link to="geleia-de-manga" className="linkProduct">
        <Card name={"Geléia de Manga com Maracuja e Pimenta"} img={mangaImg} />
      </Link>
      <Link to="geleia-de-morango" className="linkProduct">
        <Card name={"Geléia de Morango Pimenta"} img={morangoImg} />
      </Link>
      <Link to="geleia-ao-vinho" className="linkProduct">
        <Card name={"Geléia de Abacaxi ao Vinho"} img={abacaxiVinhoImg} />
      </Link>
      <Link to="geleia-de-pimenta" className="linkProduct">
        <Card name={"Geléia de Pimenta"} img={geleiaPimenta} />
      </Link>
    </section>
  );
}
