import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const isAdmin = user?.is_staff;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/dashboard" className="nav-logo">📝 MP Exam</Link>
            </div>
            <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/mock-test" className="nav-link">Mock Test</Link>
                <Link to="/history" className="nav-link">History</Link>
                <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                {isAdmin && <Link to="/admin" className="nav-link nav-admin">⚙️ Admin</Link>}
            </div>
            <div className="nav-right">
                <span className="nav-user">
                    {isAdmin ? '🔑' : '👤'} {user?.full_name}
                </span>
                <button className="nav-logout" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}
