import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import  { useRouter } from 'next/navigation'

// interface ButtonProps {
//     className?:string,
//     children:React.ReactNode,
//     disabled:boolean,
//     type?: 'submit',
//     label:string,
//     // active?:string,
//     // handleClick: (value:string) => void
//     href: string
//     // ButtonHTMLAttributes<HTMLButtonElement>.type?:
// }
export interface ButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href:string
}
// extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type,
  // label,
  // ref,
  // active,
  // handleClick,
  href,
  // ...props
}, ref)  => {
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
})
Button.displayName = 'Button';

export default Button
