import React, { HTMLProps } from 'react'

interface IFormControlProps extends HTMLProps<HTMLFormElement>{
  children : React.ReactNode
}

const FormControl = ({children, ...rest} : IFormControlProps) => {
  return (
    <form {...rest}>
        {children}
    </form>
  )
}

export default FormControl