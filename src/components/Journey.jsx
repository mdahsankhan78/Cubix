import React, { useState } from 'react'
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import SliderJourney from './Journey/Slider';

const Journey = () => {
    const [startCounting, setStartCounting] = useState(false);
    return (
        <div className='my-[15rem] mx-8'>
            <div className='w-2/3'>
                <h1 className='text-5xl font-bold text-black'>our journey of building success.</h1>
                <p className='text-lg text-black py-10'>We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.</p>
            </div>

            <InView
                triggerOnce={true}  // Only trigger once when the element comes into view
                onChange={(inView) => {
                    if (inView) {
                        setStartCounting(true);  // Start counting when the element is in view
                    }
                }}>
                <div className="grid grid-cols-3 gap-x-4 my-16">
                    <div className='group space-y-2'>
                        <h1 className='group-hover:text-primary text-6xl font-semibold'>{startCounting && (<CountUp end={1300} duration={4} />)}+</h1>
                        <p className='group-hover:underline text-black text-2xl'>Completed Projects</p>
                    </div>
                    <div className='group space-y-2'>
                        <h1 className='group-hover:text-primary text-6xl font-semibold'>{startCounting && (<CountUp end={350} duration={4} />)}+</h1>
                        <p className='group-hover:underline text-black text-2xl'>Talented Cubixians</p>
                    </div>
                    <div className='group space-y-2'>
                        <h1 className='group-hover:text-primary text-6xl font-semibold'>{startCounting && (<CountUp end={600} duration={4} />)}+</h1>
                        <p className='group-hover:underline text-black text-2xl'>Satisfied Clients</p>
                    </div>
                </div>
            </InView>

            <SliderJourney/>
        </div>
    )
}

export default Journey