import { createBrowserRouter } from "react-router-dom";
import MolhosPage from "./pages/MolhosPage";
import RootLayout from "./RootLayout";
import Home from "./components/Home";
import GeleiasPage from "./pages/GeleiasPage";
import AgridocesPage from "./pages/AgridocesPage";
import Contatos from "./components/Contatos";
import QuemSomos from "./pages/QuemSomos";
import GeleiaDeAbacaxi from "./pages/layouts-produtos-individuais/GeleiaDeAbacaxi";
import GeleiaDeMorango from "./pages/layouts-produtos-individuais/GeleiaDeMorango";
import GeleiaDeManga from "./pages/layouts-produtos-individuais/GeleiaDeManga";
import GeleiaDeVinho from "./pages/layouts-produtos-individuais/GeleiaDeVinho";
import PepinoAgridoce from "./pages/layouts-produtos-individuais/PepinoAgridoce";
import GengibreAgridoce from "./pages/layouts-produtos-individuais/GengibreAgridoce";
import MolhoVinagrete from "./pages/layouts-produtos-individuais/MolhoVinagrete";
import MolhoDePimenta from "./pages/layouts-produtos-individuais/MolhoDePimenta";
import GeleiaDePimenta from "./pages/layouts-produtos-individuais/GeleiaDePimenta";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "molhos",
        element: <MolhosPage />,
      },
      { path: "agridoces", element: <AgridocesPage /> },
      {
        path: "geleias",
        element: <GeleiasPage />,
        children: [],
      },

      { path: "contatos", element: <Contatos /> },
      { path: "quemSomos", element: <QuemSomos /> },
      { path: "geleias/geleia-de-abacaxi", element: <GeleiaDeAbacaxi /> },
      { path: "geleias/geleia-de-morango", element: <GeleiaDeMorango /> },
      { path: "geleias/geleia-de-manga", element: <GeleiaDeManga /> },
      { path: "geleias/geleia-ao-vinho", element: <GeleiaDeVinho /> },
      { path: "geleias/geleia-de-pimenta", element: <GeleiaDePimenta /> },
      { path: "agridoces/pepino-agridoce", element: <PepinoAgridoce /> },
      { path: "agridoces/gengibre-agridoce", element: <GengibreAgridoce /> },
      { path: "molhos/molho-vinagrete", element: <MolhoVinagrete /> },
      { path: "molhos/molho-de-pimenta", element: <MolhoDePimenta /> },
    ],
  },
  ,
]);

export default router;
