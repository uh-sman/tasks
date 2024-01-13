import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import  { useRouter } from 'next/navigation'

interface ButtonProps {
    className?:string,
    children:React.ReactNode,
    disabled:boolean,
    type?: 'submit',
    // handleClick: (value:string) => void
    href: string
    // ButtonHTMLAttributes<HTMLButtonElement>.type?:
}
// export interface ButtonProps 
// extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
// extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button:React.FC<ButtonProps> = ({
    className,
    children,
    disabled,
    type,
    // handleClick,
    href,
    ...props

}, ref) => {
    const router = useRouter()
  return (
    <button 
    disabled={disabled}
    onClick={() => router.push(href)}
    className={twMerge(``,className)}
    type={type}
    // ref={ref}
    {...props}
    >
      {children}
    </button>
  )
}
// Button.displayName = 'Button';

export default Button
