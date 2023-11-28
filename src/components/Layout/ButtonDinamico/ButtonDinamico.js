//import logo from './logo.svg';
import { genKey } from '../../funçoes/genRandomKey';
import './css/ButtonDinamico.css';
import './css/ButtonDinamico_Nav.css';
import "./css/Animation_ButtonDinamico_Nav_moverLeft_d98V0w.css"
import "./css/Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4.css"
//import { BrowserRouter as Router, Route, Link, Routes, redirect as Redirect } from "react-router-dom";

function ButtonDinamico( props ) {
    const 
    className = `ButtonDinamico ${props.className}`,
    id=`ButtonDinamico_${props.id}`;
    //element = props.icon || "" ;

  return (
    <div 
    id = { props.id ? id : "ButtonDinamico" + genKey(5) } 
    className={props.className ? className : "ButtonDinamico"} 
    style={props.style ? props.style : null }>
        {props.children}
    </div>
  );
}

export default ButtonDinamico;
