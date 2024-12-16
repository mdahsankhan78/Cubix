import React from 'react'
import { Button } from './button'

const CustomButton = ({text, color, hovercolor, bg, hoverbg, className}) => {
  return (
    <Button className={`rounded-full items-center group flex-col border-none hover:text-white hover:bg-primary transition-all duration-300 bg-${bg} hover:bg-${hoverbg} text-${color} hover:text-${hovercolor} ${className}`}> <span className='translate-y-3 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-300'>{text}</span> <span className=' opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300'>{text}</span></Button>
  )
}

export default CustomButton