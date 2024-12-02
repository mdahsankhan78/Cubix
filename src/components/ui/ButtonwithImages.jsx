import React from 'react'
import { Button } from './button'

const ButtonwithImage = ({ text, color, hovercolor, bg, hoverbg }) => {
    return (
        <div className={`flex ${bg} ${hoverbg} rounded-full py-4 px-6 group h-16 gap-x-4 hover:text-white`}>
            <img src="/images/technologies (13).svg" alt="" className='h-8'/>
            <div className={` items-start inline-flex flex-col border-none transition-all duration-300  text-${color} hover:text-${hovercolor} font-normal text-lg bg-none`}>

                <span className='-translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300'>{text}</span>
                <span className='-translate-y-6 opacity-100 group-hover:opacity-0 group-hover:translate-y-5 transition-all duration-300'>{text}</span>
            </div>
        </div>
    )
}

export default ButtonwithImage