import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

export default function Dashboard() {
    const { user } = useAuth();
    const isAdmin = user?.is_staff;

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="dash-hero">
                <div className="dash-hero-content">
                    <h1>Welcome, <span className="gradient-text">{user?.full_name || 'Student'}</span> 👋</h1>
                    <p>{isAdmin ? 'Admin Dashboard — Manage everything' : 'Choose what you\'d like to do today'}</p>
                </div>
            </div>
            <div className="dash-grid">
                <Link to="/mock-test" className="dash-card">
                    <div className="dash-card-icon">📝</div>
                    <h3>Mock Test</h3>
                    <p>Subject-wise (50 Qs) & Full Length (100 Qs) with real exam interface</p>
                    <span className="dash-card-link">Start Test →</span>
                </Link>
                <a href="/mp-exam-questions/index.html" className="dash-card">
                    <div className="dash-card-icon">📚</div>
                    <h3>Question Bank</h3>
                    <p>Browse 10000+ questions by category, exam, and year with answers</p>
                    <span className="dash-card-link">Browse Questions →</span>
                </a>
                <Link to="/history" className="dash-card">
                    <div className="dash-card-icon">📊</div>
                    <h3>Test History</h3>
                    <p>View all your past mock tests, scores, and performance stats</p>
                    <span className="dash-card-link">View History →</span>
                </Link>
                <Link to="/leaderboard" className="dash-card">
                    <div className="dash-card-icon">🏆</div>
                    <h3>Leaderboard</h3>
                    <p>See top rankers and compare your scores with other students</p>
                    <span className="dash-card-link">View Rankings →</span>
                </Link>
                {isAdmin && (
                    <Link to="/admin" className="dash-card dash-card-admin">
                        <div className="dash-card-icon">⚙️</div>
                        <h3>Admin Panel</h3>
                        <p>Manage students, view all results, and question management</p>
                        <span className="dash-card-link">Manage →</span>
                    </Link>
                )}
            </div>
        </div>
    );
}
