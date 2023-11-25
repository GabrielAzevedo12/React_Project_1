//import logo from './logo.svg';
import './css/Main.css';
import './css/titulo.css';
import './css/aumentarAltura.css';
import './css/diminuirAltura.css';
import './css/deslocametoHeader_negativo.css'
import './css/deslocametoHeader_positivo.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
  var scrollOld = 0;
  const
  ScrollMain_onScroll = (e) => {
    const 
    Header = document.querySelector(".Header"), 
    Footer = document.querySelector(".Footer");
    if (scrollOld >= e.scrollHeight - e.scrollTop) {
      Footer.classList.add("aumentarAltura")
      Footer.classList.remove("diminuirAltura")
      Header.classList.add("deslocametoHeader_negativo")
      Header.classList.remove("deslocametoHeader_positivo")
    } else {
      Header.classList.add("deslocametoHeader_positivo");
      Header.classList.remove("deslocametoHeader_negativo")
      Footer.classList.add("diminuirAltura")
      Footer.classList.remove("aumentarAltura")
    }
    scrollOld = e.scrollHeight - e.scrollTop;
  };

  return (
      <div className="Main template-column">
        <Header/>
        <div className="Main_Conatiner_Filho Main" onScroll={(e) => {
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
