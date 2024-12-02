import React from 'react'
import IndustryContent from './Industries/IndustryContent'

const Industries = () => {
    return (
        <div className='my-[10rem] mx-16'>
            <div className='w-2/3'>
                <h1 className='text-5xl font-bold text-black'>Industries we serve.</h1>
                <p className='text-xl text-black py-10'>With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.</p>
            </div>

            <IndustryContent/>
        </div>
    )
}

export default Industries