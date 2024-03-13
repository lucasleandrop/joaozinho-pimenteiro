import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import styles from "./WhatsappDirect.module.css";

export default function WhatasappDirect() {
  return (
    <span className={styles.whatsUnderline}>
      <Link>
        <span>
          <ReactWhatsapp
            className={styles.whatsappContact}
            number="41-99999-7680"
            message="Olá, vim conhecer mais sobre os produtos gourmets do Joãozinho Pimenteiro."
            style={{
              backgroundColor: "transparent",
              border: "transparent",
              cursor: "pointer",
            }}
          >
            <FaWhatsapp target="_blank" />
            WhatsApp
          </ReactWhatsapp>
        </span>
      </Link>
    </span>
  );
}
