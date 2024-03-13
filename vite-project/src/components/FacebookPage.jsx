import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import style from "./FacebookPage.module.css";

export default function FacebookPage() {
  return (
    <span className={style.facebookPage}>
      <Link
        to="https://www.facebook.com/joaozinhoprodutosartesanais/?locale=pt_BR"
        target="_blank"
      >
        <FaFacebook /> Facebook
      </Link>
    </span>
  );
}
