import './MeuFormulario.css';
import {useState} from 'react'; 

const MeuFormulario = ({usuario}) => {
   // gerenciamento de dados
   const [name, setName] = useState(usuario ? usuario.name : "");
   const [email, setEmail] = useState(usuario ? usuario.email : "");
    const [bio, setBio] = useState(usuario ? usuario.bio : "");
    const [funcao, setRole] = useState(usuario ? usuario.funcao : "");
  const nomeGerenciador = (e)=>{
    setName(e.target.value);
  };
    // console.log(name);
    // console.log(email);
    const enviarFormulario = (Evento) =>{
      Evento.preventDefault();
      console.log("Enviando o formulário");
      console.log(name, email, bio, funcao);

      // validação e envio 
      // Limpando formulário 
      setName("");
      setEmail("");
      setBio("");

    };
  return (
    <div> 
      {/* envio de formulario onSubmit */}
      {/* 1 criação de formulario  */}
      <form onSubmit={enviarFormulario} >
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text"  name="name" placeholder="Digite o seu nome" onChange={nomeGerenciador}  value={name}/>
        </div>
        {/* Recomendado pela a documentação do React fazer um formulario dentro da label */}
        <label>
        <span>E-mail</span>
        {/* outra maneira de gerenciamento de dados, porem não é o mais indicado */}
          <input type="email" name="email" placeholder="Digite o seu e-mail"  onChange={(e)=> setEmail(e.target.value)} value={email} />
        </label>
        {/* Textarea usado para texto maiores como blogs por exemplo */}
        <label >
          <span>Biografia</span>
          <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* seleção de funções */}
        <label >
          <span>Cargos</span>
          <select name="funcao" onChange={(e) => setRole(e.target.value)} value={funcao}>
            <option value="estagiario">Estagiario</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MeuFormulario