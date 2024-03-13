import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import InstagramPage from "./InstagramPage";
import FacebookPage from "./FacebookPage";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Lucas Leandro Pereira <FaCopyright /> 2024
      </div>
      <div>
        <Link to="/">Página Inicial</Link>
      </div>
      <div>
        <Link to="contatos"> Contatos</Link>
      </div>
      <div>
        <Link to="quemSomos"> Sobre nós</Link>
      </div>
      <div>
        <h4>Nossos Produtos</h4>
        <p>
          <Link to="geleias">Geléias</Link>
        </p>
        <p>
          <Link to="agridoces">Agridoces</Link>
        </p>
        <p>
          <Link to="molhos">Molhos</Link>
        </p>
      </div>
      <div>
        <h4>Nossas redes sociais</h4>
        <p>
          <InstagramPage />
        </p>
        <p>
          <FacebookPage />
        </p>
      </div>
    </footer>
  );
}
