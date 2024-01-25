import { useState } from "react";
import { Link } from "react-router-dom";

export default function AsideBar() {
  const [menuProducts, setmenuProducts] = useState(false);

  const openProductList = () => {
    setmenuProducts(!menuProducts);
  };

  const [menuGeleias, setmenuGeleias] = useState(false);

  const geleiasClick = () => {
    setmenuGeleias(!menuGeleias);
    setMenuMolhos(false);
    setMenuAgridoces(false);
  };

  const [menuAgridoces, setMenuAgridoces] = useState(false);

  const agridocesClick = () => {
    setMenuAgridoces(!menuAgridoces);
    setMenuMolhos(false);
    setmenuGeleias(false);
  };

  const [menuMolhos, setMenuMolhos] = useState(false);

  const molhosClick = () => {
    setMenuMolhos(!menuMolhos);
    setMenuAgridoces(false);
    setmenuGeleias(false);
  };

  const closeMenus = () => {
    setmenuProducts(false);
    setmenuGeleias(false);
    setMenuAgridoces(false);
    setMenuMolhos(false);
  };

  return (
    <aside className="sidebar">
      <ul>
        <li className="productsList" onClick={openProductList}>
          Produtos
          {menuProducts && (
            <ul className="productsMenu">
              <li />
              <li className="geleias" onClick={geleiasClick}>
                <Link to="geleias"> Geléias</Link>
              </li>
              {menuGeleias && (
                <>
                  <li>Geléia de Abacaxi com Pimenta</li>
                  <li>Geléia de Manga com Maracuja e Pimenta</li>
                  <li>Geléia de Morango com ou sem Pimenta</li>
                  <li>Geléia de Abacaxi ao Vinho</li>
                </>
              )}
              <li className="agridoces" onClick={agridocesClick}>
                <Link to="agridoces"> Agridoces</Link>
              </li>
              {menuAgridoces && (
                <>
                  <li>Gengibre Agridoce</li>
                  <li>Pepino Agridoce</li>
                </>
              )}
              <li className="molhos" onClick={molhosClick}>
                <Link to="molhos">Molhos</Link>
              </li>
              {menuMolhos && (
                <>
                  <li>Molho de Pimenta</li>
                  <li>Molho Vinagrete</li>
                </>
              )}
            </ul>
          )}
        </li>

        <li>
          <Link to="contatos" onClick={closeMenus}>
            Contatos
          </Link>
        </li>
        <li>
          <Link to="quemSomos" onClick={closeMenus}>
            Quem somos
          </Link>
        </li>
      </ul>
    </aside>
  );
}
