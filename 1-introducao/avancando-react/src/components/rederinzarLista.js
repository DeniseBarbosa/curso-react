// as alterações foi feita devido o warning 
// A mensagem de warning que você está vendo no console provavelmente está relacionada ao uso do índice (i) como 
//chave (key) nos elementos renderizados na primeira lista (lista.map). O React recomenda fortemente que as chaves sejam estáveis
 //e únicas entre os elementos da lista. Usar o índice como chave pode levar a problemas de desempenho e renderização incorreta em certos casos.

// Uma abordagem mais adequada seria usar uma identificação única para cada item da lista, em vez do índice. No seu exemplo, 
//a lista de usuários já possui identificadores únicos (id), então é melhor usar esses identificadores como chaves. No entanto, 
//no caso da lista de strings, onde não há identificadores únicos associados a cada item, você pode considerar gerar identificadores
// únicos para esses itens.

// Você pode utilizar a biblioteca uuid para gerar identificadores únicos. Primeiro, instale a biblioteca uuid através do comando npm install uuid no seu projeto.
// Aqui está um exemplo modificado do seu código, usando uuid para gerar chaves únicas para a lista de strings:

// Com essa modificação, cada item na lista de strings terá uma chave única gerada pelo uuidv4(), e a mensagem
//  de warning relacionada às chaves deve desaparecer
//  Lembre-se de importar a função v4 do uuid e usá-la para gerar as chaves.

import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const RederinzarLista = () => {
    const [lista] = useState(["casa","predio","avenida","carro"]);
    const [usuarios, definirUsuario] = useState([
        {id:1, nome: "denise", idade: 20},
        {id:2, nome: "felipe", idade: 15},
        {id:3, nome: "maria", idade: 25},
    ]);
    const deletarUsuario = ()=>{
        const numeros = Math.floor(Math.random() * 4);
        definirUsuario((preveUsuarios)=>{
            return preveUsuarios.filter((usuarios)=>numeros !== usuarios.id)
        })
    };
  return (
    <div>
        <ul>
            {lista.map((item)=>(
                <li key={uuidv4()}>{item}</li>
            ))}
        </ul>
        <ul>
            {usuarios.map((user)=>(
                <li key={user.id}>
                    {user.nome} - {user.idade}
                </li>
            ))}
        </ul>
        {/* vai deletar o usuario  */}
        <button onClick={deletarUsuario}>Deletar usuario</button>
    </div>
  )
}

export default RederinzarLista;