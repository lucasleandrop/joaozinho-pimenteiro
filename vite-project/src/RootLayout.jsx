import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import AsideBar from "./components/AsideBar";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <AsideBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
