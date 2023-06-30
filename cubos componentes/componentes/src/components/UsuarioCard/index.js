import './estilo.css';

 export default function  UsuarioCard({nome, poderesEHabilidades, personagem, seguindo} ) {
  return(
    <div className='anime-card'>
      <img src={personagem} alt="Anime" />
      <strong>{nome}</strong>
      <span>{poderesEHabilidades}</span>

      {/* renderizacao condicional  */}
      {
        seguindo === false ? <button className="seguindo">Seguir</button> : <button className="deixar-de-seguir">Deixar de seguir</button>
      }
      
    </div>
  )
};