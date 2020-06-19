import React from "react";

// import { Container } from './styles';
import "./styles.scss";

import logo from "../../assets/img/LOGO FERNANDES(com nome)_2.png";

function Header() {
  return (
    <div className="Container">
      <img src={logo} />

      <div className="links">
        <a href="index.html#home">HOME</a>
        <a href="index.html#servico">SERVIÇOS</a>
        <a href="index.html#empresa">EMPRESA</a>
        <a href="index.html#clientes">CLIENTES</a>
        <a href="index.html#contato">CONTATO</a>
      </div>

      <div className="links">
        <a href="">34 99189-0224</a>
      </div>
    </div>
  );
}

export default Header;
