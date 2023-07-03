import React, { useState } from 'react'

const UseState = () => {
  let numero = 20;
  let [cor, mudarCor] = useState("Azul");
  return (
    <div> 
      <p> Valor: {numero}</p>
      <button onClick={()=>(numero = 500)} >Mudar ovalor</button>
      <div>
        <p>Usando o useState: Cor: {cor}</p>
        <button onClick={()=> mudarCor("Verde")} >Mudar a cor</button>
      </div>
    </div>
  )
}

export default UseState