import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'


interface ButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
    className,
    children,
    disabled,
    type = 'button',
    ...props

}) => {
  return (
    <button 
    className={twMerge(``,className)}
    type={type}
    {...props}
    >
      {children}
    </button>
  )
}
Button.displayName = 'Button';

export default Button
