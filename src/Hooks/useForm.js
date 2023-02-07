import React from 'react'

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail valido'
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido'
  },
  senha: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message: 'A senha deve conter no mínimo 8 caracters(Ab1@)'
  }
}

const useForm = (content, type) => {
  const [value, setValue] = React.useState(content)
  const [error, setError] = React.useState(null)

  function onChange({ target }) {
    if (error) {
      validate(target.value)
    }
    setValue(target.value)
  }
  function validate(value) {
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    setError,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
