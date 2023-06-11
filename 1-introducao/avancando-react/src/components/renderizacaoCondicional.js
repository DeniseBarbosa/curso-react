import { useState } from "react"


function RenderizacaoCondicional() {
    const [x] = useState(true);
    const [nome, definirNome] = useState("Denise");

  return (
    <div> 
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p> }
        <h1>If ternario</h1>
        {nome === "Denise" ? ( <div><p>Sim! Existe o nome Denise</p></div> ) : ( <div><p>Não existe um nome Denise</p></div> )}
    </div>
  )
}

export default RenderizacaoCondicional