import React from 'react'

const Error = ({ error }) => {
  if (!error) return null
  return (
    <label
      style={{
        color: '#f31',
        marginLeft: '1rem',
        fontSize: 'small',
        display: 'inline-block'
      }}
    >
      * {error}
    </label>
  )
}

export default Error
