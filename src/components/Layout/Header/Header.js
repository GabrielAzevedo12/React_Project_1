//import logo from './logo.svg';
import { useState } from 'react';
import ButtonDinamico from '../ButtonDinamico/ButtonDinamico';
import Nav from '../Nav/Nav';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import './css/Header.css';
import './css/Animation_Header_moverTop_1b5Ab00bxvN.css'
import './css/Animation_Header_moverTop_c3Bp26yyxUn.css'
import { $, Adicionar_class, Remover_class, esconder, exibir } from '../../funçoes/funçoes';

function Header() {
  const [boolean, setBoolean] = useState(false);

  const ButtonDinamico_onClick = (e) => {

    if ( $("#Header_Nav").style.display === "none" ) {
      exibir($("#Header_Nav")) ;
      setBoolean(true) ;
      Adicionar_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_d98V0w");
      Remover_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4");

    } else {
      esconder($("#Header_Nav"))
      setBoolean(false) ;
      Remover_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_d98V0w");
      Adicionar_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4");
    }

  }

  return (
    <div className="Header flex-row style_template_2 Animation_Header_moverTop_c3Bp26yyxUn">
      <div id="Header_Logo" className="center Logo">
        This is Logo
      </div>
      <div id="Div_Header_Nav" className='flex-row Div_Nav'>
        <ButtonDinamico id="Nav" className="center">       
          <BsChevronDoubleLeft id="ButtonDinamico_Nav_left" className='ButtonDinamico_Nav Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4' onClick = {ButtonDinamico_onClick} /> 
        </ButtonDinamico>
        <Nav name="Teste" id="Header" style={{display: "none"}}/>
      </div>
    </div>
  );
}
/*
 {boolean ? 
          <BsChevronDoubleRight id="ButtonDinamico_Nav_right" className='ButtonDinamico_Nav' onClick = {ButtonDinamico_onClick} /> :
          <BsChevronDoubleLeft id="ButtonDinamico_Nav_left" className='ButtonDinamico_Nav' onClick = {ButtonDinamico_onClick} />} 
*/
export default Header;
