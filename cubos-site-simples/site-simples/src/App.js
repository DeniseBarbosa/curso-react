import './App.css';
import Perfil from './images/perfil.jpg';

function App() {
  return (
    <div className="container">
      <header>
        <h2>Denise.dev</h2>
        <ul className="menu">
          <li>artigos</li>
          <li>Contato</li>
        </ul>
      </header>
      <section>
        <div className="esquerdo">
        <img src={Perfil} alt="foto de uma onça pintada" />
        <strong>Pin on Rosie</strong>
        <span>
          <br />
           Classroom of the Elite é uma série de light novel japonesa escrita por Shōgo Kinugasa e ilustrada por Shunsaku Tomose.</span>
        </div>
        <div className="direito">
            <strong>27 de junho de 2030</strong>
            <h2>Introdução ao React</h2>
            <span>Nesse post nós iremos falar sore como o React é importante para o desenvolvedor Front-end moderno</span>
            <a href="#">Ler mais</a>
        </div>
      </section>
      <footer>
      <ul className="menu">
          <li>artigos</li>
          <li>Contato</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
