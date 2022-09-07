import React from 'react'

const Services = () => {
    return (
        <div name='services' className='w-full bg-[#0a192f] text-[#67d6ab] items-center'>
            <div className='max-w-[1000px] overflow-x-scroll mx-auto p-4 lg:flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline'>Services</p>
                </div>

                <div className="grid grid-flow-col grid-rows-3 md:grid-rows-1 md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4">
                    <div className="block p-6 max-w-sm overflow-x-scroll shadow-lg border rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DevOps | Cloud Engineering | Scripting</h5>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">My top skills are related to the following technologies:</p>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">Python</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Terraform</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Terraform Cloud</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Github Actions</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">AWS</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Azure</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">OCI</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Docker</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Kubernetes</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Helm</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Ansible</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Chef</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Javascript</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Ruby</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Bash</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Powershell</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Golang</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Typescript</p>
                    </div>
                    <div className="block p-6 max-w-sm overflow-x-scroll shadow-lg border rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tutoring | Mentoring | Technical Writing</h5>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">I have a great experience with tutoring as I've even prepared people become devops engineers that had totally different careers (photography, law, economics).</p>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">In my previous roles, being in technical management, I was in charge of preparing career plans, trainings and helping the teams grow both from a technical standpoint and also taught them how to better promote themselves. </p>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">Blogging is one of my hobbies and writing about what I know best and sharing that knowledge is a great passion. </p>
                    </div>
                    <div className="block p-6 max-w-sm overflow-x-scroll shadow-lg border rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 className="text-lg font-semibold text-white">Done</h3>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none">Step 4</time>
                                <h3 className="text-lg font-semibold text-white">Finish Development</h3>
                                <p className="mb-4 text-base font-normal text-gray-500">All developed code will come in with thorough documentation, but knowledge transfer sessions will be provided also. In this step we should assess if development artifacts are accurate.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none">Step 3</time>
                                <h3 className="text-lg font-semibold text-white">Start Development</h3>
                                <p className="mb-4 text-base font-normal text-gray-500">In this step the automation development starts. Weekly syncs are highly encouraged in order to make sure that nothing is going astray.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none">Step 2</time>
                                <h3 className="text-lg font-semibold text-white">Plan</h3>
                                <p className="text-base font-normal text-gray-500">After we decide that I am a good match for your project, we should always plan ahead the work that has to be done, in that way, we will have a clear picture about estimating the delivery time.</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none">Step 1</time>
                                <h3 className="text-lg font-semibold text-white">Contact Me and Discuss Requirements</h3>
                                <p className="text-base font-normal text-gray-500">The most important part is to understand if I am match for your project.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services