import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 bordger-orange-500'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            7+ years experience as a DevOps Engineer
                        </p>
                    </div>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            Hobbies: Traveling | Football | Basketball | Tennis | Boardgames | TV Series
                        </p>
                    </div>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            3+ years experience as a DevOps Lead
                        </p>
                    </div>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            📍 Bucharest, Romania
                        </p>
                    </div>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            Bachelor's and Master's Degrees in Computer Science
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About