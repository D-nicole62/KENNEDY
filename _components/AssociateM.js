"use client"
import React from 'react';


export default function AssociateM()
{
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Eligibility Criteria</h2>
                <p className="mb-4 text-gray-600 text-base md:text-lg">
                    Associate Membership is designated for individuals engaged in professions allied to clinical medicine, including
                    but not limited to medical researchers, healthcare administrators, or educators. The eligibility criteria for
                    Associate Membership shall be defined in the Associations guidelines
                </p>
            </section>

            {/* Rights and Privileges */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Rights and Privileges</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Attendance at General Meetings: Associate Members have the right to attend general meetings
                        convened by the Association
                    </li>
                    <li>
                        Non-voting Participation: While Associate Members may participate in discussions and activities,
                        they shall not have voting rights in Association matters
                    </li>
                    <li>
                        Access to Designated Resources: Associate Members shall have access to specific resources and
                        materials as determined by the National Executive Committee
                    </li>
                </ol>
            </section>
        </div>
    );
}