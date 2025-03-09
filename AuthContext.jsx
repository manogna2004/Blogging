import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        // if (token) {
        //     setUser({ token });
        // }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
