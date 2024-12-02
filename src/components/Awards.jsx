import React from 'react'
import AwardContent from './Awards/AwardContent'

const Awards = () => {
    return (
        <div className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10 py-40">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-20">
                <h1 className="text-5xl font-bold text-white">Our awards and <span className='text-primary'> recognitions.</span></h1>
                <p className='text-white text-xl mt-12 w-2/3'>Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!</p>
            </div>

            <AwardContent/>
        </div>
    )
}

export default Awards