import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import AsideBar from "./components/AsideBar";

export default function RootLayout() {
  const [displayMenu, setDisplayMenu] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const location = useLocation();

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 480;

  useEffect(() => {
    if (isMobile) {
      setDisplayMenu(false);
    }
  }, [location.pathname]);

  const renderContent = () => {
    if (!isMobile) {
      return (
        <>
          <Header />
          <main>
            <AsideBar />
            <Outlet />
          </main>
        </>
      );
    }

    return (
      <main>
        {displayMenu ? (
          <>
            <Header />
            <AsideBar />
          </>
        ) : (
          <Outlet />
        )}
      </main>
    );
  };

  return (
    <div>
      {isMobile ? (
        <button
          type="button"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
          onClick={() => {
            setDisplayMenu((prevState) => !prevState);
          }}
        >
          MENU
        </button>
      ) : null}
      {renderContent()}
      <Footer />
    </div>
  );
}
