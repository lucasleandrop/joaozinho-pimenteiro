import logoGuara from "../assets/logo-guara.png";
import logoJoao from "../assets/logo-joaozinho.png";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img
          src={logoJoao}
          alt="logo-joaozinho"
          style={{
            width: "200px",
            height: "auto",
          }}
        />
      </div>
      <div className="titles">
        <h1>Joãozinho Pimenteiro</h1>
        <h2>Molhos Artesanais Gourmet</h2>
      </div>
      <div>
        <img
          src={logoGuara}
          alt="logo-guara"
          style={{
            width: "200px",
            height: "auto",
            marginRight: "10px",
          }}
        />
      </div>
    </header>
  );
}
