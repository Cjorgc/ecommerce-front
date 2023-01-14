import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const About: FunctionComponent = () => {
    return <>
        <h1>About Page</h1>
        <Link to={"/"}>Home</Link>
    </>
}
