import './App.css';


function App() {

    function passarOMouse() {
      const h1 = document.querySelector('h1');
      h1.innerText = 'O mouse está em cima';
    }

    function passouOMouse() {
      const h1 = document.querySelector('h1');
      h1.innerText = 'Voce tirou o mouse';
    }
 
  return (
    <div className="App">
      <strong onMouseOver={()=> passarOMouse()} 
        onMouseLeave={()=>passouOMouse()}
      >
        Passe o mouse aqui</strong>
      <h1> </h1>
    </div>
  );
}

export default App;