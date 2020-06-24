import React from "react";
import "typeface-roboto";
import { Link } from "react-scroll";
// import { Container } from './styles';
import "./styles.scss";

import logo from "../../assets/img/LOGO FERNANDES(com nome)_2.png";

function Header() {
  return (
    <div className="Container">
      <img src={logo} />

      <div className="links">
        <a href="index.html#home">HOME</a>
        <Link
          activeClass="active"
          to="servico"
          spy={true}
          smooth={true}
          duration={500}
        >
          SERVIÇOS
        </Link>
        <Link
          activeClass="active"
          to="empresa"
          spy={true}  
          smooth={true}
          duration={500}
        >
          EMPRESA
        </Link>
        <Link
          activeClass="active"
          to="clientes"
          spy={true}
          smooth={true}
          duration={500}
        >
          CLIENTES
        </Link>
        <Link
          activeClass="active"
          to="contato"
          spy={true}
          smooth={true}
          duration={500}
        >
          CONTATO
        </Link>
        <a href= "https://api.whatsapp.com/send?phone=5534991890224">(34) 99189-0224 <br></br>(34) 3238-5050 <br></br>(34) 99266-7032</a>
      </div>
    </div>
  );
}

export default Header;
