import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import  { useRouter } from 'next/navigation'

interface ButtonProps {
    className?:string,
    children:React.ReactNode,
    disabled:boolean,
    type?: 'submit',
    label?:string,
    // active?:string,
    // handleClick: (value:string) => void
    href: string | ''
    // ButtonHTMLAttributes<HTMLButtonElement>.type?:
}
const Button = ({
  className,
  children,
  type,
  disabled,
  label,
  href,
} : ButtonProps) => {
  const router = useRouter()
  return (
    <button 
    disabled={disabled}
    onClick={(e:React.MouseEvent<HTMLButtonElement>) => router.push(href)}
    className={twMerge(``,className)}
    type={type}
    // ref={ref}
    // {...props}
    >
      {children}
    </button>
  )
}
export default Button
