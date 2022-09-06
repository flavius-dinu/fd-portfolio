import React from "react";
import { GoZap } from "react-icons/go";


const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#67d6ab]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f]">Flavius Dinu</h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0a192f]">DevOps | Cloud Engineer 🚀</h2>
                <p className="text-[#0a192f] py-4 max-w-[700px]">
                    Passionate software engineer with Infrastructure as Code mindset, having expertise in cloud technologies, devops tooling, scripting and ocasionally web development
                </p>
                <div>
                    <button className="text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f68742] hover:border-[#f68742] border-[#0a192f]">View Work
                        <span className="group-hover:rotate-180 duration-300">
                            <GoZap className="" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home