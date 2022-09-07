import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'

const Social = () => {
    return (
        <div>
            <footer class="md:hidden p-4 bg-white shadow sm:p-1 dark:bg-gray-800">
                <ul class="flex mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:space-x-10">
                    <li>
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            <a href="#" class="hover:underline">© Flavius Dinu</a>
                        </span>
                    </li>
                    <li>
                        <a className='text-gray-300'
                            href='https://www.linkedin.com/in/flaviuscristiandinu/'>
                            <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li>
                        <a className='text-gray-300'
                            href='https://github.com/flavius-dinu'>
                            <FaGithub size={25} />
                        </a>
                    </li>
                    <li>
                        <a className='text-gray-300'
                            href='https://medium.com/@flaviuscdinu93'>
                            <FaMedium size={25} />
                        </a>
                    </li>
                    <li>
                        <a className='text-gray-300'
                            href='https://twitter.com/flaviuscdinu'>
                            <FaTwitter size={25} />
                        </a>
                    </li>
                    <li>
                        <a className='text-gray-300'
                            href='https://www.instagram.com/flaviuscdinu/'>
                            <FaInstagram size={25} />
                        </a>
                    </li>
                </ul>
            </footer>
        </div >
    )
}

export default Social