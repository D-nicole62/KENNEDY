import React from 'react';

export default function Grounds () {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            {/*<section className="mb-12">*/}
            {/*    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Eligibility Criteria</h2>*/}
            {/*    <p className="mb-4 text-gray-600 text-base md:text-lg">*/}
            {/*        Honorary Membership may be granted to individuals who have made significant contributions to the*/}
            {/*        advancement of clinical medicine. The criteria and procedures for conferring Honorary Membership*/}
            {/*        shall be established by the National Executive Committee*/}
            {/*    </p>*/}
            {/*</section>*/}

            {/* Rights and Privileges */}
            <section className="mb-12">
                {/*<h2 className="text-2xl font-semibold mb-4 text-gray-700">Rights and Privileges</h2>*/}
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Non-payment of Dues: Membership may be terminated due to non-payment of membership dues or
                        any
                        prescribed fees within the stipulated time frames
                    </li>
                    <li>
                        Violation of Code of Ethics: Termination may result from a members violation of the COAZ
                        Code
                        of Ethics or Health professions code of ethics
                    </li>
                    <li>
                        Conduct Prejudicial to the Association: Membership may be terminated if a member engages in
                        conduct deemed prejudicial to the interests and objectives of the Association
                    </li>
                    <li>
                        Resignation: membership shall be terminated upon resignation
                    </li>
                </ol>
            </section>
        </div>
    );
}