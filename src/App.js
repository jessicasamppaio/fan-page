import React, { useState, useEffect } from "react";
import './index.css';
import bannerImg from '../src/imgs/Fakta-Menarik-Jujutsu-Kaisen.webp';
import titulo from '../src/imgs/jujutsu_kaisen_hd_png_by_newjer53_dekiqwv-pre.png';
import imgCuriosidade from '../src/imgs/jujutsu-kaisen-complete-guide-1st-season-578539_716x1024.webp';
import imgCuriosidade2 from '../src/imgs/jujutsu-kaisen-pubblicato-nuovo-trailer-debutto-serie-v3-471902.jpg';
import bannerPersonagens from '../src/imgs/Jujutsu.Kaisen.full.3347585.png';
import yujiItadori from '../src/imgs/yuuji-itadori_cke.webp';
import megumiFushiguro from '../src/imgs/megumi-fushiguro_cke.webp';
import nobaraKugisaki from '../src/imgs/nobara-kugisaki_cke.webp';
import sukuna from '../src/imgs/sukuna.jpg';

function App() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
  
      const scrollTop = window.scrollY;
      const sukunaSection = document.querySelector('.sukuna-section');
      
      
      if (sukunaSection) {
        const sukunaSectionTop = sukunaSection.offsetTop;
        const sukunaSectionHeight = sukunaSection.offsetHeight;

        
        if (scrollTop >= sukunaSectionTop - window.innerHeight + sukunaSectionHeight / 2) {
          setShowAnimation(true);
        } else {
          setShowAnimation(false);
        }
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <button className="saibaMaisButton">Saiba mais</button>
        </div>
      </div>

      <div className="personagens">
        <img src={bannerPersonagens} />
        <h1>PERSONAGENS</h1>
      </div>
      <section class="secao4" id="sobre">
        <div class="secao-div">

          <div class="secao-div-card">
            <a href="https://www.youtube.com/watch?v=Jq_93o_aijo&ab_channel=nammoon" target="_blank" rel="noopener noreferrer" className="secao-div-card1">
              <img decoding="async" src={yujiItadori} alt="Yuji Itadori" />
              <h3>Yuji Itadori</h3>
              <p>Yūji é o protagonista da série, um estudante do ensino médio com habilidades
                físicas excepcionais e uma natureza gentil. Ele é arrastado para o mundo dos feiticeiros amaldiçoados e
                se torna um estudante na Escola Técnica de Feiticeiros. Yūji luta para proteger seus amigos e entes queridos
                enquanto enfrenta dilemas morais e desafios cada vez maiores. Sua jornada é uma busca para encontrar um equilíbrio entre sua
                gentileza e a escuridão do mundo sobrenatural.
              </p>
            </a>
          </div>


          <div class="secao-div-card">
            <a href="https://www.youtube.com/watch?v=3Br-Nqlc70M&ab_channel=%E2%9C%A8%F0%9D%99%A8%F0%9D%99%AA%F0%9D%99%97%F0%9D%99%96%F0%9D%99%A7%F0%9D%99%96%F0%9D%99%A8%F0%9D%99%9D%F0%9D%99%9E" target="_blank" rel="noopener noreferrer" className="secao-div-card1">
              <img decoding="async" src={megumiFushiguro} alt="Megumi Fushiguro" />
              <h3>Megumi Fushiguro</h3>
              <p>Megumi é um estudante da Escola Técnica de Feiticeiros em "Jujutsu Kaisen". Ele é habilidoso em
                combate contra maldições, usando a técnica de invocação de shikigami. Calmo e determinado, ele valoriza
                proteger os outros e busca explorar seu próprio potencial como feiticeiro. Ao longo da história, ele desenvolve
                laços com outros personagens enquanto enfrenta desafios morais e perigos cada vez maiores.
              </p>
            </a>
          </div>


          <div class="secao-div-card">
            <a href="https://www.youtube.com/watch?v=ZonMdgpfOkg&ab_channel=RandomANIMEPlus%21" target="_blank" rel="noopener noreferrer" className="secao-div-card1">
              <img decoding="async" src={nobaraKugisaki} alt="Nobara Kugisaki" />
              <h3>Nobara Kugisaki</h3>
              <p>
                Nobara é uma estudante da Escola Técnica de Feiticeiros
                com uma personalidade forte e determinada. Nobara é habilidosa em combate com uma arma especializada chamada de Martelo de Naginata, que usa em conjunto com técnicas de feitiçaria. Ela é conhecida por sua franqueza e desejo de proteger aqueles ao seu redor. Ao longo da história, Nobara desenvolve
                laços próximos com outros personagens e enfrenta desafios que testam sua coragem e determinação.
              </p>
            </a>
          </div>
          <hr />

          <div className={`sukuna-section ${showAnimation ? 'fade-in' : ''}`}>
            <img decoding="async" src={sukuna} alt="sukuna" className={`sukuna-banner ${showAnimation ? 'slide-in' : ''}`}/>
            <h1 className={`titulo-sukuna ${showAnimation ? 'slide-in' : ''}`}>Sukuna</h1>
            <p className={`descricao-sukuna ${showAnimation ? 'fade-in' : ''}`}>
            Sukuna, também conhecido como "Ryomen Sukuna", é um personagem central no anime "Jujutsu Kaisen". Ele é uma figura lendária, temida por ser um feiticeiro amaldiçoado extremamente poderoso. Sukuna é conhecido por sua natureza cruel e sádica, sendo considerado um dos maiores vilões do mundo sobrenatural apresentado na série. Ele é capaz de controlar maldições e possui habilidades impressionantes em combate. Sua presença na história traz um elemento de perigo constante e desafio para os protagonistas, enquanto eles buscam derrotar as forças do mal que ele representa.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>Jéssica Sampaio</p>
      </footer>
    </div>
  )
  }

export default App