import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Home.css';
import { esconder, exibir, Existe_Class, $ } from "../../funçoes/funçoes";
import Banner from "../../Layout/Banner/Banner";

const Home = () => {
  var scrollOld = 0;
  const
  ScrollMain_onScroll = () => {
    const 
    Header = document.querySelector(".Header"), 
    Footer = document.querySelector(".Footer");

    if (Existe_Class( $(".Container_Layout_Default").childNodes[0], "Home_Container" )) {
      if (scrollOld >= window.scrollY) {
        esconder(Header);
        exibir(Footer);
      } else {
        esconder(Footer);
        exibir(Header);
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