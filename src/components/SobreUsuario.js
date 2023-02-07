import React from 'react'
import Textarea from './Textarea'
import Button from './Button'
import useForm from '../Hooks/useForm'
import { UserContext } from '../context/UserContext'

const SobreUsuario = ({ nextTela, beforeTela }) => {
  const { user, inserirDados } = React.useContext(UserContext)
  const sobre = useForm(user.sobre ? user.sobre : '', 'sobre')

  function salvaDados(event) {
    if (event.target.id == 'next') {
      if (sobre.validate()) {
        inserirDados({ sobre: sobre.value })
        nextTela()
      }
    } else {
      beforeTela()
    }
  }

  return (
    <form>
      <Textarea
        name="sobre"
        label="Nos conte mais sobre você"
        wdt="90"
        {...sobre}
      />
      <div className="divBtn">
        <Button bgColor="#5357B1" wd="14.125" onClick={salvaDados} id="next">
          Proximo Passo
        </Button>
        <Button bgColor="#8C98A9" wd="14.125" onClick={salvaDados} id="prev">
          Anterior
        </Button>
      </div>
    </form>
  )
}

export default SobreUsuario
