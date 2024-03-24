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
import satoruGojo from '../src/imgs/satoru-gojo_cke.webp';
import suguruGeto from '../src/imgs/geto.jpg';
import primeiraTemp from '../src/imgs/temp1jjk.jpeg';
import segundaTemp from '../src/imgs/jjk2temp.webp';

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">

      <div className="banner">
        <img src={bannerImg} />
        <ul className="menu">
          <li onClick={() => scrollToSection('curiosidades')}>CURIOSIDADES</li>
          <li onClick={() => scrollToSection('personagens')}>PERSONAGENS</li>
          <li onClick={() => scrollToSection('temporadas')}>TEMPORADAS</li>
        </ul>

        <div className="tituloPagina">
          <img src={titulo} />
        </div>
      </div>

      <div id="curiosidades" className="curiosidades">
        <div className="curiosidadesImagens">
          <img src={imgCuriosidade} />
          <img src={imgCuriosidade2} />
        </div>

        <div className="curiosidadesText">
          <h1>CURIOSIDADES</h1>
          <p>Explore os mistérios e segredos por trás do universo de Jujutsu Kaisen! Neste vídeo você irá 
            mergulhar nas curiosidades que cercam esse mundo repleto de habilidades especiais, batalhas intensas 
            e personagens cativantes. Desde a origem do Jujutsu até as teorias mais intrigantes, esta é sua chance 
            de aprofundar seu conhecimento e se envolver ainda mais com essa incrível história. Clique abaixo 
            e embarque nessa jornada de descoberta!</p>
            <a href="https://www.youtube.com/watch?v=oTMVRrLbPgo" target="_blank" className="saibaMaisButton">Saiba mais</a>
        </div>
      </div>

      <div id="personagens" className="personagens">
        <img src={bannerPersonagens} />
        <h1>PERSONAGENS</h1>
      </div>
      <section class="secao" id="sobre">
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
              <p>Megumi é um estudante da Escola Técnica de Feiticeiros em Jujutsu Kaisen. Ele é habilidoso em
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
            <img decoding="async" src={sukuna} alt="sukuna" className={`sukuna-banner ${showAnimation ? 'slide-in' : ''}`} />
            <h1 className={`titulo-sukuna ${showAnimation ? 'slide-in' : ''}`}>Sukuna</h1>
            <p className={`descricao-sukuna ${showAnimation ? 'fade-in' : ''}`}>
              Sukuna, também conhecido como "Ryomen Sukuna", é um personagem central no anime Jujutsu Kaisen. Ele é uma figura lendária, temida por ser um feiticeiro amaldiçoado extremamente poderoso. Sukuna é conhecido por sua natureza cruel e sádica, sendo considerado um dos maiores vilões do mundo sobrenatural apresentado na série. Ele é capaz de controlar maldições e possui habilidades impressionantes em combate. Sua presença na história traz um elemento de perigo constante e desafio para os protagonistas, enquanto eles buscam derrotar as forças do mal que ele representa.
            </p>
          </div>

          <div class="secao-div-card-2">
            <img decoding="async" src={satoruGojo} alt="Satoru Gojo" />
            <h3>Satoru Gojo</h3>
            <p>
              Satoru Gojo é um dos personagens principais do anime Jujutsu Kaisen. Ele é um feiticeiro poderoso e carismático, conhecido por sua personalidade extrovertida e despreocupada. Gojo é o professor e mentor de Yuji Itadori, o protagonista da série, e é conhecido por suas habilidades excepcionais no uso de jujutsu, uma forma de magia utilizada para combater maldições e seres sobrenaturais. Ele é extremamente habilidoso em combate, sendo capaz de manipular a energia mágica de forma poderosa e criativa. Além disso, Gojo é conhecido por sua máscara de olhos vendados, que ele usa para limitar seu poder avassalador. Sua presença é central para a trama, sendo um dos personagens mais influentes e poderosos do universo de "Jujutsu Kaisen".
            </p>
          </div>

          <div class="secao-div-card-2">
            <img decoding="async" src={suguruGeto} alt="Suguru Geto" />
            <h3>Suguru Geto</h3>
            <p>
              Geto é um ex-aluno da Escola Técnica de Jujutsu e antigo colega de Satoru Gojo em Jujutsu Kaisen. Ele se torna um antagonista líder de um grupo de maldições chamado "Os Olhos Maléficos da Noite". Geto é habilidoso, manipulador e acredita na coexistência pacífica entre humanidade e maldições, mas suas ações controversas e conflitos internos o tornam uma figura complexa na trama.
              Ele é apresentado como um indivíduo calculista e frio, cujas ações são enigmáticas até que suas verdadeiras intenções sejam reveladas. Geto tem uma profunda conexão com Satoru Gojo, seu antigo colega, e suas interações revelam uma dinâmica complexa entre os dois.
            </p>
          </div>

          <div id="temporadas" className="temporadas-titulo">
            <h1>TEMPORADAS</h1>
          </div>

          <div className="temporadas">

            <div className="temporada-1">
              <img decoding="async" src={primeiraTemp} />
              <p>
              <span style={{color: '#4173BE', fontFamily: 'Langar, sans-serif', fontSize: '30px'}}>PRIMEIRA TEMPORADA</span>

                <br/><br/>
                Jujutsu Kaisen acompanha a jornada de Yuji Itadori, um estudante do ensino médio com habilidades atléticas excepcionais. Sua vida toma um rumo sombrio quando ele se depara com um objeto amaldiçoado, o Dedo de Sukuna, contendo uma poderosa maldição. Ao tentar proteger seus amigos, Yuji acaba ingerindo o dedo, tornando-se hospedeiro de Sukuna, uma entidade amaldiçoada.
                Yuji é recrutado pela Escola Técnica de Jujutsu, uma instituição de elite que treina feiticeiros para combater maldições. Lá, ele encontra outros estudantes, incluindo Megumi Fushiguro e Nobara Kugisaki, e seu mentor, Satoru Gojo. Juntos, eles enfrentam diversas ameaças, desde maldições menores até inimigos poderosos ligados à Sukuna.
                Durante a temporada, Yuji enfrenta desafios emocionais e físicos enquanto lida com sua nova identidade como hospedeiro de Sukuna. A trama explora temas como amizade, sacrifício e a luta entre o bem e o mal. A primeira temporada culmina em confrontos intensos e revelações surpreendentes, preparando o terreno para os eventos futuros da série.
              </p>
            </div>

            <div className="temporada-2">
              <img decoding="async" src={segundaTemp} />
              
              <p>
              <span style={{color: '#4173BE', fontFamily: 'Langar, sans-serif', fontSize: '30px'}}>SEGUNDA TEMPORADA</span>

                <br/><br/>
                Em 31 de outubro, uma cortina de repente cai ao redor da Estação Shibuya, uma área repleta de pessoas celebrando o Halloween, e um grande número de civis ficam presos. Gojo se aventura em Shibuya sozinho, mas é uma armadilha preparada por Geto, Mahito, e outros espíritos amaldiçoados… Yuji Itadori, Megumi Fushiguro e Nobara Kugisaki se reúnem no local, onde uma batalha sem precedentes está prestes a começar
                A revelação na segunda temporada amplia o escopo dessa maldição, revelando que Tsumiki não é a única vítima no país. Pseudo-Geto revela ter marcado dois tipos de não-feiticeiros. Pessoas como Yuji são alimentadas com objetos amaldiçoados, enquanto outras, como Junpei, possuem técnicas amaldiçoadas em seus cérebros.
              </p>
            </div>

            

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