import React, { ReactElement, ReactNode, useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/authContext';

interface IProtected {
    children: ReactElement <ReactNode>;
}

const ProtectedRoute: React.FC<IProtected> = (props) => {
    //@ts-ignore
    const { auth } = useContext(AuthContext);

    return auth?.user ? props.children : <Navigate to={"/login"} />;
}

export default ProtectedRoute;