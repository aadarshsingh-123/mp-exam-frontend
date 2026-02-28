import { useState, useEffect } from 'react';
import { getHistory } from '../api/client';
import Navbar from '../components/Navbar';

export default function History() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHistory()
            .then((res) => setData(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="dashboard-page">
                <Navbar />
                <div className="loading-screen"><div className="spinner"></div></div>
            </div>
        );
    }

    const stats = data?.stats || {};
    const results = data?.results || [];

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="page-header">
                <h1>📊 Test History</h1>
                <p>Your complete mock test performance</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card stat-total">
                    <span className="stat-number">{stats.total_tests || 0}</span>
                    <span className="stat-label">Total Tests Appeared</span>
                </div>
                <div className="stat-card stat-avg">
                    <span className="stat-number">{(stats.average_percentage || 0).toFixed(1)}%</span>
                    <span className="stat-label">Average Score</span>
                </div>
                <div className="stat-card stat-best">
                    <span className="stat-number">{(stats.best_score || 0).toFixed(1)}%</span>
                    <span className="stat-label">Best Score</span>
                </div>
                <div className="stat-card stat-marks">
                    <span className="stat-number">{(stats.total_marks_obtained || 0).toFixed(1)}</span>
                    <span className="stat-label">Total Marks Earned</span>
                </div>
            </div>

            {/* Results Table */}
            <div className="history-table-wrapper">
                {results.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">📝</span>
                        <h3>No tests taken yet</h3>
                        <p>Take your first mock test to see your results here!</p>
                    </div>
                ) : (
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Test Name</th>
                                <th>Type</th>
                                <th>Correct</th>
                                <th>Wrong</th>
                                <th>Skipped</th>
                                <th>Score</th>
                                <th>Percentage</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((r, i) => (
                                <tr key={r.id}>
                                    <td>{i + 1}</td>
                                    <td className="td-name">{r.test_name}</td>
                                    <td>
                                        <span className={`type-badge ${r.test_type}`}>
                                            {r.test_type === 'full' ? 'Full Length' : 'Subject'}
                                        </span>
                                    </td>
                                    <td className="td-correct">{r.correct}</td>
                                    <td className="td-wrong">{r.wrong}</td>
                                    <td>{r.skipped}</td>
                                    <td className="td-score">{r.obtained_marks}/{r.total_marks}</td>
                                    <td>
                                        <div className="pct-bar-sm">
                                            <div className="pct-fill-sm" style={{ width: `${Math.max(0, r.percentage)}%` }}></div>
                                        </div>
                                        <span className="pct-text-sm">{r.percentage.toFixed(1)}%</span>
                                    </td>
                                    <td className="td-date">{new Date(r.created_at).toLocaleDateString('en-IN')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
