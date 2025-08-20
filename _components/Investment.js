import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";

export default function Investment() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">National Investment Board</h2>
                <h3 className="text-1xl font-semibold mb-4 text-gray-700">About</h3>
                <p className="mb-4 text-gray-600 text-base md:text-lg">Presides over investments of the association and
                    other related matters</p>
                <h4 className="text-1xl font-semibold mb-4 text-gray-700">Composition</h4>

                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        The Chairperson
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Vice Chairperson
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Board Member 1
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Board Member 2
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Board Member 3
                    </p>
                </div>
            </section>
        </div>
    )
}