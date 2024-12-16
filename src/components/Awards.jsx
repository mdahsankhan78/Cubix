import React from 'react'
import AwardContent from './Awards/AwardContent'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs"
import { Play } from 'lucide-react'

const Awards = () => {
    return (
        <div className="w-full bg-black dark:bg-neutral-950 font-sans py-40">
            <div className="max-w-7xl px-8 mx-auto mb-20">
                <h1 className="text-5xl font-bold text-white">Our awards and <span className='text-primary'> recognitions.</span></h1>
                <p className='text-white text-xl mt-12 w-2/3'>Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!</p>
            </div>

            <AwardContent />


            <div className="mb-20 px-8">
                <Tabs defaultValue='recommendations'>
                    <div className="flex">
                        <div>
                            <h1 className="text-5xl font-bold inline-flex gap-x-2 text-white">Our <span className='text-primary'> hightlights.</span></h1>
                            <TabsList className='mt-10'>
                                <TabsTrigger value='recommendations' className='data-[state=active]:bg-gradient-to-r from-[#153d25] to-black text-white'>Recommendations</TabsTrigger>
                                <TabsTrigger value='meet' className='data-[state=active]:bg-gradient-to-r from-[#153d25] to-black text-white'>Meet Up</TabsTrigger>
                                <TabsTrigger value='life' className='data-[state=active]:bg-gradient-to-r from-[#153d25] to-black text-white'>Life at Cubix</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value='recommendations'>
                            <div className="flex items-center gap-x-16 h-full pr-20 text-white text-2xl">
                                <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights1.webp" className='rounded-3xl opacity-60' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                    <p className='mt-4'>John Boccuzzi spoke about the entrepreneurial journey of Mr...</p>
                                </div>

                                <div className="flex flex-col gap-y-8 items-center">
                                    <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights2.webp" className='rounded-3xl opacity-60 max-w-xs' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                        <p className='mt-4'>Cubix Reviews & Testimonials Greg...</p>
                                    </div>
                                    <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights3.webp" className='rounded-3xl opacity-60 max-w-xs' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                        <p className='mt-4'>Cubix Reviews & Testimonials - Karen Agresti...</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value='meet'>
                            <div className="flex items-center gap-x-16 h-full pr-20 text-white text-2xl">
                                <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights4.webp" className='rounded-3xl opacity-60' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                    <p className='mt-4'>Brand of the year Award.</p>
                                </div>

                                <div className="flex flex-col gap-y-8 items-center">
                                    <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights5.webp" className='rounded-3xl opacity-60 max-w-xs' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                        <p className='mt-4'>Salman Lakhani's Interview For Ideamensch.</p>
                                    </div>
                                    <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights6.webp" className='rounded-3xl opacity-60 max-w-xs' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                        <p className='mt-4'>Cubix at Startup Grind.</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value='life'>
                            <div className="flex items-center gap-x-16 h-full pr-20 text-white text-2xl">
                                <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights7.webp" className='rounded-3xl opacity-60' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                    <p className='mt-4'>Women's Day 2022.</p>
                                </div>

                                <div className="flex flex-col gap-y-8 items-center">
                                    <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights8.webp" className='rounded-3xl opacity-60 max-w-xs' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                        <p className='mt-4'>Equality Brings Innovation and Opportunity to the...</p>
                                    </div>
                                    <div className="card">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/images/highlights9.webp" className='rounded-3xl opacity-60 max-w-xs' alt="" />
                                        <div className="h-16 w-16 flex items-center justify-center bg-white opacity-60 rounded-full absolute z-10 text-black">
                                            <Play/>
                                        </div>
                                    </div>
                                        <p className='mt-4'>Celebrating International Women's Day 2021.</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Awards