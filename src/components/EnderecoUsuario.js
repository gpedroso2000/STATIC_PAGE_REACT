import React from 'react'
import Input from './Input'
import Button from './Button'
import useForm from '../Hooks/useForm'
import { UserContext } from '../context/UserContext'

const EnderecoUsuario = ({ nextTela, beforeTela }) => {
  const { user, inserirDados } = React.useContext(UserContext)
  const cep = useForm(user.cep ? user.cep : '', 'cep')
  const rua = useForm(user.rua ? user.rua : '', 'rua')
  const num = useForm(user.num ? user.num : '', 'num')
  const bairro = useForm(user.bairro ? user.bairro : '', 'bairro')
  const cidade = useForm(user.cidade ? user.cidade : '', 'cidade')
  const pontoref = useForm(user.pontoref ? user.pontoref : '', 'pontoref')

  function salvaDados(event) {
    if (event.target.id == 'next') {
      if (
        cep.validate() &&
        rua.validate() &&
        num.validate() &&
        bairro.validate() &&
        cidade.validate() &&
        pontoref.validate()
      ) {
        inserirDados({
          cep: cep.value,
          rua: rua.value,
          num: num.value,
          bairro: bairro.value,
          cidade: cidade.value,
          pontoref: pontoref.value
        })
        nextTela()
      }
    } else {
      beforeTela()
    }
  }

  return (
    <form>
      <Input
        name="cep"
        label="CEP"
        type="text"
        wdt="42"
        marginDiv="3.749"
        {...cep}
      />
      <Input
        name="rua"
        label="Rua"
        type="text"
        wdt="42"
        marginDiv="3.749"
        maxlength={8}
        {...rua}
      />
      <Input
        name="numero"
        label="Número"
        type="number"
        wdt="19"
        marginDiv="2.5"
        {...num}
      />
      <Input
        name="bairro"
        label="Bairro"
        type="text"
        wdt="19"
        marginDiv="3.75"
        {...bairro}
      />
      <Input
        name="cidade"
        label="Cidade"
        type="text"
        wdt="42"
        marginDiv="0"
        {...cidade}
      />
      <Input
        name="ponto"
        label="Ponto de Referência"
        type="text"
        wdt="90"
        marginDiv="0"
        {...pontoref}
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

export default EnderecoUsuario
