//import logo from './logo.svg';
import './css/Nav.css';
import { BrowserRouter as Router, Route, Link, Routes, redirect as Redirect } from "react-router-dom";

function Nav({ name }) {
  const url = "/about/" + name;
  return (
    <nav className='Nav'>
        <div className='flex-row div_nav'>
          <div className='item_lista_nav center'><Link to="/">Home</Link></div>
          <div className='item_lista_nav center'><Link to="/about">About</Link></div>
          <div className='item_lista_nav center'><Link to="/contact">Contact</Link></div>
        </div>
    </nav>
  );
}

export default Nav;
