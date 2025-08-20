import React from 'react';



const News = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', padding: '50px 20px' }}>
            {/* Page Title */}
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>Our Latest News And Events</h1>

            {/* Articles Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                }}
            >
                {/* Example Article Card */}
                {Array.from({ length: 1 }).map((_, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="NewsAndEvents"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ marginBottom: '10px' }}> Annual General Meeting Registration </h3>
                            <p style={{ fontSize: '0.95rem', color: '#555' }}>
                                To register for AGM, click on the link below
                            </p>
                            <a
                                href="https://portal.coaz.org/[userId]/my_events"
                                style={{
                                    display: 'inline-block',
                                    marginTop: '10px',
                                    color: '#007bff',
                                    textDecoration: 'none',
                                }}
                            >
                                Link
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;