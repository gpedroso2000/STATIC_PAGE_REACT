import React from 'react'
import Button from './Button'
import styles from './UserCreated.module.css'
import { UserContext } from '../context/UserContext'

const UserCreated = ({ setTela }) => {
  const { user, setUser } = React.useContext(UserContext)

  function newUser() {
    setUser({})
    setTela(0)
  }

  return (
    <>
      <div className={styles.divUser}>
        <h1>Usuário Criado! </h1>
        <div className={styles.divInput}>
          <label>Nome</label>
          <span>{user.name}</span>
        </div>
        <div className={styles.divInput}>
          <label>Email</label>
          <span>{user.email}</span>
        </div>
        <div className={styles.divInput}>
          <div className={styles.divInput2}>
            <label>Rua</label>
            <span>{user.rua}</span>
          </div>
          <div className={styles.divInput2}>
            <label>Número</label>
            <span>{user.num}</span>
          </div>
        </div>
        <div className={styles.divInput}>
          <label>Cep</label>
          <span>{user.cep.substr(0, 5) + '-' + user.cep.substr(5, 3)}</span>
        </div>
        <Button bgColor="#5357B1" wd="30" onClick={newUser}>
          Novo usuário
        </Button>
      </div>
    </>
  )
}

export default UserCreated
