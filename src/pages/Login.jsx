import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await loginUser({ email, password });
            login(res.data.user, res.data.tokens);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed. Check your email and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-bg"></div>
            <div className="auth-card">
                <div className="auth-logo">📝</div>
                <div className="auth-header">
                    <h1>MP Exam Login</h1>
                    <p>Enter your credentials to continue</p>
                </div>
                {error && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary btn-full" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login →'}
                    </button>
                </form>
                <p className="auth-note">Don't have an account? Contact your admin.</p>
                <Link to="/" className="auth-back">← Back to Home</Link>
            </div>
        </div>
    );
}
