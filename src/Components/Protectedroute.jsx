import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSession } from '../Apis/register';

export default function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        console.log('useEffect triggered');
        async function checkSession() {
            const session = await getSession();
            console.log('session is 213456789..',session);
            setIsAuthenticated(session.status);
        }
        checkSession();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" />;
    }

    return children;
}
