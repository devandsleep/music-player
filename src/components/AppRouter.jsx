import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/';
import { AuthContext } from '../context';


const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(r => {
                    return <Route key={r.path} path={r.path} element={r.component} />
                })}
                <Route key='1' path="*" element={<Navigate to="/" />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(r => {
                    return <Route key={r.path} path={r.path} element={r.component} />
                })}
                <Route key='1' path="*" element={<Navigate to="login" />} />
            </Routes>
    );
}

export default AppRouter;