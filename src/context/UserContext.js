import React from 'react'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState({
    name: '',
    senha: '',
    senhaConfirm: '',
    email: '',
    date: null,
    cep: '',
    rua: '',
    num: '',
    bairro: '',
    cidade: '',
    pontoref: '',
    sobre: ''
  })

  function inserirDados(obj) {
    setUser({ ...user, ...obj })
  }

  return (
    <UserContext.Provider value={{ user, setUser, inserirDados }}>
      {children}
    </UserContext.Provider>
  )
}
