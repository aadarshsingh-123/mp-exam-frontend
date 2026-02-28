import { useState, useEffect } from 'react';
import { getStudents, addStudent, deleteStudent } from '../api/client';
import Navbar from '../components/Navbar';

export default function AdminPanel() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ full_name: '', email: '', password: '' });
    const [addError, setAddError] = useState('');
    const [addSuccess, setAddSuccess] = useState('');

    const fetchStudents = () => {
        setLoading(true);
        getStudents()
            .then((res) => setStudents(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    };

    useEffect(() => { fetchStudents(); }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        setAddError('');
        setAddSuccess('');
        try {
            await addStudent(form);
            setAddSuccess(`✅ Student "${form.full_name}" added successfully!`);
            setForm({ full_name: '', email: '', password: '' });
            fetchStudents();
        } catch (err) {
            const data = err.response?.data;
            if (data) {
                const msg = Object.values(data).flat().join(' ');
                setAddError(msg);
            } else {
                setAddError('Failed to add student');
            }
        }
    };

    const handleDelete = async (id, name) => {
        if (!confirm(`Are you sure you want to delete "${name}"? All their test history will be deleted too.`)) return;
        try {
            await deleteStudent(id);
            fetchStudents();
        } catch (err) {
            alert('Failed to delete student');
        }
    };

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="page-header">
                <h1>⚙️ Admin Panel</h1>
                <p>Manage students and platform</p>
            </div>

            {/* Quick Stats */}
            <div className="admin-stats">
                <div className="admin-stat">
                    <span className="admin-stat-num">{students.length}</span>
                    <span className="admin-stat-label">Total Students</span>
                </div>
                <div className="admin-stat">
                    <span className="admin-stat-num">
                        {students.reduce((s, st) => s + (st.tests_count || 0), 0)}
                    </span>
                    <span className="admin-stat-label">Total Tests Taken</span>
                </div>
                <a href="http://localhost:8001/admin/" target="_blank" rel="noopener" className="admin-stat admin-stat-link">
                    <span className="admin-stat-num">📋</span>
                    <span className="admin-stat-label">Django Admin →</span>
                </a>
            </div>

            {/* Add Student */}
            <div className="admin-section">
                <div className="admin-section-header">
                    <h2>👥 Student Management</h2>
                    <button className="btn-add-student" onClick={() => setShowAdd(!showAdd)}>
                        {showAdd ? 'Cancel' : '+ Add Student'}
                    </button>
                </div>

                {showAdd && (
                    <div className="add-student-form">
                        {addError && <div className="auth-error">{addError}</div>}
                        {addSuccess && <div className="auth-success">{addSuccess}</div>}
                        <form onSubmit={handleAdd}>
                            <div className="add-form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        value={form.full_name}
                                        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                                        placeholder="Student name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder="student@email.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        value={form.password}
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        placeholder="Initial password"
                                        required
                                        minLength={6}
                                    />
                                </div>
                                <button type="submit" className="btn-primary btn-add-submit">Add</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            {/* Students Table */}
            <div className="admin-table-wrapper">
                {loading ? (
                    <div className="loading-screen"><div className="spinner"></div></div>
                ) : students.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">👥</span>
                        <h3>No students yet</h3>
                        <p>Add your first student using the button above</p>
                    </div>
                ) : (
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Tests Taken</th>
                                <th>Joined</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s, i) => (
                                <tr key={s.id}>
                                    <td>{i + 1}</td>
                                    <td className="td-name">{s.full_name}</td>
                                    <td>{s.email}</td>
                                    <td className="td-score">{s.tests_count || 0}</td>
                                    <td className="td-date">{new Date(s.date_joined).toLocaleDateString('en-IN')}</td>
                                    <td><span className={`status-badge ${s.is_active ? 'active' : 'inactive'}`}>{s.is_active ? 'Active' : 'Inactive'}</span></td>
                                    <td>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(s.id, s.full_name)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
