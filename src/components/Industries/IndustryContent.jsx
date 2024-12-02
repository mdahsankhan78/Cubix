import React from 'react'
import IndustryCards from './IndustryCards';

const IndustryContent = () => {
    const data = [
        {
            head: 'Automotive',
            tags: ['Fleet Management','Telematics','Dealer Portal','Inventory','CRM'],
            para: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
        },
        {
            head: 'Automotive',
            tags: ['Fleet Management','Telematics','Dealer Portal','Inventory','CRM'],
            para: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
        },
        {
            head: 'Automotive',
            tags: ['Fleet Management','Telematics','Dealer Portal','Inventory','CRM'],
            para: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
        },
        {
            head: 'Automotive',
            tags: ['Fleet Management','Telematics','Dealer Portal','Inventory','CRM'],
            para: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
        },
        {
            head: 'Automotive',
            tags: ['Fleet Management','Telematics','Dealer Portal','Inventory','CRM'],
            para: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
        },
        {
            head: 'Automotive',
            tags: ['Fleet Management','Telematics','Dealer Portal','Inventory','CRM'],
            para: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
        },
    ];
    return (
        <IndustryCards data={data}/>    
    )
}

export default IndustryContent