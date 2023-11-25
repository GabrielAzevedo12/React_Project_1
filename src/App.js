import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App grid-container tamplate-column">
      <Header/>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
