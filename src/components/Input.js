import React from 'react'
import styles from './Input.module.css'
import Error from './Error'

const Input = ({
  name,
  label,
  type,
  wdt,
  marginDiv,
  value,
  onChange,
  onBlur,
  error
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ width: `${wdt}%`, marginRight: `${marginDiv}rem` }}
    >
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {error && <Error error={error} />}
      <input
        id={name}
        name={name}
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={name == 'cep' && '8'}
      />
    </div>
  )
}

export default Input
