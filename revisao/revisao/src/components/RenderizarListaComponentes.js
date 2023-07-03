import React from 'react'

const RenderizarListaComponentes = ({id, nome, idade}) => {
  return (
    <div>
      <h2>Cadastro pessoa física</h2>
      <ul>
        <li>id:{id}</li>
        <li>nome:{nome}</li>
        <li>idade:{idade}</li>
      </ul>
    </div>
  )
}

export default RenderizarListaComponentes