import React from 'react'
import Btn from '@mui/material/Button'

const Button = ({ children, bgColor, wd, onClick, ...props }) => {
  return (
    <>
      <Btn
        onClick={onClick}
        variant="contained"
        style={{
          textTransform: 'none',
          backgroundColor: bgColor,
          width: `${wd}rem`,
          marginLeft: '1.5rem',
          bottom: '-3rem'
        }}
        {...props}
      >
        {children}
      </Btn>
    </>
  )
}

export default Button
