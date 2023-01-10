import React, { FunctionComponent, useState } from 'react';
import { Form } from "react-router-dom";
import axios from "../api/axios";

interface Props {
}

const SignUp: FunctionComponent<Props> = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const SIGNUP_URL = '/signup'

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(SIGNUP_URL, {username, password})
            const json = response.data
            console.log(json)
            return json
        } catch (error) {
            console.log("error: ", error)
        }
    }

    return <>
        <Form onSubmit={ handleSubmit }>
            <p>
                <span>Username: </span>
                <input
                    placeholder="Username"
                    type="text"
                    name="first"
                    value={ username }
                    onChange={ e => setUsername(e.target.value) }/>
            </p>
            <p>
                <span>Password: </span>
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }/>
            </p>
            <p>
                <button type="submit">Save</button>
            </p>
        </Form>
    </>
};

export default SignUp;
