import './App.css';
import {useRef} from 'react';

function App() {
  const filmes = [
    { id: 1, nome: "O Poderoso Chefão" },
    { id: 2, nome: "O Senhor dos Anéis: O Retorno do Rei" },
    { id: 3, nome: "O Cavaleiro das Trevas" },
    { id: 4, nome: "A Lista de Schindler" },
    { id: 5, nome: "Pulp Fiction: Tempo de Violência" },
    { id: 6, nome: "Clube da Luta" },
    { id: 7, nome: "O Silêncio dos Inocentes" },
    { id: 8, nome: "Interestelar" },
    { id: 9, nome: "O Iluminado" },
    { id: 10, nome: "Cidade de Deus" }
  ];
  

const inputRef = useRef(null);

function buscarFilmes( ) {
  // se o input estiver vazio eu não faço nada
  if (!inputRef.current.value.trim()) {
    return;
  }
  // se tiver conteudo dentro vamos fazer a minipulação 
  const filmesLi = document.querySelectorAll('li');
  for (const buscando of filmesLi) {
    if (buscando.textContent.toLowerCase().includes(inputRef.current.value.toLowerCase())) {
      buscando.style.display = 'block';
      continue;
    }
    buscando.style.display = 'none';
  }
}

function limparBusca( ) {
  const filmesLi = document.querySelectorAll('li');
  for (const limpar  of  filmesLi ) {
    limpar.style.display = 'block';
  }
  inputRef.current.value = "";
}
  return (
    <div className="container">
      <div>
        {/* vinculando o inputRef */}
        <input type="text" placeholder='Buscar' ref={inputRef} />
        <button onClick={()=> buscarFilmes()} >Buscar</button>
        <button onClick={()=> limparBusca()} >Limpar</button>
      </div>
      {/* percorrendo o array de filmes usando o map  */}
      <ul>
        {filmes.map((filme)=>(
          <li key={filme.id}>{filme.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
