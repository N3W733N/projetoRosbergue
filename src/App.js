import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Slider from "./components/Slider";
import Header from "./components/Header";

import guindastes from "./data/guindastes";
import guindautos from "./data/guindautos";
import remocoes from "./data/remocoes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="title">
        <h1>Guindastes</h1>
      </div>
      <Slider>
        {guindastes.map((item) => (
          <Slider.Item item={item} key={item.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
      <div className="title">
        <h1>Guindastes</h1>
      </div>
      <Slider>
        {guindautos.map((item) => (
          <Slider.Item item={item} key={item.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
      <div className="title">
        <h1>Guindastes</h1>
      </div>
      <Slider>
        {remocoes.map((item) => (
          <Slider.Item item={item} key={item.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default App;
