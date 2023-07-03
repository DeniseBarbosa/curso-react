import React from 'react'

const DesestruturarProps = ({especie, nome}) => {
  return (
    <div>
      <h2>Lista de Pets</h2>
      <ul>
        <li>Pet: {especie}: Nome: {nome}</li>
      </ul>
    </div>
  )
}

export default DesestruturarProps