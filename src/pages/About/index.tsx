import React, { FC } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";

const About: FC = () => {
    return <PrivateRoute>
        <h1>About Page</h1>
        <p>Bienvenido!</p>
        <Link to={"/"}>Home</Link>
    </PrivateRoute>
}

export default About
