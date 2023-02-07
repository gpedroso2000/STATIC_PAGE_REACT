import React from 'react'
import EnderecoUsuario from './EnderecoUsuario'
import IdentificaUsuario from './IdentificaUsuario'
import SobreUsuario from './SobreUsuario'
import UserCreated from './UserCreated'

const Telas = ({ tela, nextTela, beforeTela, setTela }) => {
  if (tela == 0) return <IdentificaUsuario nextTela={nextTela} />
  else if (tela == 1)
    return <EnderecoUsuario nextTela={nextTela} beforeTela={beforeTela} />
  else if (tela == 2)
    return <SobreUsuario nextTela={nextTela} beforeTela={beforeTela} />
  else return <UserCreated setTela={setTela} />
}

export default Telas
