import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaPhone } from "react-icons/fa";

import style from "./AsideBar.module.css";

const AsideBar = () => {
  const [menuProducts, setMenuProducts] = useState(false);
  const [menuGeleias, setMenuGeleias] = useState(false);
  const [menuAgridoces, setMenuAgridoces] = useState(false);
  const [menuMolhos, setMenuMolhos] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const url1 = "/geleias";
    const url2 = "/molhos";
    const url3 = "/agridoces";
    // Fecha o menu quando a URL mudar
    if (
      location.pathname !== url1 ||
      location.pathname !== url2 ||
      location.pathname !== url3
    ) {
      setMenuGeleias(false);
      setMenuAgridoces(false);
      setMenuMolhos(false);
    }
  }, [location.pathname]); // Executa sempre que a URL mudar

  useEffect(() => {
    const { pathname } = window.location;

    switch (pathname) {
      case "/geleias":
        setMenuProducts(true);
        setMenuGeleias(true);
        break;
      case "/agridoces":
        setMenuProducts(true);
        setMenuAgridoces(true);
        break;
      case "/molhos":
        setMenuProducts(true);
        setMenuMolhos(true);
        break;
      default:
        break;
    }
  }, []);

  const alternateStateMenu = () => {
    setMenuProducts((prevState) => !prevState);
  };

  const geleiasClick = (event) => {
    event.stopPropagation();
    setMenuGeleias(true);
    setMenuMolhos(false);
    setMenuAgridoces(false);
  };

  const agridocesClick = (event) => {
    event.stopPropagation();
    setMenuAgridoces(true);
    setMenuMolhos(false);
    setMenuGeleias(false);
  };

  const molhosClick = (event) => {
    event.stopPropagation();
    setMenuMolhos(true);
    setMenuAgridoces(false);
    setMenuGeleias(false);
  };

  const closeMenus = () => {
    setMenuProducts(false);
    setMenuGeleias(false);
    setMenuAgridoces(false);
    setMenuMolhos(false);
  };

  return (
    <aside className={style.sidebar}>
      <ul>
        <Link to="/">
          <li>
            <h3 style={{ textDecoration: "underline", color: "#000" }}>
              Página Inicial
            </h3>
          </li>
        </Link>
        <li className={style.productsList} onClick={alternateStateMenu}>
          <h3 style={{ textDecoration: "underline" }}>Produtos</h3>
          <ul className={style.productsMenu}>
            {menuProducts && (
              <>
                <li className={style.geleias} onClick={geleiasClick}>
                  <Link to="geleias">
                    <h3 style={{ textDecoration: "underline", color: "#000" }}>
                      Geléias
                    </h3>
                  </Link>
                  <ul className={style.geleiasTipos}>
                    {menuGeleias && (
                      <>
                        <Link to="geleias/geleia-de-abacaxi">
                          <li>Geléia de Abacaxi com Pimenta</li>
                        </Link>
                        <Link to="geleias/geleia-de-manga">
                          <li>Geléia de Manga com Maracuja e Pimenta</li>
                        </Link>
                        <Link to="geleias/geleia-de-morango">
                          <li>Geléia de Morango com ou sem Pimenta</li>
                        </Link>
                        <Link to="geleias/geleia-ao-vinho">
                          <li>Geléia de Abacaxi ao Vinho</li>
                        </Link>
                        <Link to="geleias/geleia-de-pimenta">
                          <li>Geléia de Pimenta</li>
                        </Link>
                      </>
                    )}
                  </ul>
                </li>
                <li className={style.agridoces} onClick={agridocesClick}>
                  <Link to="agridoces">
                    {" "}
                    <h3 style={{ textDecoration: "underline", color: "#000" }}>
                      Agridoces
                    </h3>
                  </Link>
                  <ul className={style.agridocesTipos}>
                    {menuAgridoces && (
                      <>
                        <Link to="agridoces/gengibre-agridoce">
                          <li>Gengibre Agridoce</li>
                        </Link>
                        <Link to="agridoces/pepino-agridoce">
                          <li>Pepino Agridoce</li>
                        </Link>
                      </>
                    )}
                  </ul>
                </li>
                <li className={style.molhos} onClick={molhosClick}>
                  <Link to="molhos">
                    <h3 style={{ textDecoration: "underline", color: "#000" }}>
                      Molhos
                    </h3>
                  </Link>
                  <ul className={style.molhosTipos}>
                    {menuMolhos && (
                      <>
                        <Link to="molhos/molho-de-pimenta">
                          <li>Molho de Pimenta</li>
                        </Link>
                        <Link to="molhos/molho-vinagrete">
                          <li>Molho Vinagrete</li>
                        </Link>
                      </>
                    )}
                  </ul>
                </li>
              </>
            )}
          </ul>
        </li>

        <li>
          <Link
            to="contatos"
            className={style.contactMenu}
            onClick={closeMenus}
          >
            <h3>
              <FaPhone /> Contatos
            </h3>
          </Link>
        </li>
        <li>
          <Link
            to="quemSomos"
            className={style.quemSomosMenu}
            onClick={closeMenus}
          >
            <h3>Quem somos</h3>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideBar;
