import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-page">
            <div className="home-bg"></div>
            <div className="home-content">
                <div className="home-badge">📝 MP Exam Preparation</div>
                <h1>MP Exam <span className="gradient-text">GK/GS</span></h1>
                <p className="home-subtitle">
                    Practice 5000+ MCQ Questions • Take Mock Tests • Track Your Progress • Compete on Leaderboard
                </p>
                <div className="home-features">
                    <div className="feature-card">
                        <span className="feature-icon">📚</span>
                        <h3>Question Bank</h3>
                        <p>5000+ questions from MPPSC, SSC, Vyapam & more</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">📝</span>
                        <h3>Mock Tests</h3>
                        <p>Subject-wise & Full Length tests with real exam UI</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">📊</span>
                        <h3>Track Progress</h3>
                        <p>View history, scores & improvement over time</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🏆</span>
                        <h3>Leaderboard</h3>
                        <p>Compete with others & see top rankers</p>
                    </div>
                </div>
                <div className="home-cta">
                    <Link to="/login" className="btn-primary">Login to Start →</Link>
                </div>
                <p className="home-note">Contact your admin for account access</p>
            </div>
        </div>
    );
}
