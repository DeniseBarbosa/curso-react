// Componentes 
import PrimeiroComponente from "./components/PrimeiroComponente"
import ExpressaoModelo from "./components/ExpressaoModelo";
import Eventos from "./components/Eventos";

//Estilo CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <PrimeiroComponente/>
      <ExpressaoModelo/>
      <Eventos/>
      
    </div>
  );
}

export default App;
