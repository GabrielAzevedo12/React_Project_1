//import logo from './logo.svg';
import './css/Main.css';
import './css/Main_Conatiner_Filho.css';
import './css/titulo.css';
import './css/aumentarAltura.css';
import './css/diminuirAltura.css';
import './css/deslocametoHeader_negativo.css'
import './css/deslocametoHeader_positivo.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Adicionar_class, Remover_class, Existe_Class, S1, S2, $, new_text, def_dimensoes } from '../funçoes/funçoes'

function Main() {
  var scrollOld = 0;
  const
  ScrollMain_onScroll = (e) => {
    const 
    Header = document.querySelector(".Header"), 
    Footer = document.querySelector(".Footer");
    if (scrollOld >= e.scrollHeight - e.scrollTop) {
      //console.log(1)
      /*
      Footer.classList.add("aumentarAltura")
      Footer.classList.remove("diminuirAltura")
      Header.classList.add("deslocametoHeader_negativo")
      Header.classList.remove("deslocametoHeader_positivo")
      */
      Footer.style.display = "";
      Header.style.display = "none";
    } else {
      /*      
      Header.classList.add("deslocametoHeader_positivo");
      Header.classList.remove("deslocametoHeader_negativo")
      Footer.classList.add("diminuirAltura")
      Footer.classList.remove("aumentarAltura")
      */
      Footer.style.display = "none";
      Header.style.display = "";
      //console.log(1)
    }
    scrollOld = e.scrollHeight - e.scrollTop;
  };

  return (
      <div className="Main template-column">
        <Header/>
        <div className="Main_Conatiner_Filho" onScroll={(e) => {
          ScrollMain_onScroll(e.target)
        }}>
          <h1 className="titulo">Teste</h1>
          <h1 className="titulo">Teste</h1>
          <h1 className="titulo">Teste</h1>
          <h1 className="titulo">Teste</h1>
        </div>
        <Footer />
      </div>
  );
}

export default Main;
