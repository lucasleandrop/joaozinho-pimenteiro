import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import style from "./InstagramPage.module.css";

export default function InstagramPage() {
  return (
    <span className={style.instagramPage}>
      <Link to="https://www.instagram.com/joaozinhopimenteiro/" target="_blank">
        <FaInstagram /> Instagram
      </Link>
    </span>
  );
}
