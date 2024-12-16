import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

const Cards = () => {
    const [scroll1, setScroll1] = useState(0);
    const [scroll2, setScroll2] = useState(0);
    const [scroll3, setScroll3] = useState(0);
    const [scroll4, setScroll4] = useState(0);

    const getBackgroundPosition1 = (offset) => {
        return `center ${-(scroll1 * offset)}px`;
    };

    const getBackgroundPosition2 = (offset) => {
        return `center ${-(scroll2 * offset)}px`;
    };

    const getBackgroundPosition3 = (offset) => {
        return `center ${-(scroll3 * offset)}px`;
    };

    const getBackgroundPosition4 = (offset) => {
        return `center ${-(scroll4 * offset)}px`;
    };

    useEffect(() => {
        const handleScroll = () => {
            setScroll1(window.scrollY);
            setScroll2(window.scrollY);
            setScroll3(window.scrollY);
            setScroll4(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-24 gap-24">
                {/* Card 1 */}
                <InView
                    triggerOnce={false}
                    onChange={(inView) => {
                        if (inView) {
                            setScroll1(window.scrollY);
                        }
                    }}>
                    <div className="col-span-1">
                        <div
                            className='bg-[url(/images/card1.webp)] bg-cover bg-center bg-no-repeat h-screen rounded-3xl'
                            style={{
                                backgroundPosition: getBackgroundPosition1(0.1)
                            }}
                        >
                        </div>
                        <div className="my-4 space-y-4">
                            <img src="/images/card-imgs1.webp" className='h-16' alt="" />
                            <h1 className='text-black text-2xl hover:underline font-semibold'>A Social Networking for Pets and Pet Owners</h1>
                            <h1 className='text-black text-xl '>Goobr is a trailblazing social networking app dedicated to pets and their owners.</h1>
                        </div>
                    </div>
                </InView>

                {/* Card 2 */}
                <InView
                    triggerOnce={false}
                    onChange={(inView) => {
                        if (inView) {
                            setScroll2(window.scrollY);
                        }
                    }}
                >
                    <div className="col-span-1 translate-y-32">
                        <div
                            className='bg-[url(/images/card2.webp)] bg-cover bg-center bg-no-repeat h-screen rounded-3xl'
                            style={{
                                backgroundPosition: getBackgroundPosition2(0.1)
                            }}
                        >
                        </div>
                        <div className="my-4 space-y-4">
                            <img src="/images/card-imgs2.webp" className='h-16' alt="" />
                            <h1 className='text-black text-2xl hover:underline font-semibold'>Official Website of Tulsa Airport</h1>
                            <h1 className='text-black text-xl '>Tulsa Airport, a prominent name in aviation, sought Cubix’s expertise to enhance its digital presence.</h1>
                        </div>
                    </div>
                </InView>

                {/* Card 3 */}
                <InView
                    triggerOnce={false}
                    onChange={(inView) => {
                        if (inView) {
                            setScroll3(window.scrollY);
                        }
                    }}
                >
                    <div className="col-span-1">
                        <div
                            className='bg-[url(/images/card3.webp)] bg-cover bg-center bg-no-repeat h-screen rounded-3xl'
                            style={{
                                backgroundPosition: getBackgroundPosition3(0.1)
                            }}
                        >
                        </div>
                        <div className="my-4 space-y-4">
                            <img src="/images/card-imgs3.webp" className='h-16' alt="" />
                            <h1 className='text-black text-2xl hover:underline font-semibold'>A Social Networking and Event Management App</h1>
                            <h1 className='text-black text-xl '>App designed for young partygoers, specializes in facilitating the organization & discovery of house parties.</h1>
                        </div>
                    </div>
                </InView>

                {/* Card 4 */}
                <InView
                    triggerOnce={false}
                    onChange={(inView) => {
                        if (inView) {
                            setScroll4(window.scrollY);
                        }
                    }}
                >
                    <div className="col-span-1 translate-y-32">
                        <div
                            className='bg-[url(/images/card4.webp)] bg-cover bg-center bg-no-repeat h-screen rounded-3xl'
                            style={{
                                backgroundPosition: getBackgroundPosition4(0.1)
                            }}
                        >
                        </div>
                        <div className="my-4 space-y-4">
                            <img src="/images/card-imgs4.webp" className='h-16' alt="" />
                            <h1 className='text-black text-2xl hover:underline font-semibold'>Multiplayer Tower Defense Game</h1>
                            <h1 className='text-black text-xl '>A PvP play-and-earn mobile tower defense game where players can own, trade, and use in-game NFT assets.</h1>
                        </div>
                    </div>
                </InView>
            </div>
        </div>
    );
};

export default Cards;
