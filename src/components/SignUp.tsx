import React, { FunctionComponent, useState } from 'react';
import axios from "../api/axios";
import { AxiosError } from "axios";

interface Props {
}

const SignUp: FunctionComponent<Props> = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [formError, setFormError] = useState("")
    const SIGNUP_URL = '/signup'

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(SIGNUP_URL, {username, password})
            return response.data
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setFormError(error.response?.data.message)
                return
            }
            throw error
        }
    }

    return <>
        <form onSubmit={ handleSubmit }>
            <p style={{color: "red"}}>{formError}</p>
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
        </form>
    </>
};

export default SignUp;
