import React from "react";
import { Parallax } from "react-parallax";

import "./App.scss";

import logo from "./logo.svg";
import logoIcon from "./assets/img/logoicon.png";
// import back01 from "./assets/img/galeria3.png";
import parceiro from "./assets/img/EmpresasParceiras.png";
import back01 from "./assets/img/uberlandiaBackground02.jpg";
import back02 from "./assets/img/Guindastes/1.jpg";
import back03 from "./assets/img/Guindautos/1.jpeg";

import Slider from "./components/Slider";
import Header from "./components/Header";

import guindastes from "./data/guindastes";
import guindautos from "./data/guindautos";
import remocoes from "./data/remocoes";

function App() {
  return (
    <div className="App" id="/">
      <Header />
      <Parallax bgImage={back02} strength={500}>
        <div className="opcity">
          <div className="title">
            <h2>Guindastes</h2>
            <p>
              Nossa frota são de guindastes novos e semi- novos de última
              geração, com operadores capacitados trazendo mais segurança aos
              nossos clientes.
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

      <div className="blockText" id="servico">
        <p>SOLUÇÕES EM LOCAÇÕES</p>
        <p>Atendimento 24h x 7 Dias por Semana</p>
        <p>ENTRE EM CONTATO JÁ</p>
      </div>

      <Parallax bgImage={back03} strength={500}>
        <div className="empresa" id="empresa">
        <h2>EMPRESA</h2>

        <p>
          Fundada em 2012 a Fernandes Guindastes e Remoções juntamente a seus
          profissionais possuem mais de 40 anos de experiencia em içamentos e
          remoções. No princípio nossa atividade era somente remoção industrial,
          devido à demanda de mercado de locações, adquirimos guindastes
          articulados e telescópicos para atender nossos clientes.
        </p>
        </div>
      </Parallax>

      <div className="atuacao">
        <img src={logoIcon} />
        <div className="boxDescription">
          <h2>ATUAÇÃO</h2>

          <p>
            Atuamos em diversos segmentos como industriais, construções em geral
            e alimentícios. Prestando serviços com equipamentos adequados
            valorizando a segurança e a qualidade.
          </p>
        </div>
      </div>

      <Parallax bgImage={back01} strength={500}>
        <div className="clientes" id="clientes">
          <h2>ALGUNS CLIENTES</h2>

          <img src={parceiro} width="50%"/>
        </div>
      </Parallax>

      <div className="blockText">
        <h2>Contato</h2>

        <p>
          Atuamos em diversos segmentos como industriais, construções em geral e
          alimentícios. Prestando serviços com equipamentos adequados
          valorizando a segurança e a qualidade.
        </p>
      </div>
    </div>
  );
}

export default App;
