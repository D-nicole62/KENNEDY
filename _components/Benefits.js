import React from 'react';
import {FaRegCircleDot} from "react-icons/fa6";


export default function Benefits() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Member Benefits</h2>
                <p className="mb-4 text-gray-600 text-base md:text-lg">

                    Joining the nation’s largest Health professional Organization in Zambia has considerable benefits.
                    In addition to opportunities to shape the future of health care, COAZ membership benefits include
                    exclusive access to savings and resources designed to enhance the personal and professional lives of
                    Members
                </p>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Legal Representation – legal@coaz.org
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0"/>
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Loan & Financial Services – Coming soon
                    </p>
                </div>
            </section>
<section>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                <li>
                    Exclusive access to savings on healthcare-related products and services – coming soon
                </li>
                <li>
                    Resources and support tailored to enhance personal and professional development
                </li>
                <li>
                    Networking opportunities with fellow health professionals
                </li>
                <li>
                    Influence in shaping the future of healthcare in Zambia
                </li>
                <li>
                    Continuing education (CPD)
                </li>
                <li>
                    Access to training and workshops
                </li>
                <li>
                    Advocacy and representation on issues affecting the profession
                </li>
                <li>
                    Mentorship programs for career guidance and support
                </li>
                <li>
                    Recognition and awards for outstanding contributions to the healthcare community
                </li>
                <li>
                    Participation in community outreach and health promotion activities
                </li>
            </ol>
        </section>
        </div>
)
            }