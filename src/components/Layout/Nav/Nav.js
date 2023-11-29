//import logo from './logo.svg';
import './css/Nav.css';
import { BrowserRouter as Router, Route, Link, Routes, redirect as Redirect } from "react-router-dom";
import { genKey } from '../../funçoes/genRandomKey';

function Nav(props) {
  const url = "/about/" + props.name;
  return (
    <nav 
    id = {props.id ? props.id + "_Nav" : "Nav" + genKey(5) } 
    className={props.className ? props.className + " Nav" : "Nav"} 
    style={props.style ? props.style : null } >
        <div className='flex-row Nav_div'>
          <div className='Nav_lista_item center'><Link className="Nav_lista_item_a" to="/">Home</Link></div>
          <div className='Nav_lista_item center'><Link className="Nav_lista_item_a" to="/about">About</Link></div>
          <div className='Nav_lista_item center'><Link className="Nav_lista_item_a" to="/contact">Contact</Link></div>
        </div>
    </nav>
  );
}

export default Nav;
