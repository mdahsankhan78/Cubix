import { ArrowRight } from 'lucide-react'
import React from 'react'
import BlogCards from './Blogs/BlogCards'

const Blogs = () => {
    return (
        <div className='my-[10rem] mx-8'>
            <div className='flex items-center justify-between'>
                <h1 className='text-5xl font-bold text-black'>Our recent blogs.</h1>
                <p className='flex items-center group gap-x-2 cursor-pointer'>
                    <span className='text-xl group-hover:-translate-x-2 transition-all duration-300'>View All</span>
                    <ArrowRight className='group-hover:translate-x-2 transition-all duration-300 group-hover:text-primary'/>
                </p>
            </div>

            <BlogCards/>
        </div>
    )
}

export default Blogs