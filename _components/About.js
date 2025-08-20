"use client"
import React, { useState } from 'react';

const aboutItems = [
    {
        id: 'about',
        title: 'About Us!',
        description:
            'The Clinical Officers Association of Zambia (COAZ) is a recognized, professional, and advocacy body representing Clinical Officers and Mid-level clinical Practitioners across Zambia. Established to promote the welfare, recognition, and professional development of Clinical Officers, COAZ plays a crucial role in shaping healthcare policy, upholding professional standards, and championing the rights of its members within the broader health and education sectors.\n\nCOAZ operates as a non-political, non-profit organization and serves as the unified voice for Clinical Officers in Zambia. Our membership includes Clinical Officer General Practitioners, Clinical Officer Psychiatry, Ophthalmic Clinical Officers, Medical Licentiates, Emergency Care Technicians, Anaesthetic, orthotists practitioners, Critical Care Providers, and other mid-level practitioners working across rural and urban healthcare settings.',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
    {
        title: 'Our Strategic Pillars!',
        items: [
            'Professional Development and CPD',
            'Advocacy and Policy Engagement',
            'Member Welfare and Representation',
            'Research and Innovation',
            'Governance and Institutional Strengthening',
        ],
        imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
    {
        title: 'Our Collaborations',
        description:
            'COAZ works with the Health Professions Council of Zambia (HPCZ), the Ministry of Health, academic institutions, unions, and other health professional associations both locally and internationally to advance the interests of Clinical Officers, Mid-level clinical practitioners and contribute to national health and regional goals.',
        imageUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },

];

const About = () => {
    const [showFullAbout, setShowFullAbout] = useState(false);

    const toggleAboutText = () => {
        setShowFullAbout(!showFullAbout);
    };

    return (
        <div className="bg-gray-100 px-4 py-12 gap-2 mx-auto font-sans">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">About Us!</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.01]"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>

                            {/* Conditional rendering for the "About Us!" card */}
                            {item.id === 'about' ? (
                                <div className="text-sm text-gray-600 whitespace-pre-line">
                                    {showFullAbout
                                        ? item.description
                                        : `${item.description.slice(0, 300)}...`}
                                    <button
                                        onClick={toggleAboutText}
                                        className="text-blue-600 ml-1 hover:underline text-sm font-medium"
                                    >
                                        {showFullAbout ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            ) : item.items ? (
                                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                                    {item.items.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ol>
                            ) : (
                                <p className="text-sm text-gray-600 whitespace-pre-line">{item.description}</p>
                            )}

                            <a
                                href={item.link}
                                className="text-blue-600 text-sm font-medium mt-4 hover:underline"
                            >
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
