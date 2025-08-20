import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";

export default function publicHealth (){

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Public Health and Research</h2>
                <h3 className="text-1xl font-semibold mb-4 text-gray-700">About</h3>
                <p className="mb-4 text-gray-600 text-base md:text-lg">
                    A committee of the executive that is charged with advancing scientific discovery, research excellence, and public health impact. At the intersection of inquiry and action, the committee has a mandate that encompasses the promotion of rigorous scientific inquiry, the dissemination of evidence-based knowledge, and the translation of research findings into policies and practices that promote health equity and societal well-being
                    Committed to scientific integrity, innovation, and collaboration. Strives to leverage the collective expertise and influence of the profession to address pressing health challenges and drive meaningful change at local, national, and global levels
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