
import './App.css';
import MeuComponente from './components/MeuComponente';
import Title from './components/Title';


function App() {
  const titulorosa = false;
  return (
    <div className="App">
      {/* CSS global   vai no index.css*/}
      <h1>React com CSS</h1>
      {/* CSS de componente  */}
      <MeuComponente/>
      <p>Este parágrafo pertence ao app.js</p>
      {/* class dinâmica  */}
      <h2 className={titulorosa ? "titulo-rosa": "titulo"}>Este titulo vai ter classe dinâmica, foi aplicao no css global </h2>
      {/* CSS Modules é o mais usado de forma profissionalmente  */}
      <Title/>
    </div>
  );
}

export default App;
