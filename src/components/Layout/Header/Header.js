//import logo from './logo.svg';
import { useState } from 'react';
import ButtonDinamico from '../ButtonDinamico/ButtonDinamico';
import Nav from '../Nav/Nav';
import { BsChevronDoubleLeft } from "react-icons/bs";
import './css/Header.css';
import './css/Animation_Header_moverTop_1b5Ab00bxvN.css'
import './css/Animation_Header_moverTop_c3Bp26yyxUn.css'
import './css/Animation_Header_AlterarDimensoes.css'
import { $, Adicionar_class, Existe_Class, Remover_class, esconder, exibir } from '../../funçoes/funçoes';

function Header() {
  const [boolean, setBoolean] = useState(false);

  const ButtonDinamico_onClick = (e) => {
    //$("#Header_Nav").style.display === "none"
    if ( boolean === false ) {
      //exibir($("#Header_Nav")) ;
      setBoolean(true) ;
      Adicionar_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_d98V0w");
      Remover_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4");
      console.log($("#ButtonDinamico_Nav_left"))

    } else {
      //esconder($("#Header_Nav"))
      setBoolean(false) ;
      Remover_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_d98V0w");
      Adicionar_class($("#ButtonDinamico_Nav_left"), "Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4");
      console.log($("#ButtonDinamico_Nav_left"))
    }

  },
  Header_onMouseOver = (e) => {
    if ( Existe_Class( $("#Header") , "Animation_Header_moverTop_c3Bp26yyxUn" ) ) {

      Remover_class($("#Header"), "Animation_Header_moverTop_c3Bp26yyxUn" );
      Adicionar_class($("#Header"), "Animation_Header_AlterarDimensoes");

    }  },
  Header_OnMouseOut = (e) => {
   
  };

  return (
    <div id="Header" className="Header flex-row Animation_Header_AlterarDimensoes Animation_Header_moverTop_c3Bp26yyxUn" onMouseOver={Header_onMouseOver}>
      <div id="Header_Logo" className="center Logo">
        This is Logo
      </div>
      <div id="Div_Header_Nav" className='flex-row Div_Nav'>
        <ButtonDinamico id="Nav" className="center">       
          <BsChevronDoubleLeft id="ButtonDinamico_Nav_left" className='ButtonDinamico_Nav Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4' onClick = {ButtonDinamico_onClick} /> 
        </ButtonDinamico>
        {boolean && (
        <Nav name="Teste" id="Header"/>
        )}
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
