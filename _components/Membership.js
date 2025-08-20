"use client"
import { FaRegCircleDot } from "react-icons/fa6";

export default function Membership() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Eligibility Criteria</h2>
                <p className="mb-4 text-gray-600 text-base md:text-lg">
                    Full Membership within the Clinical Officers Association of Zambia (COAZ) shall be individuals who meet
                    the following criteria:
                </p>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Successful Completion: Prospective Full Members must have successfully completed accredited clinical
                        officer training programs recognized by relevant regulatory bodies.
                    </p>
                </div>
                <div className="flex items-start mb-4">
                    <FaRegCircleDot size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                    <p className="ml-2 text-gray-600 text-sm md:text-base">
                        Valid Practicing license: As a prerequisite, individuals seeking Full Membership must hold valid
                        practicing license issued by the Health Professions council of Zambia.
                    </p>
                </div>
            </section>

            {/* Rights and Privileges */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Rights and Privileges</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Participation: Full Members have the right to actively participate in all activities organized by the
                        Association.
                    </li>
                    <li>
                        Voting Rights: Full Members shall have the right to cast votes in elections, referendums, and any other
                        matters subjected to a vote by the membership.
                    </li>
                    <li>
                        Candidacy for Elective Offices: Full Members are eligible to stand for elective offices within COAZ,
                        subject to compliance with the relevant provisions outlined in the Constitution.
                    </li>
                    <li>
                        Access to Resources: Full Members shall have unrestricted access to educational resources,
                        publications, and any other deemed beneficial by the Association.
                    </li>
                    <li>
                        Benefits Determined by the NEC: The National Executive Committee reserves the authority to confer
                        additional benefits and privileges upon Full Members as deemed appropriate.
                    </li>
                    <li>
                        Access to Due Process: Members facing disciplinary actions or disputes shall be entitled to due process,
                        including the right to be heard, present evidence, and appeal decisions through established procedures.
                    </li>
                </ol>
            </section>

            {/* Obligations and Responsibilities */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Obligations and Responsibilities</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Adherence to Constitution: All Full Members shall comply with the provisions outlined in this
                        Constitution and any regulations constituted by the association.
                    </li>
                    <li>
                        Knowledge of Constitution: Members are obligated to familiarize themselves with the content of this
                        Constitution and stay informed about any amendments or updates.
                    </li>
                    <li>
                        Professional Ethics: Members shall uphold the highest standards of professional ethics in the
                        practice, maintaining the integrity and reputation of the profession, practice, and the association.
                    </li>
                    <li>
                        Compliance with Regulations: Members shall adhere to any ethical guidelines, codes of conduct, or regulations established.
                    </li>
                    <li>
                        Financial Responsibilities:
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>
                                Timely Payment: Members are required to pay membership subscription fees or any other financial obligations promptly.
                            </li>
                            <li>
                                Consequences of Non-Payment: Failure to fulfill financial obligations may result in the suspension of benefits or other disciplinary actions.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Financial Transparency:
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>
                                Access to Financial Reports: Members shall have the right to access summarized financial reports, including income, expenditure, and budgets, subject to relevant provisions.
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
        </div>
    );
}