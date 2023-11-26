//import logo from './logo.svg';
import './css/Nav.css';
import { BrowserRouter as Router, Route, Link, Routes, redirect as Redirect } from "react-router-dom";

function Nav({ name }) {
  const url = "/about/" + name;
  return (
    <nav className='Nav'>
        <div className='flex-row Nav_div'>
          <div className='Nav_lista_item center'><Link to="/">Home</Link></div>
          <div className='Nav_lista_item center'><Link to="/about">About</Link></div>
          <div className='Nav_lista_item center'><Link to="/contact">Contact</Link></div>
        </div>
    </nav>
  );
}

export default Nav;
