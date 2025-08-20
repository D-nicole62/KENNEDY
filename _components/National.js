import {FaRegCircleDot} from "react-icons/fa6";
import React from 'react';

export default function National() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">National Executive Committee</h2>
                <h3 className="text-1xl font-semibold mb-4 text-gray-700">About</h3>
                <p className="mb-4 text-gray-600 text-base md:text-lg">The National Executive Committee (NEC) is the governing body of the Clinical Officers Association
                        of Zambia. Responsible for decision making, formulate and implement policies, and oversee the
                        affairs of the Association
                        Has Authority to establish branches, committees and defend the association, members and the
                        profession of clinical officer and its division at any level in Zambia and in signatory
                        jurisdiction</p>
                    <h4 className="text-1xl font-semibold mb-4 text-gray-700">Composition</h4>

                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Hon President
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Hon Vice President
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Hon Secretary General
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Hon Deputy Secretary General
                        </p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                        <p className="ml-2 text-gray-600 text-sm md:text-base">
                            Hon National Treasurer
                        </p>
                    </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Hon National Publicity
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Nominated Members
                    </p>
                </div>
            </section>
        </div>
)
}
