import React from 'react'
import TechnologiesTabs from './Technologies/TechnologiesTabs'

const Technologies = () => {
    return (
        <div className='my-60 mx-8'>
            <div className='w-2/3'>
                <h1 className='text-5xl font-bold text-black'>Technologies we use.</h1>
                <p className='text-lg text-black py-10'>Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.</p>
            </div>


            <TechnologiesTabs/>
        </div>
    )
}

export default Technologies