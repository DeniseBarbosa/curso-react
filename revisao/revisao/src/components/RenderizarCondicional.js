import React, { useState } from 'react'

function RenderizarCondicional() {
  const [usuario] = useState(false);
  
  return (
    <div>
      <h1>Usuario autenticado?</h1>
      {usuario === true ? (
        <div><p>Usuário foi autenticado</p></div>
      ) : (
        <div><p>Usuário não foi autenticado</p></div>
      )}
    </div>
  )
}

export default RenderizarCondicional