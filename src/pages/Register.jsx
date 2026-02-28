import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== password2) {
            setError('Passwords do not match');
            return;
        }
        setLoading(true);
        try {
            const res = await registerUser({
                email,
                full_name: fullName,
                password,
                password2,
            });
            login(res.data.user, res.data.tokens);
            navigate('/dashboard');
        } catch (err) {
            const data = err.response?.data;
            if (data) {
                const msg = Object.values(data).flat().join(' ');
                setError(msg);
            } else {
                setError('Registration failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-bg"></div>
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Create Account</h1>
                    <p>Join thousands of MP exam aspirants</p>
                </div>
                {error && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password (min 6 chars)"
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder="Confirm your password"
                            required
                            minLength={6}
                        />
                    </div>
                    <button type="submit" className="btn-primary btn-full" disabled={loading}>
                        {loading ? 'Creating...' : 'Create Account'}
                    </button>
                </form>
                <p className="auth-switch">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
                <Link to="/" className="auth-back">← Back to Home</Link>
            </div>
        </div>
    );
}
