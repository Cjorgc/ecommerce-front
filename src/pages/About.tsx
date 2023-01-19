import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const About: FunctionComponent = () => {
    return <>
        <h1>About Page</h1>
        <Link to={"/"}>Home</Link>
    </>
}

export default About
