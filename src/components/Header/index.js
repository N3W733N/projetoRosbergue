import React from "react";
import "typeface-roboto";
import { Link } from "react-scroll";
// import { Container } from './styles';
import "./styles.scss";
import { FaBeer, FaWhatsapp } from "react-icons/fa";

import logo from "../../assets/img/LOGO FERNANDES(com nome)_2.png";
import wpp from "../../assets/icon/wppicon.png";

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
          ORÇAMENTOS
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
      </div>
      <FaWhatsapp color="white" size="20" />
      <div className="phoneNumber">
        <a href="https://api.whatsapp.com/send?phone=5534991890224">
          (34) 99189-0224
        </a>
        <a>(34) 99266-7032</a>
        <a>(34) 3238-5050</a>
      </div>
    </div>
  );
}

export default Header;
