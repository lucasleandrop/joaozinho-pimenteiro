import { createBrowserRouter } from "react-router-dom";
import MolhosPage from "./pages/MolhosPage";
import RootLayout from "./RootLayout";
import Home from "./components/Home";
import GeleiasPage from "./pages/GeleiasPage";
import AgridocesPage from "./pages/AgridocesPage";
import Contatos from "./components/Contatos";
import QuemSomos from "./pages/QuemSomos";
import GeleiaDeAbacaxi from "./pages/GeleiaDeAbacaxi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "molhos",
        element: <MolhosPage />,
      },
      {
        path: "geleias",
        element: <GeleiasPage />,
        children: [],
      },
      { path: "agridoces", element: <AgridocesPage /> },
      { path: "contatos", element: <Contatos /> },
      { path: "quemSomos", element: <QuemSomos /> },
      { path: "geleia-de-abacaxi", element: <GeleiaDeAbacaxi /> },
    ],
  },
  ,
]);

export default router;
