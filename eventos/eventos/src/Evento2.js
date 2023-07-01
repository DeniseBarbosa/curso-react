import './App.css';


function App() {
  
  function  Add( ){
    const input = document.querySelector('#tarefa');
    const ul = document.querySelector('ul');
    if (!input.value) {
      return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
  }

  return (
    <div className="App">
      <input type="text" placeholder='Adicionar uma nova tarefa' id='tarefa'/>
      <button onClick={() => Add()} >Clique em mim</button>
      <ul></ul>
    </div>
  );
}

export default App;