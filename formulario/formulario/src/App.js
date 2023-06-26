
import './App.css';
import MeuFormulario from './components/MeuFormulario';

function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MeuFormulario  usuario={{name: "Denise", email: "denise@gmail.com", bio: "Desenvolvedora", funcao: "fullstack"}} />
    </div>
  );
}

export default App;
