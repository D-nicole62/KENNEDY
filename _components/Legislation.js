import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";

export default function Legislation (){
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className= "text-2xl font-semibold mb-4 text-gray-700">Legislation and Judicial</h2>
                <h3 className="text-1xl font-semibold mb-4 text-gray-700">About</h3>
                <p className="mb-4 text-gray-600 text-base md:text-lg">
                    The principal advocate and strategist for the professions policy agenda, legislative priorities, and legal interests. The Committee’s mandate is to anticipate, analyze, and influence policy and legislative developments, champion initiatives that advance the interests and welfare of the profession and to provide expert guidance and representation in legal matters affecting members
                </p>
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