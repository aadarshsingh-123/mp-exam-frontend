import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function MockTest() {
    useEffect(() => {
        // Redirect to the mock test page (existing HTML)
        window.location.href = '/mp-exam-questions/mock-test.html';
    }, []);

    return (
        <div className="dashboard-page">
            <Navbar />
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div className="spinner"></div>
                <p style={{ marginTop: 16, color: '#a5b4fc' }}>Loading Mock Test...</p>
            </div>
        </div>
    );
}
