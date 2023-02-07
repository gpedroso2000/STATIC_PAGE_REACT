import React from 'react'
import styles from './Header.module.css'
import Icon from './Icon'

const Header = ({ tela }) => {
  return (
    <header>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Icon tela={tela} icone="ide" />
          Identificação do Usuário
        </li>
        <li className={styles.li}>
          <Icon tela={tela} icone="end" />
          Endereço do Usuário
        </li>
        <li className={styles.li}>
          <Icon tela={tela} icone="sob" />
          Sobre Você
        </li>
      </ul>
    </header>
  )
}

export default Header
