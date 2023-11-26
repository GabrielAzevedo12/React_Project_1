import './App.css';
import { Adicionar_class, Remover_class, Existe_Class, S1, S2, $, new_text, def_dimensoes } from './components/funçoes/funçoes'
import Main from './components/Layout/Main/Main';
import './propsGerais.css'
/*
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
*/

function App() {
  return (
    <div className="App tamplate-column">
      <Main />
    </div>
  );
}
/*
<Header/>
      <Nav />
      <Main />
      <Footer />
*/
export default App;
