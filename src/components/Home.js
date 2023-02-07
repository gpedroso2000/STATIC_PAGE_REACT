import React from 'react'
import Header from './Header'
import styles from './Home.module.css'
import Telas from './Telas'

const Home = () => {
  // Identificação = 0; Endereço = 1; Sobre = 2; criado = 3
  const [tela, setTela] = React.useState(0)

  function nextTela() {
    if (tela == 3) setTela(tela)
    else setTela(tela + 1)
  }

  function beforeTela() {
    if (tela == 0) setTela(tela)
    else setTela(tela - 1)
  }

  return (
    <section className={styles.boxPrincipal}>
      {tela != 3 && (
        <>
          <h1 className={styles.titulo}>Criação de Usuário</h1>
          <Header tela={tela} />
        </>
      )}
      <Telas
        tela={tela}
        nextTela={nextTela}
        beforeTela={beforeTela}
        setTela={setTela}
      />
    </section>
  )
}

export default Home
