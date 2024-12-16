import React from 'react'
import { Button } from './button'

const ButtonwithImage = ({ text, color, hovercolor, bg, hoverbg, img }) => {
    return (
        <div className={`flex ${bg} ${hoverbg} rounded-full py-2 px-6 group h-12 gap-x-4 hover:text-white hover:shadow-2xl`}>
            <img src={`/images/Technologies/${img}.svg`} alt="" className='h-8 transition duration-300 ease-in-out transform group-hover:invert group-hover:brightness-200' />

            <div className={`items-start inline-flex flex-col border-none transition-all duration-300 text-${color} hover:text-${hovercolor} font-normal text-lg bg-none`}>
                <span className='text-black group-hover:text-white -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 '>{text}</span>
                <span className='text-black -translate-y-7 opacity-100 group-hover:opacity-0 group-hover:text-white group-hover:translate-y-5 transition-all duration-300'>{text}</span>
            </div>
        </div>
    )
}

export default ButtonwithImage