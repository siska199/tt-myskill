import clsx from 'clsx';
import React, { HTMLProps } from 'react'

interface TProps extends HTMLProps<HTMLButtonElement>{
  onClick : (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>void;
  variant? : 'contained' | 'outline'
}

const Button = (props: TProps) => {
  const {children, onClick, variant='contained'} = props
  return (
    <button 
      className={clsx({
        'py-sm px-md  rounded-lg disabled:bg-disbaled-btn disabled:bg-gray-500 transition-all duration-[50] hover:scale-[1.03] active:scale-[0.98]' : true,
        'bg-primary text-white hover:brightness-[85%]' : variant==='contained',
        'text-primary border-primary border hover:brightness-[50%] ' : variant==='outline'
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button