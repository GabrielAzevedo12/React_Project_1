//import logo from './logo.svg';
import Nav from '../Nav/Nav';
import './css/Header.css';

function Header() {
  return (
    <div className="Header flex-row">
      <div className="center Logo_Header">
        This is Logo
      </div>
      <Nav name="Teste"/>
    </div>
  );
}

export default Header;
