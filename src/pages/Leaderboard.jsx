import { useState, useEffect } from 'react';
import { getLeaderboard } from '../api/client';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

export default function Leaderboard() {
    const [type, setType] = useState('full');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        setLoading(true);
        getLeaderboard(type)
            .then((res) => setData(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [type]);

    const getMedal = (rank) => {
        if (rank === 1) return '🥇';
        if (rank === 2) return '🥈';
        if (rank === 3) return '🥉';
        return rank;
    };

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="page-header">
                <h1>🏆 Top Rankers</h1>
                <p>Best scores across all candidates</p>
            </div>

            <div className="leaderboard-tabs">
                <button
                    className={`lb-tab ${type === 'full' ? 'active' : ''}`}
                    onClick={() => setType('full')}
                >
                    Full Length Test
                </button>
                <button
                    className={`lb-tab ${type === 'subject' ? 'active' : ''}`}
                    onClick={() => setType('subject')}
                >
                    Subject-wise Test
                </button>
            </div>

            {loading ? (
                <div className="loading-screen"><div className="spinner"></div></div>
            ) : data.length === 0 ? (
                <div className="empty-state">
                    <span className="empty-icon">🏆</span>
                    <h3>No results yet</h3>
                    <p>Be the first to take a mock test and appear on the leaderboard!</p>
                </div>
            ) : (
                <div className="leaderboard-list">
                    {/* Top 3 podium */}
                    {data.length >= 3 && (
                        <div className="podium">
                            <div className="podium-item podium-2">
                                <div className="podium-avatar">👤</div>
                                <div className="podium-medal">🥈</div>
                                <span className="podium-name">{data[1].user.full_name}</span>
                                <span className="podium-score">{data[1].obtained_marks}/{data[1].total_marks}</span>
                                <span className="podium-pct">{data[1].percentage.toFixed(1)}%</span>
                            </div>
                            <div className="podium-item podium-1">
                                <div className="podium-avatar">👤</div>
                                <div className="podium-medal">🥇</div>
                                <span className="podium-name">{data[0].user.full_name}</span>
                                <span className="podium-score">{data[0].obtained_marks}/{data[0].total_marks}</span>
                                <span className="podium-pct">{data[0].percentage.toFixed(1)}%</span>
                            </div>
                            <div className="podium-item podium-3">
                                <div className="podium-avatar">👤</div>
                                <div className="podium-medal">🥉</div>
                                <span className="podium-name">{data[2].user.full_name}</span>
                                <span className="podium-score">{data[2].obtained_marks}/{data[2].total_marks}</span>
                                <span className="podium-pct">{data[2].percentage.toFixed(1)}%</span>
                            </div>
                        </div>
                    )}

                    {/* Full table */}
                    <table className="lb-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Score</th>
                                <th>Percentage</th>
                                <th>Correct</th>
                                <th>Wrong</th>
                                <th>Test</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry) => (
                                <tr key={entry.id} className={entry.user.id === user?.id ? 'lb-self' : ''}>
                                    <td className="td-rank">{getMedal(entry.rank)}</td>
                                    <td className="td-name">
                                        {entry.user.full_name}
                                        {entry.user.id === user?.id && <span className="you-badge">You</span>}
                                    </td>
                                    <td className="td-score">{entry.obtained_marks}/{entry.total_marks}</td>
                                    <td>
                                        <div className="pct-bar-sm">
                                            <div className="pct-fill-sm" style={{ width: `${Math.max(0, entry.percentage)}%` }}></div>
                                        </div>
                                        <span className="pct-text-sm">{entry.percentage.toFixed(1)}%</span>
                                    </td>
                                    <td className="td-correct">{entry.correct}</td>
                                    <td className="td-wrong">{entry.wrong}</td>
                                    <td className="td-date">{entry.test_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
