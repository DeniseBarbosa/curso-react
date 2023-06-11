// Componentes 
import SecaoIII from './components/SecaoIII';
import DadosGerente from './components/DadosGerente';
import RederinzarLista from './components/rederinzarLista';
import RenderizacaoCondicional from './components/renderizacaoCondicional';
import MostrarNomeUsuario from './components/MostrarNomeUsuario';
// Imagens 
import Dog from "./assets/dog-feliz.jpg"
import './App.css';
import DetalheCarros from './components/DetalheCarros';

function App() {
  const nomes = "Denise Barbosa";
  const carros = [
    {id: 1, marca: "Ford", cor:"Branco", novo: false, km:1200},
    {id: 2, marca: "Fusca", cor:"Roso", novo: true, km:0},
    {id: 3, marca: "BMW", cor:"Preto", novo: false, km:4500}

]
  return (
    <div className="App">
      <h1>Avaçando com o React</h1>
      <SecaoIII/>
      {/* Colocando uma imagem que esta na pasta public  */}
        <div>
                <img src="por-do-sol.jpg" alt="por do sol" />
        </div>
      {/* Colocando uma imagem que esta dentro da pasta src/assets  */}
        <div>
              <img src={Dog} alt="um doguinho feliz" />
        </div>
        <DadosGerente/>
        <RederinzarLista/>
        <RenderizacaoCondicional/>
        {/* props  */}
        <MostrarNomeUsuario nome = {nomes}/>
        {/* destructuring  */}
        {/* imprimindo mais de uma propriedade  */}
        <DetalheCarros marca="Fusca" km={2000} cor="Preto" novo={false}/>
        {/* reaproveitando os componentes  */}
        <DetalheCarros marca="BMW" km={0} cor="Azul" novo={true}/>
        <DetalheCarros marca="Limosine" cor="Laranja" km={1200} novo={false}/>
        {/* loop array de objetos  é mais usado*/}
        {carros.map((carro)=>
        <DetalheCarros
        marca={carro.marca}
        cor={carro.cor}
        novo={carro.novo}
        km={carro.km}
        />
        
        )}

    </div>
  );
}

export default App;
