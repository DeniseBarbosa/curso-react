import './App.css';
import {useEffect} from 'react';

function App() {
  useEffect(()=>{
    const button = document.querySelector('button');
    const input = document.querySelector('#tarefa');
    const ul = document.querySelector('ul');
    button.addEventListener('click', ()=>{
      if (!input.value) {
        return;
      }
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      input.value = '';
    });

  }, []);

  return (
    <div className="App">
      <input type="text" placeholder='Adicionar uma nova tarefa' id='tarefa'/>
      <button>Clique em mim</button>
      <ul></ul>
    </div>
  );
}

export default App;