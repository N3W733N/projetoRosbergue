import React from "react";

// import { Container } from './styles';
import "./styles.scss";

import logo from "../../assets/img/LOGO FERNANDES(com nome)_2.png";

function Header() {
  return (
    <div className="Container">
      <img src={logo} />

      <div className="links">
        <a href="">HOME</a>
        <a href="">SERVIÇOS</a>
        <a href="">EMPRESA</a>
        <a href="">CLIENTES</a>
        <a href="">CONTATO</a>
      </div>
    </div>
  );
}

export default Header;
