import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#67d6ab] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/43733da8-8c3c-456c-89d8-912054e2fae7" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0a192f] text-[#0a192f]'>Contact</p>
                    <p className='text-[#0a192f] py-4'>Submit the form below or contact me on any other social media platform 🐳</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' />
                <button className='text-white border-2 hover:bg-orange-500 hover:border-orange-500 bg-[#0a192f]  border-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>
        </div>
    )
}

export default Contact