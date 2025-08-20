import React from 'react';

export default  function Termination () {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <section className="mb-12">
                {/*<h2 className="text-2xl font-semibold mb-4 text-gray-700">Rights and Privileges</h2>*/}
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Notice: Prior to termination, a member shall be provided with written notice specifying the
                        grounds for termination and affording an opportunity to respond
                    </li>
                    <li>
                        Appeal Mechanism: The member subject to termination shall have the right to appeal against
                        the
                        decision through established appeal mechanisms outlined in the Associations regulations
                    </li>
                    <li>
                        Resignation: Any member may voluntarily resign from COAZ by submitting written notice to the
                        Secretary General. The resignation shall become effective after 90 days
                    </li>
                </ol>
            </section>
        </div>
    );
}