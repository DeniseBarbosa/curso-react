import './App.css';
// Obrigatorio 
import  {useState, useEffect} from 'react';
// importando o hooks customizado pasta hooks > arquivo useFetch.js 
import { useBuscar } from './hooks/useFetch';

let url = "http://localhost:3000/produtos";

function App() {
  // salvar os dados em (produtos)
  let [produtos, setProdutos] = useState([]);

  // preencher os produtos com o hook customizado 
  const {dados: itens, httpConfig, carregando, erro} = useBuscar(url);
  


  // add produtos 
  const [nome, setNome] = useState("");
  const[preco, setPreco] = useState("");
  
  // esse bloco de codigo foi comentado porque estamos usando o hook customizado
  // useEffect(()=>{
  //   // fazendo uma requisição (resposta) 
  //   async function buscarDadosApi( ) {
  //     const requisição = await fetch(url);
  //     const data = await requisição.json();
  //     setProdutos(data);
  //   }
  //   buscarDadosApi();
  // },[]);

// add produtos 
  const enviarDados = async (e) =>{
    e.preventDefault()
    // enviar os dados para o back-end 
    //como os states tem os mesmo nomes da chave do objeto não precisa colocar nome:nome > quando o valor tem o mesmo nome da chave
    const produto ={
      nome,
      preco
    };

    // foi comentado porque estamos usando o customização de hooks
    // const requisição = await fetch(url,{
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(produto),
    // });

    // // Carregamento dinamico, aqui vamos fazer o botão de enviar funcionar, ao clicar em enviar, ele manda o produto criado para a lista 
    // const addProduto = await requisição.json();
    // setProdutos((prevProdutos) => [...prevProdutos, addProduto])
    // ao clicar no botão Criar Produto vai ter a limpeza dos inputs 
    httpConfig(produto, "POST");
    setNome("");
    setPreco("");
    
  };
  
  // remoção dos itens 
  const remover =(id) =>{
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* Carregando  */}
      {carregando && <p>Carregando dados...</p>}
      {erro && <p>{erro}</p>}
      {/* vamos percorre (loop de produtos) produtos  */}
      <ul>
        {/* antes aqui era produtos.map como estamos usando o hooks customizado foi mudado para itens.map  */}
        {/* validação quando os itens forem preenchidos fazemos o map itens && itens.map  */}
          {itens && itens.map((produto)=>(
            <li key={produto.id} >
              {produto.nome} - RS {produto.preco}
              <button onClick={()=> remover(produto.id)} >Excluir</button>
            </li>
          ))}
      </ul>
      {/* criando um formulario para add mais produtos  */}
      <div className='add-produtos'>
        <h2>Criar Lista de Produtos</h2>
            <form onSubmit={enviarDados} >
              <label >
                Nome:
                <input type="text" value={nome} name='nome' onChange={(e)=>setNome(e.target.value)} />
              </label>
              <label >
                Preço:
                <input type="number" value={preco} name='preço' onChange={(e)=>setPreco(e.target.value)} />
              </label>
              {/* carregando no enviar  */}
              {carregando && <input type="submit" disabled value="Aguarde" />}
              {!carregando && <input type="submit" value="Criar Produto" />}
            </form>
      </div>
    </div>
  );
}

export default App;
