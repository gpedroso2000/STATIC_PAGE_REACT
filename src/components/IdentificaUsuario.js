import React from 'react'
import useForm from '../Hooks/useForm'
import Input from './Input'
import Button from './Button'
import { UserContext } from '../context/UserContext'

const IdentificaUsuario = ({ nextTela }) => {
  const { user, inserirDados } = React.useContext(UserContext)
  const name = useForm(user.name ? user.name : '', 'nome')
  const senha = useForm(user.senha ? user.senha : '', 'senha')
  const senhaConfirm = useForm(
    user.senhaConfirm ? user.senhaConfirm : '',
    'senhaConfirm'
  )
  const email = useForm(user.email ? user.email : '', 'email')
  const date = useForm(user.date ? user.date : '', 'date')

  function salvaDados() {
    if (
      name.validate() &&
      senha.validate() &&
      senhaConfirm.validate() &&
      email.validate() &&
      date.validate()
    ) {
      if (senhaConfirm.value != senha.value) {
        senhaConfirm.setError('As senhas não são iguais. Tente novamente.')
        return
      }
      inserirDados({
        name: name.value,
        senha: senha.value,
        senhaConfirm: senhaConfirm.value,
        email: email.value,
        date: date.value
      })
      nextTela()
    }
  }

  return (
    <form>
      <Input
        name="nome"
        label="Nome"
        type="text"
        wdt="90"
        marginDiv="0"
        {...name}
      />
      <Input
        name="senha"
        label="Senha"
        type="password"
        wdt="42"
        marginDiv="3.75"
        {...senha}
      />
      <Input
        name="senhaconfirm"
        label="Confirmar Senha"
        type="password"
        wdt="42"
        {...senhaConfirm}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        wdt="42"
        marginDiv="3.75"
        {...email}
      />
      <Input
        name="nasci"
        label="Data de Nascimento"
        type="date"
        wdt="42"
        marginDiv="3.75"
        {...date}
      />
      <div className="divBtn">
        <Button bgColor="#5357B1" wd="14.125" onClick={salvaDados}>
          Proximo Passo
        </Button>
      </div>
    </form>
  )
}

export default IdentificaUsuario
