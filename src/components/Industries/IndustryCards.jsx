import React from 'react'

const IndustryCards = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {data.map((item, index) => (
                <div className="col-span-1 border border-gray-300 rounded-3xl p-7 text-black transition-all duration-500" key={index} id='card-shadow'>
                    <h1 className='text-3xl font-semibold'>{item.head}</h1>
                    <p className='text-xl mt-4'>{item.para}</p>
                    <div className="flex-auto space-x-2 space-y-2 mt-10" >
                        {item.tags.map((tag, index)=>(
                            <button className='hover:border-gray-800 cursor-default bg-transparent border-gray-800 rounded-full px-3 py-1 font-normal'>
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <style jsx>
            {`
                #card-shadow:hover{
                box-shadow: RGB(46 208 110) 1px 2px 5px, RGB(46 208 110) 0px 0px 0px 3px;
                }
            `}
            </style>
        </div>
    )
}

export default IndustryCards