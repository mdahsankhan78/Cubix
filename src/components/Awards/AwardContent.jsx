import React from 'react'
import AwardCards from './AwardCards'

const AwardContent = () => {
    const data = [
        {
            rate: '4.9',
            img: 'award1.svg',
            para: 'Ranked among leading app development service providers 2024'
        },
        {
            rate: '4.9',
            img: 'award2.svg',
            para: 'Ranked among leading app development service providers 2024'
        },
        {
            rate: '4.9',
            img: 'award3.svg',
            para: 'Ranked among leading app development service providers 2024'
        },
        {
            rate: '4.9',
            img: 'award4.svg',
            para: 'Ranked among leading app development service providers 2024'
        },
    ]
    return (
        <AwardCards data={data}/>
    )
}

export default AwardContent