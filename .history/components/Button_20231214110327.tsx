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
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
// extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
},ref) => {
  return (
      <button
      type={type}
      className={twMerge(``, className)}
      disabled={disabled}
      ref={ref}
      {...props}
      >
          {children}
      </button>
  )
})


Button.displayName = 'Button';
// Button.displayName = 'Button';

export default Button


{/* <button 
    disabled={disabled}
    onClick={(e:React.MouseEvent<HTMLButtonElement>) => router.push(href)}
    className={twMerge(``,className)}
    type={type}
    // ref={ref}
    {...props}
    >
      {children}
    </button> */}