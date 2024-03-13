import InstagramPage from "./InstagramPage";
import FacebookPage from "./FacebookPage";
import WhatasappDirect from "./WhatsappDirect";
import style from "./Contatos.module.css";

export default function Contatos() {
  return (
    <div className={style.contactContainer}>
      <h3>Entre em contato conosco </h3>
      <br />
      <p>Abaixo listamos as formas de contato disponíveis em nossa loja.</p>
      <p>Estamos ansiosos em lhe atender da melhor maneira possível.</p>
      <br />
      <br />

      <h3>Central de Atendimento ao Cliente</h3>
      <p>(41) 99999-7680</p>
      <br />
      <br />
      <h3>Atendimento Online</h3>

      <WhatasappDirect />
      <br />
      <InstagramPage />
      <br />

      <FacebookPage />

      <br />
      <br />
      <h3>Horário de Atendimento</h3>
      <p>Atendimento de segunda a sexta - 8:30h às 18h</p>
      <br />
      <br />
      <h3>E-mail</h3>
      <p>
        Entre em contato conosco através do e-mail
        <h3>joaozinhopimenteiro@outlook.com</h3>
      </p>
      <br />
      <br />
      {/* <h3>Nosso Endereço</h3>
      <p>Joãozinho Pimenteiro</p>
      <p>Rua xxxxxx</p>
      <p>Guaratuba-PR</p>
      <p>cep xxxxx-xxx</p>
      <br />
      <br /> */}
      <h3>Dados da Empresa</h3>
      <p>Joãozinho Pimenteiro Produtos Artesanais Gourmet</p>
      <p>CNPJ 37.310.284/0001-22</p>
    </div>
  );
}
