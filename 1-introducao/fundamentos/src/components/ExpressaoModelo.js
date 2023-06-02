const ExpressaoModelo = () =>{
    const nome = "Denise";
    const pessoa = {
        idade: 20,
        profissao: "Desenvolvedora de software"
    }
    return(
        <div>
            <h1> Olá {nome}, tudo bem?</h1>
            <h2>{nome} é uma {pessoa.profissao}</h2>
            <p>{console.log("Aqui está sendo executado javascript dentro de um paragrafo")}</p>
        </div>
    );
};
export default ExpressaoModelo;