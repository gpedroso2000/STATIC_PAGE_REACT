import React from 'react'
import Error from './Error'
import styles from './Textarea.module.css'

const Textarea = ({ name, label, wdt, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper} style={{ width: `${wdt}%` }}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {error && <Error error={error} />}

      <textarea
        id={name}
        name={name}
        value={value}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
    </div>
  )
}

export default Textarea
