import React from 'react'
import CustomButton from './ui/CustomButton'
import { Dot } from 'lucide-react'

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center pb-20 gap-y-4">
                <p className='text-xl'>Pull the Trigger!</p>
                <h1 className='font-bold text-7xl w-[50%] text-center'>Let’s bring your vision to life.</h1>
                <CustomButton color={'white'} bg={'black'} text={'Get Started'} className='px-10 py-6 mt-4' />
            </div>
            <div className="bg-black px-8 py-12 text-white ">
                <div className="grid grid-cols-5 gap-x-4">
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-gray-500 flex items-center gap-x-3 mb-2'><div className="bg-primary rounded-full h-2 w-2"></div> Company</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>About Us</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Testimonials</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Process</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Contact</li>
                    </ul>

                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-gray-500 flex items-center gap-x-3 mb-2'><div className="bg-primary rounded-full h-2 w-2"></div> Resources</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Blog</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Events</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Press Release</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Work</li>
                    </ul>

                    <ul className='flex flex-col gap-y-2 col-span-2'>
                        <li className='text-gray-500 flex items-center gap-x-3 mb-2'><div className="bg-primary rounded-full h-2 w-2"></div> Services</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Mobile App</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Game Development</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Blockchain Development</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>AI Development</li>
                    </ul>

                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-gray-500 flex items-center gap-x-3 mb-2'><div className="bg-primary rounded-full h-2 w-2"></div> Insights</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>University</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Careers</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Manifesto</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>Culture Book</li>
                    </ul>
                </div>
                <hr className='border-gray-800 my-20' />
                <div className="grid grid-cols-4 gap-x-4">
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-gray-500 flex items-center gap-x-3 mb-2'><div className="bg-primary rounded-full h-2 w-2"></div> Locations</li>
                        <li className='text-2xl'>West Palm Beach</li>
                        <p className='text-gray-500 w-2/3'>560 Village Blvd., Suite 120 #3,
                            West Palm Beach, FL-33409,
                            United States</p>
                    </ul>

                    <ul className='flex flex-col gap-y-2 mt-10'>
                        <li className='text-2xl'>Manchester</li>
                        <p className='text-gray-500 w-2/3'>73 Meadway, Bramhall
                            Stockport, Manchester - SK7 1LX,
                            United Kingdom</p>
                    </ul>

                    <ul className='flex flex-col gap-y-2 mt-10'>
                        <li className='text-2xl'>Dubai</li>
                        <p className='text-gray-500 w-2/3'>Building 11, Level 7, Bay Square,
                            Business Bay, Dubai - 23304,
                            United Arab Emirates</p>
                    </ul>

                    <ul className='flex flex-col gap-y-2 mt-10'>
                        <li className='text-2xl'>Karachi</li>
                        <p className='text-gray-500 w-2/3'>54C, Kashmir Road, Block 2,
                            PECHS, Karachi, Sindh - 75400,
                            Pakistan</p>
                    </ul>
                </div>
                <hr className='border-gray-800 my-20' />
                <div className="grid grid-cols-5 gap-x-4">
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-gray-500 flex items-center gap-x-3 mb-2'><div className="bg-primary rounded-full h-2 w-2"></div> Contact</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>866-978-2220</li>
                        <li className='text-2xl cursor-pointer hover:text-primary'>info@cubix.co</li>
                    </ul>

                    <ul className='flex flex-col gap-y-4 col-span-3 items-center justify-end text-center'>
                        <img src="/images/logo.svg" className='h-6' alt="" />
                        <p className='text-gray-500 w-2/3'>© 2024 Cubix. All Rights Reserved</p>
                        <p className='text-gray-500 w-2/3 flex items-center gap-x-2 justify-center'>Content protected by DMCA.com
                            <img src="/images/footer1.png" className='h-6' alt="" />
                        </p>
                    </ul>

                    <ul className='flex flex-col gap-y-3 items-end justify-end'>
                        <div className="flex gap-x-4">
                            <img src="/images/footer-icons (4).svg" alt="" />
                            <img src="/images/footer-icons (3).svg" alt="" />
                            <img src="/images/footer-icons (2).svg" alt="" />
                            <img src="/images/footer-icons (1).svg" alt="" />
                        </div>
                        <p className='text-gray-500 whitespace-nowrap'>
                            <span className='hover:text-primary cursor-pointer'>Privacy Policy</span> | <span className='hover:text-primary cursor-pointer'>Terms & Conditions</span>
                        </p>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer