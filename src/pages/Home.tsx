import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Home: FunctionComponent = () => {
    return <>
        <h1>Home Page</h1>
        <nav>
            <Link to={"about"}>about</Link> |
            <Link to={"signup"}>signup</Link>
        </nav>
    </>
}

export default Home
