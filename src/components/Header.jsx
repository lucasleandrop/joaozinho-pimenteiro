import { Link } from "react-router-dom";

import logoJoao from "../assets/logo-joaozinho.png";
import InstagramPage from "./InstagramPage";
import FacebookPage from "./FacebookPage";
import WhatasappDirect from "./WhatsappDirect";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h3>Nossas redes sociais</h3>
        <br />
        <InstagramPage />

        <FacebookPage />
      </div>
      <Link to="/">
        <div>
          <img
            className={styles.logoJoaozinho}
            src={logoJoao}
            alt="logo-joaozinho"
          />
        </div>
      </Link>
      <div>
        <h3>Fale conosco</h3>
        <br />
        <WhatasappDirect />
      </div>
    </header>
  );
}
