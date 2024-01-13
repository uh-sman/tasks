import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'


interface ButtonProps {
    className?:string,
    children:React.ReactNode,
    disabled:boolean,
    type?: string | undefined
    // ButtonHTMLAttributes<HTMLButtonElement>.type?:
}
// extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button:React.FC<ButtonProps> = ({
    className,
    children,
    disabled,
    type,
    ...props

}, ref) => {
  return (
    <button 
    disabled={disabled}
    className={twMerge(``,className)}
    // type={type}
    {...props}
    >
      {children}
    </button>
  )
}
// Button.displayName = 'Button';

export default Button
