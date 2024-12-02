import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-auto overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/images/video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

                {/* Content */}
                <div className="flex items-center px-[20rem] py-16 transform text-white h-full mt-10">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-4">We are a <span className='text-primary'>Software
                            Development </span>
                             Company.</h1>
                        <p className="text-xl md:text-3xl mb-4">We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero