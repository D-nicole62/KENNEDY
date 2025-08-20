import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button style={{transition:'all .2s ease-in-out'}} 
        onClick={onClick} 
        className='w-fit h-fit px-8 py-4 font-normal text-white bg-[var(--color-theme)] rounded-full hover:shadow-[inset_0_0_0_1px_var(--color-theme)] hover:text-[var(--color-theme)] hover:bg-transparent cursor-pointer'>
        {text}
    </button>
  )
}

export default Button