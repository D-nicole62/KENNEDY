import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";

export default function Certificates() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Awards and Certificates</h2>
                <h3 className="text-1xl font-semibold mb-4 text-gray-700">Awards and Certificates</h3>
                <p className="mb-4 text-gray-600 text-base md:text-lg">
                    COAZ recognizes excellence among clinical officers in Zambia through our awards and certification
                    programs. Explore how we honor outstanding achievements and promote continuous professional
                    development within our community </p>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Most Hard-Working Clinical Offer Award
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Others coming soon
                    </p>
                </div>
            </section>
        </div>
    )
}