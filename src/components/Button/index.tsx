import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactElement | string
  onClick?: () => void
}
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
