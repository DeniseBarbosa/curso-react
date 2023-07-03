import React, { useState } from 'react'

const RenderizarLista = () => {
  const [pessoas] = useState([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Pedro' },
    { id: 4, nome: 'Ana' },
    { id: 5, nome: 'Carlos' }
  ]);

  return (
    <div>
      <p>Lista de Pessoas</p>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>{pessoa.nome} - {pessoa.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderizarLista;
