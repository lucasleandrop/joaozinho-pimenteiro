import { FaCartShopping } from "react-icons/fa6";

import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import style from "./CartDirect.module.css";

export default function CartDirect() {
  return (
    <span className={style.whatsUnderline}>
      <Link>
        <p>
          <ReactWhatsapp
            className={style.cartDirect}
            number="41-99999-7680"
            message="Olá, vim conhecer mais sobre os produtos gourmets do Joãozinho Pimenteiro."
            style={{
              backgroundColor: "transparent",
              border: "transparent",
              cursor: "pointer",
            }}
          >
            <FaCartShopping target="_blank" />
            Faça seu pedido agora
          </ReactWhatsapp>
        </p>
      </Link>
    </span>
  );
}
