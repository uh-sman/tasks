import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'


interface ButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>({
    className,
    children,
    disabled,
    type = 'button',
    ...props

}, ref) => {
  return (
    <button 
    disabled={disabled}
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
