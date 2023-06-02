const Eventos = () =>{
    const handleMeuEventos = (e) =>{
        console.log(e);
        console.log("Você clicou no botão")
    };

    // o HTML pode ser renderizado fora do return como mostra o exemplo abaixo 
    const html = (x)=>{
        if (x) {
            return <h1>HTML fora return principal</h1>
        }else{
            return <h2>Aqui tambem  retorna um html</h2>
        }
    }



    return(
        <div>
            <div>
                <button onClick ={handleMeuEventos}>Clique aqui</button>
            </div>
            <div>
                <button onClick ={()=> console.log("Você clicou aqui tambem")}>Clique aqui tambem</button>
            </div>
            {html(true)}
            {html(false)}
        </div>
    );
};
export default Eventos;