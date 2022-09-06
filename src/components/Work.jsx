import React from 'react'
import tf_module from '../assets/tf-module.png'
import med1 from '../assets/med1.png'
import med2 from '../assets/med2.png'
import tfc from '../assets/tfc.png'
import aks from '../assets/aks.png'
import helm from '../assets/helm.png'

function Work() {
    return (
        <div name='work' className='w-full md:h-screen text-[#0a192f] bg-[#67d6ab] items-center'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline'>Recent Work</p>
                </div>
                <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-x-4 gap-y-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://github.com/flavius-dinu/terraform-module-template">
                            <img className="w-full hover:scale-95" src={tf_module} alt="tf-mod-template" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Terraform Module Template</div>
                            <p className="text-gray-700 text-base">
                                This template will help you get started with building Terraform modules, without having to copy paste
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraform</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#githubactions</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pre-commit</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://medium.com/@flaviuscdinu93/building-reusable-terraform-modules-9e90aa4eef31">
                            <img className="w-full hover:scale-95" src={med1} alt="tfm1" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Building Reusable Terraform Modules</div>
                            <p className="text-gray-700 text-base">
                                In this article, I am describing the best practices that I am using for building Terraform Modules.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraform</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#githubactions</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pre-commit</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://github.com/flavius-dinu/terraform-az-aks">
                            <img className="w-full hover:scale-95" src={aks} alt="azaks" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Terraform AKS Module</div>
                            <p className="text-gray-700 text-base">
                                Azure AKS Terraform Module that can be used to deploy a Kubernetes Cluster inside of Azure
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraform</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#azure</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kubernetes</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://medium.com/@flaviuscdinu93/building-reusable-terraform-modules-part-2-c7cafaeeee59">
                            <img className="w-full hover:scale-95" src={med2} alt="tfm2" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Building Reusable Terraform Modules - 2</div>
                            <p className="text-gray-700 text-base">
                                Step by step walkthrough for building reusable terraform modules: Azure Kubernetes + Helm Release
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraform</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#helm</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kubernetes</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://github.com/flavius-dinu/terraform-helm-release">
                            <img className="w-full hover:scale-95" src={helm} alt="helm" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Terraform Helm Release</div>
                            <p className="text-gray-700 text-base">
                                Helm Release Terraform Module for deploying Helm Charts in Kubernetes clusters.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraform</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#helm</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#helmchart</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="https://github.com/flavius-dinu/terraform-module-template">
                            <img className="w-full hover:scale-95" src={tfc} alt="terraformcloud" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Reasons to consider Terraform Cloud</div>
                            <p className="text-gray-700 text-base">
                                Reasons to consider Terraform Cloud for your organisation based on features and size
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraform</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terraformcloud</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#spacelift</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Work;