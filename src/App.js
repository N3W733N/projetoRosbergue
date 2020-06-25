import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import "./App.scss";

import logoIcon from "./assets/img/logoicon.png";
import logo from "./assets/img/LOGO FERNANDES(com nome)_2.png";
// import back01 from "./assets/img/galeria3.png";
import parceiro from "./assets/img/EmpresasParceiras.png";
import back01 from "./assets/img/uberlandiaBackground02.jpg";
import back02 from "./assets/img/Guindastes/1.jpg";
import back03 from "./assets/img/Guindautos/1.jpeg";
import map from "./assets/img/map.png";
import wpp from "./assets/icon/LOGO_ZAP-1.png";

import Slider from "./components/Slider";
import Header from "./components/Header";

import guindastes from "./data/guindastes";
import guindautos from "./data/guindautos";
import remocoes from "./data/remocoes";

function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign(
        "https://api.whatsapp.com/send?phone=5534991890224"
      );
      setClicked(false);
    }
  }, [clicked]);

  return (
    <div className="App" id="/">
      <Header />

      <Parallax bgImage={back02} strength={500}>
        <div className="opcity">
          <div className="title">
            <h2>Guindastes</h2>
            <p>
            Nossa frota é composta de guindastes novos e seminovos de última geração,
             com operadores capacitados, 
             trazendo mais segurança para os nossos clientes.
            </p>
          </div>
          <div>
            <Slider>
              {guindastes.map((item) => (
                <Slider.Item item={item} key={item.id}>
                  item1
                </Slider.Item>
              ))}
            </Slider>
          </div>
          <div className="title">
            <h2>Guindaste Articulado (munck)</h2>
            <p>
              Temos guindastes articulados, semi novos com maior capacidade de
              carga e lança do mercado.
              <br /> Caminhões de carroceria, que agregam agilidade e benefício
              ao nossos clientes.
            </p>
          </div>
          <Slider>
            {guindautos.map((item) => (
              <Slider.Item item={item} key={item.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
          <div className="title">
            <h2>Remoções</h2>
            <p>
              Com equipamentos apropriados e equipe técnica especializada,
              realizamos remoções internas horizontais e verticais de qualquer
              tipo de equipamentos.
            </p>
          </div>
          <Slider>
            {remocoes.map((item) => (
              <Slider.Item item={item} key={item.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      </Parallax>
      {/* <div className="img" id="home">
        
      </div> */}

      <Element name="test1" className="blockText" id="servico">
        <p class="title">SOLUÇÕES EM LOCAÇÕES</p>
        <p>Atendimento 24h x 7 Dias por Semana</p>
        <div className="Contact" onClick={() => setClicked(true)}>
          <p>ENTRE EM CONTATO JÁ</p>
        </div>
      </Element>
      {/* <div className="blockText" id="servico">
        
      </div> */}

      <Parallax bgImage={back03} strength={500}>
        <Element className="empresa" id="empresa">
          <h2>QUEM SOMOS</h2>

          <p>
          Fundada em 2012, a Fernandes Guindastes e Remoções juntamente
          com seus colaboradores possui mais de 40 anos de experiência
          em içamento e remoções. No princípio, nossa atividade era somente
          remoção industrial, porém devido à demanda de mercado de locações,
          adquirimos guindastes articulados e telescópicos para melhor atender nossos clientes.
          </p>
        </Element>
      </Parallax>

      <div className="atuacao">
        <img src={logoIcon} />
        <div className="boxDescription">
          <h2>ATUAÇÃO</h2>

          <p>
          Atuamos em diversos segmentos como, industriais, alimentícios e construções em geral. Trabalhamos com equipamentos adequados valorizando a segurança e a qualidade dos serviços prestados.
          </p>
        </div>
      </div>

      <Parallax bgImage={back01} strength={500}>
        <Element className="clientes" id="clientes">
          <h2>ALGUNS CLIENTES</h2>

          <img src={parceiro} width="50%" />
        </Element>
      </Parallax>

      <Element className="contato"  id="contato">
        <h2>Contatos</h2>
        <p>
          <strong>Email: </strong>comercial@fernandesguindastes.com.br
        </p>
        <p>
          <strong>Telefones: </strong> <br></br>(34) 99189-0224 <br></br>(34) 99266-7032<br></br>(34) 3238-5050
        </p>
        <p>
          <strong>Endereço: </strong> Rua Paulo de Tarso 606 B. Maravilha
          Uberlândia - MG Cep 38401-444
        </p>

        <img src={map} />
      </Element>
    </div>
  );
}

export default App;
