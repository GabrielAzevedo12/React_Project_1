//import logo from './logo.svg';
import { useState } from 'react';
import ButtonDinamico from '../ButtonDinamico/ButtonDinamico';
import Nav from '../Nav/Nav';
import './css/Header.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { $, Adicionar_class, Remover_class, esconder, exibir } from '../../funçoes/funçoes';

function Header() {
  const [boolean, setBoolean] = useState(false);

  const ButtonDinamico_onClick = (e) => {

    if ( $("#Nav1").style.display === "none" ) {
      exibir($("#Nav1")) ;
      setBoolean(true) ;
      Adicionar_class(e.target.parentElement, "Animation_ButtonDinamico_Nav_moverLeft_d98V0w");
      Remover_class(e.target.parentElement, "Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4");

    } else {
      esconder($("#Nav1"))
      setBoolean(false) ;
      Remover_class(e.target.parentElement, "Animation_ButtonDinamico_Nav_moverLeft_d98V0w");
      Adicionar_class(e.target.parentElement, "Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4");
    }

  }

  return (
    <div className="Header flex-row style_template_2">
      <div className="center Logo_Header">
        This is Logo
      </div>
      <div className='flex-row'>
        <ButtonDinamico id="Nav" className="center">
          {boolean ? 
          <BsChevronDoubleRight id="ButtonDinamico_Nav_right" className='ButtonDinamico_Nav' onClick = {ButtonDinamico_onClick} /> :
          <BsChevronDoubleLeft id="ButtonDinamico_Nav_left" className='ButtonDinamico_Nav' onClick = {ButtonDinamico_onClick} />} 
        </ButtonDinamico>
        <Nav name="Teste" id="Nav1" style={{display: "none"}}/>
      </div>
    </div>
  );
}

export default Header;
