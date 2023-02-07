import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AssignmentIcon from '@mui/icons-material/Assignment'
import styles from './Icon.module.css'

const Icon = ({ tela, icone }) => {
  if (icone == 'ide') {
    return (
      <AccountCircleIcon
        className={styles.svg}
        style={{
          color: tela == 0 ? '#5357B1' : tela > 0 ? '#00AE63' : '#8C98A9'
        }}
      />
    )
  } else if (icone == 'end') {
    return (
      <HomeIcon
        className={styles.svg}
        style={{
          color: tela == 1 ? '#5357B1' : tela > 1 ? '#00AE63' : '#8C98A9'
        }}
      />
    )
  } else if (icone == 'sob') {
    return (
      <AssignmentIcon
        className={styles.svg}
        style={{
          color: tela == 2 ? '#5357B1' : tela > 2 ? '#00AE63' : '#8C98A9'
        }}
      />
    )
  }

  return <div>Icon</div>
}

export default Icon
