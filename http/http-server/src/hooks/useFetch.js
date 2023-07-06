import {useState, useEffect} from 'react';

export const useBuscar = (url) =>{
  // trabalhar com os dados que rece da API 
  const [dados, setDados] = useState(null);
  // refatorando o metodo POST (enviar ) 
  // vai configurar o post e cabecalho 
  const [config, setConfig] = useState(null);
  // qual metodo vai ser utilizado na função se vai ser GET ou POST 
  const [metodo, setMetodo] = useState(null);
  //adicionamos uns dados no sistema e ele tras os dados atualizados
  const [addAtualizar, setAddAtualizar] = useState(false);

  // carregando
  const [carregando, setCarregando] = useState(false);

  // tratando erros 
  const [erro, setErro] = useState(null);

  // deletando itens 
  const [itensId, setItensId] = useState(null);

  // faz parte da refatoracao POST 
  const httpConfig = (dados, metodo) =>{
    if (metodo === "POST") {
      setConfig({
        method: metodo,
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      setMetodo(metodo);
    }else if(metodo === "DELETE"){
      setConfig({
        method: metodo,
        headers:{
          "Content-type": "application/json",
        }
      });
      setMetodo(metodo)
      setItensId(dados)
    }
  };

  // executar apenas uma vez
  useEffect(()=>{
    const buscarDados = async () =>{
      // carregando 
      setCarregando(true);

      try {
        // tentar carregar os dados 
        const requisicao = await fetch(url);
        const dados = await requisicao.json();
        setDados(dados);
      } catch (error) {
        // se os dados não for carregado exibir essa mensagem na tela 
        setErro("Houve algum erro ao carregar os dados ")
        
      }

      // carregando 
      setCarregando(false);
    };
    buscarDados();
    
  }, [url, addAtualizar]);

  // faz parte do refatorando POST 
  useEffect(()=>{
    const httpRequisicao = async () =>{
      if (metodo === "POST") {
        let buscarOpcoes = [url, config];
        const requisicao = await fetch(...buscarOpcoes);
        const dados = await requisicao.json();
        setAddAtualizar(dados)
      }else if (metodo === "DELETE") {
        const deleteUrl = `${url}/${itensId}`
        const requisicao = await fetch(deleteUrl, config)
        const dados = await requisicao.json()
        setAddAtualizar(dados)
      }
    };
    httpRequisicao();
  }, [config, metodo, url])
  // exportar 
  return {dados, httpConfig, carregando, erro};
}
