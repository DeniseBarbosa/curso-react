// é criado como é feito no mercado 
import HierarquiaComponente from "./HierarquiaComponente";
const PrimeiroComponente = () =>{

    return (
        <div>
            {/* escrevendo um comentario aqui  */}
            <h1>Meu primeiro componente</h1>
            <p ClassName ="">Meu texto</p>
            <HierarquiaComponente/>
        </div>
        
    );
};
export default PrimeiroComponente;