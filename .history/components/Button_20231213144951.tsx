import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'


interface ButtonProps {
    className?:string,
    children:React.ReactNode,
    disabled:boolean,
    type?: 'submit',
    handleClick: () => void
    // ButtonHTMLAttributes<HTMLButtonElement>.type?:
}
// extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button:React.FC<ButtonProps> = ({
    className,
    children,
    disabled,
    type,
    handleClick,
    ...props

}, ref) => {
  return (
    <button 
    disabled={disabled}
    onClick={handleClick}
    className={twMerge(``,className)}
    type={type}
    {...props}
    >
      {children}
    </button>
  )
}
// Button.displayName = 'Button';

export default Button
