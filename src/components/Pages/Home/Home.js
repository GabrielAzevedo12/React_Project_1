import React from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Home.css';
import { esconder, exibir, Existe_Class, $, Adicionar_class, Remover_class } from "../../funçoes/funçoes";
import Banner from "../../Layout/Banner/Banner";

const Home = () => {
  var scrollOld = 0;
  const
  ScrollMain_onScroll = () => {
    const 
    Header = document.querySelector(".Header"), 
    Footer = document.querySelector(".Footer"),
    Header_Logo = $("#Header_Logo"),
    Div_Header_Nav = $("#Div_Header_Nav");

    if (Existe_Class( $(".Container_Layout_Default").childNodes[0], "Home_Container" )) {
      if (scrollOld >= window.scrollY) {
        //esconder(Header);
        exibir(Footer);
        Adicionar_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
        Remover_class(Header, "Animation_Header_moverTop_c3Bp26yyxUn");
        esconder(Header_Logo);
        esconder(Div_Header_Nav);
      } else {
        esconder(Footer);
        //exibir(Header);
        Remover_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
        Adicionar_class(Header, "Animation_Header_moverTop_c3Bp26yyxUn");
        exibir(Header_Logo);
        exibir(Div_Header_Nav);
      }
      scrollOld = window.scrollY;
    } else {
      exibir(Footer);
      exibir(Header);
    }
    
  };
  window.addEventListener('scroll', () => {
    ScrollMain_onScroll()
  })
  
    return ( 
          <div className="Home_Container center" onScroll={(e) => {
            //ScrollMain_onScroll(e.target)
}}>
            <Banner/>
        </div>
        );
}

/*
<h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
*/
export default Home