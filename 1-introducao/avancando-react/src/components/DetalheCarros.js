
const DetalheCarros = ({marca, km, cor, novo}) => {
  return (
    <div>
        <h1>Detalhes de um carro</h1>
        <ul>
            <li>Marca: {marca}</li>
            <li>Km: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {novo && <p>Este carro é novo</p> }
    </div>
  )
}

export default DetalheCarros