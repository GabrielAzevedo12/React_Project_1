import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Home_Container.css';
import { esconder, exibir } from "../../funçoes/funçoes";
const Home = () => {
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
      esconder(Header);
      exibir(Footer);
    } else {
      /*      
      Header.classList.add("deslocametoHeader_positivo");
      Header.classList.remove("deslocametoHeader_negativo")
      Footer.classList.add("diminuirAltura")
      Footer.classList.remove("aumentarAltura")
      */
      esconder(Footer);
      exibir(Header);
      //console.log(1)
    }
    scrollOld = e.scrollHeight - e.scrollTop;
  };
  
    return ( 
          <div className="Home_Container" onScroll={(e) => {
          ScrollMain_onScroll(e.target)
        }}>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
        </div>
        );
}

export default Home