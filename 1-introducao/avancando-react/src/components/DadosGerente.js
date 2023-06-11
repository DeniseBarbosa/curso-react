import { useState } from "react";

const DadosGerente = () => {
    let numero = 10;
    console.log(numero);
    const [number, setNUmero] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {numero}</p>
        <button onClick={() =>(numero = 15)}>Mudar o numero</button>
      </div>
      <div>
      <p>Valor dois: {number}</p>
      <button onClick = {() => setNUmero(30)}>Muda numero </button>
      </div>
    </div>
  )
}

export default DadosGerente