import React from "react";
import './index.css';
import bannerImg from '../src/imgs/Fakta-Menarik-Jujutsu-Kaisen.webp';
import titulo from '../src/imgs/jujutsu_kaisen_hd_png_by_newjer53_dekiqwv-pre.png';
import imgCuriosidade from '../src/imgs/jujutsu-kaisen-complete-guide-1st-season-578539_716x1024.webp';
import imgCuriosidade2 from '../src/imgs/jujutsu-kaisen-pubblicato-nuovo-trailer-debutto-serie-v3-471902.jpg';
import bannerPersonagens from '../src/imgs/Jujutsu.Kaisen.full.3347585.png';

function App() {
  return (
    <div className="container">

      <div className="banner">
        <img src={bannerImg} />
        <ul className="menu">
          <li>CURIOSIDADES</li>
          <li>PERSONAGENS</li>
          <li>TEMPORADAS</li>
        </ul>

        <div className="tituloPagina">
          <img src={titulo} />
        </div>
      </div>

      <div className="curiosidades">
        <div className="curiosidadesImagens">
          <img src={imgCuriosidade} />
          <img src={imgCuriosidade2} />
        </div>

        <div className="curiosidadesText">
          <h1>CURIOSIDADES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod</p>
          <button>Saiba mais</button>
        </div>
      </div>

      <div className="personagens">
      <img src={bannerPersonagens}/>
      <h1>PERSONAGENS</h1>
      </div>

    </div>
  )
}

export default App