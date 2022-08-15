import React, { Children, createContext, useMemo, useState } from 'react';

export interface IAuthContext {
    children: React.ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider: React.FC<IAuthContext> = (props) => {

    const [auth, setAuth] = useState({});
    const value = useMemo(() => ({ auth, setAuth }), [auth]);

    return (
        // @ts-ignore
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;