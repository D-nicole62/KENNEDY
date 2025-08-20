import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";

export default function Health (){
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Container with max width for large screens, centered */}

                {/* Eligibility Criteria */}
                <section className="mb-12">
                    <h2 className= "text-2xl font-semibold mb-4 text-gray-700">Health Services</h2>
                    <h3 className="text-1xl font-semibold mb-4 text-gray-700">About</h3>
                    <p className="mb-4 text-gray-600 text-base md:text-lg">
                        A committee of the executive that is a strategic driver for optimizing healthcare delivery, enhancing quality of care, and promoting equitable access to services
                        The committee focuses on identifying systemic barriers and inefficiencies, formulating evidence-based strategies for service improvement, and advocating for policies and initiatives that prioritize patient-centered care, health equity, and population health outcomes
                        Through collaboration, innovation, and advocacy, the committee endeavors to shape a healthcare landscape that ensures high-quality, accessible, and equitable care for all individuals and communities                    </p>
                    <h4 className="text-1xl font-semibold mb-4 text-gray-700">Composition</h4>

                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            The Chairperson
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Vice Chairperson
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Board Member 1
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Board Member 2
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Board Member 3
                        </p>
                    </div>
                </section>
            </div>
        )
}