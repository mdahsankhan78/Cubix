import { Dot } from 'lucide-react'
import React from 'react'

const BlogCards = () => {
    return (
        <>
            <div className="flex gap-x-8 mt-20">
                <div className="card flex flex-col gap-y-4">
                    <div className="relative overflow-hidden">
                        <div className='rounded-3xl relative overflow-hidden' data-aos='slide-right' data-aos-duration='1000'>
                            <img src="/images/blogs1.webp" alt="" className='rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <h5 className='text-black text-xl'>eCommerce</h5>
                        <Dot />
                        <p>27 Sep, 2024</p>
                    </div>
                    <p className='text-2xl hover:underline'>Is Your eCommerce Platform Optimized for Peak Seasons?</p>
                </div>
                <div className="card flex flex-col gap-y-4 w-[120%] justify-end">
                    <div className="relative overflow-hidden">
                        <div className='rounded-3xl relative overflow-hidden mt-20' data-aos='slide-right' data-aos-duration='1000'>
                            <img src="/images/blogs2.webp" alt="" className='rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <h5 className='text-black text-xl'>App Development</h5>
                        <Dot />
                        <p>26 Sep, 2024</p>
                    </div>
                    <p className='text-2xl hover:underline'>Proven Strategies to Improve User Retention in Streaming Apps</p>
                </div>
                <div className="card flex flex-col gap-y-4 w-[120%]">
                    <div className="relative overflow-hidden">
                        <div className='rounded-3xl relative overflow-hidden' data-aos='slide-right' data-aos-duration='1000'>
                            <img src="/images/blogs3.webp" alt="" className='rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <h5 className='text-black text-xl'>Web Development</h5>
                        <Dot />
                        <p>25 Sep, 2024</p>
                    </div>
                    <p className='text-2xl hover:underline'>Why Experts Use Node.js With React.js For Web Development?</p>
                </div>
            </div>

            <div className="flex gap-x-8 mt-20">
                <div className="card flex flex-col gap-y-4 w-[120%]">
                    <div className="relative overflow-hidden">
                        <div className='rounded-3xl relative overflow-hidden' data-aos='slide-right' data-aos-duration='1000'>
                            <img src="/images/blogs4.webp" alt="" className='rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <h5 className='text-black text-xl'>eCommerce</h5>
                        <Dot />
                        <p>23 Sep, 2024</p>
                    </div>
                    <p className='text-2xl hover:underline'>How to Create An Online Marketplace Like eBay</p>
                </div>
                <div className="card flex flex-col gap-y-4 w-[120%] justify-end">
                    <div className="relative overflow-hidden">
                        <div className='rounded-3xl relative overflow-hidden mt-20' data-aos='slide-right' data-aos-duration='1000'>
                            <img src="/images/blogs5.webp" alt="" className='rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <h5 className='text-black text-xl'>App Development</h5>
                        <Dot />
                        <p>20 Sep, 2024</p>
                    </div>
                    <p className='text-2xl hover:underline'>Swift vs Dart: What to Choose For iOS App Development?</p>
                </div>
                <div className="card flex flex-col gap-y-4">
                    <div className="relative overflow-hidden">
                        <div className='rounded-3xl relative overflow-hidden' data-aos='slide-right' data-aos-duration='1000'>
                            <img src="/images/blogs6.webp" alt="" className='rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <h5 className='text-black text-xl'>App Development</h5>
                        <Dot />
                        <p>19 Sep, 2024</p>
                    </div>
                    <p className='text-2xl hover:underline'>10 App Categories that Will Dominate 2025 and Beyond</p>
                </div>
            </div>
        </>
    )
}

export default BlogCards