
import './App.css';
import UseState from './components/UseState';
import RenderizarLista from './components/RenderizarLista';
import RenderizarCondicional from './components/RenderizarCondicional';
import Props from './components/Props';
import DesestruturarProps from './components/DesestruturarProps';
import RenderizarListaComponentes from './components/RenderizarListaComponentes';
import { useState } from 'react';

function App() {
  // const nome ="Denise Prinsloo"

const perfil = [
{id: 1, nome: "Pedro", idade: 20},
{id: 2, nome: "Luana", idade: 10},
{id: 5, nome: "Jonas", idade: 35},
{id: 3, nome: "Lima", idade: 55},
{id: 7, nome: "Silvia", idade: 25},
]



  const [nomes] = useState("Luana")
  return (
    <div className="App">
      <UseState/>
      <RenderizarLista/>
      <RenderizarCondicional/>
      <Props nome={nomes}/>
      <DesestruturarProps especie="Camudongo" nome="Mat"/>
      {perfil.map((perfis)=>(
        <RenderizarListaComponentes id={perfis.id} nome={perfis.nome} idade={perfis.idade}/>
      ))}
    </div>
  );
}

export default App;
