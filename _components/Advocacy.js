import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";
import {FaVolumeUp} from "react-icons/fa";


export default function Advocacy() {

    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Advocacy in Health Care</h2>


                <p className="flex items-center">
                    <FaVolumeUp size={16} className="text-gray-600"/>
                    <span className="ml-2">JUDICIAL ADVOCACY</span>
                </p>
                <p className="flex items-center">
                    <FaVolumeUp size={16} className="text-gray-600"/>
                    <span className="ml-2">HUMAN RESOURCES FOR HEALTH ADVOCACY</span>
                </p>
                <p className="flex items-center">
                    <FaVolumeUp size={16} className="text-gray-600"/>
                    <span className="ml-2">LOCAL GOVERNANCE ADVOCACY</span>
                </p>
                <p className="flex items-center">
                    <FaVolumeUp size={16} className="text-gray-600"/>
                    <span className="ml-2">STATE ADVOCACY</span>
                </p>
                <p className="flex items-center">
                    <FaVolumeUp size={16} className="text-gray-600"/>
                    <span className="ml-2">PUBLIC HEALTH ADVOCACY</span>
                </p>
                <p className="flex items-center">
                    <FaVolumeUp size={16} className="text-gray-600"/>
                    <span className="ml-2">ACCESS TO HEALTH CARE</span>
                </p>

                <h3 className="text-2xl font-semibold space-x-6 pt-2 mb-6 text-gray-700">STATE ADVOCACY</h3>

                <p className="ml-2 text-gray-600 mb-2 text-sm md:text-base">
                    At the state level, the COAZ shapes the policy of influential national policy making, partners with
                    outside experts and stakeholder groups and influences the enactment and/or defeat of state
                    legislation and regulation
                </p>
                <h2 className="text-1xl font-semibold space-x-10 mb-4 text-gray-700">Our State legislative and
                    regulatory priorities</h2>

                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legislative Amendment to the medicines and Allied substances act
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legislative amendment to the Health Professions council of Zambia to reflect communities of
                        practice, that considers of clinical practitioners community of practice
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legislative amendment to the food and nutrition act of 2020
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legislative enactment of the National Health services act
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legislative enactment of the Clinical Officers bill
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legislative enactment of Affordable Care Act
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Opening regulatory documents for Clinical officer specialists with HPCZ
                    </p>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">ACCESS TO HEALTH CARE</h2>
                <p className="ml-2 text-gray-600 text-sm md:text-base">The COAZ works tirelessly to preserve health care
                    access and coverage for Zambians across the nation, especially the country’s most vulnerable and
                    underserved patient populations</p>
                <section>
                <h2 className="text-1xl font-semibold mb-4 text-gray-700">Our current focus on access to Health care include:</h2>
                </section>
                <section>
                <div className="flex items-start mb-6">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        National health insurance (NHIMA) coverage for all Zambians
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Freedom of choice
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Freedom of practice for clinical officers to increase universal access for patients
                    </p>
                </div>
                </section>
            </section>
        </div>
    )
}