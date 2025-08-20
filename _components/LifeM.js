import React from 'react';

export default function LifeM (){
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Eligibility Criteria</h2>
                <p className="mb-4 text-gray-600 text-base md:text-lg">
                    Life Membership may be conferred upon Full Members in recognition of exceptional contributions to
                    COAZ or the broader field of clinical medicine. The specific criteria for conferring Life
                    Membership shall be outlined in the Associations member regulations
                </p>
            </section>

            {/* Rights and Privileges */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Rights and Privileges</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Lifetime Access: Life Members shall have lifetime access to Association activities, resources,
                        and benefits, same as full members
                    </li>
                    <li>
                        Exemption fromSubscription Fees: Life Members shall be exempt from any annual subscription fees
                    </li>
                    <li>
                        All current and former National executive members shall have life membership status
                    </li>
                </ol>
            </section>
        </div>
    );
}