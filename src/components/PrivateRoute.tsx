import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getToken } from "../auth/auth";

interface Props {
    children: ReactNode
}

const PrivateRoute: FunctionComponent<Props> = (props): JSX.Element => {
    const navigate = useNavigate()
    const isAuthenticated = getToken()
    useEffect(() => {
        !isAuthenticated && navigate("/login")
    }, []);

    return (
        <>
            { isAuthenticated && props.children }
        </>
    )
};

export default PrivateRoute;
