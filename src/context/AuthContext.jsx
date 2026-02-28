import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tokens = JSON.parse(localStorage.getItem('tokens') || '{}');
        if (tokens.access) {
            getProfile()
                .then((res) => setUser(res.data))
                .catch(() => {
                    localStorage.removeItem('tokens');
                    localStorage.removeItem('user');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = (userData, tokens) => {
        localStorage.setItem('tokens', JSON.stringify(tokens));
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('tokens');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
