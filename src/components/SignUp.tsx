import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { post } from "../api/AxiosClient";
import { AxiosError } from "axios";
import AuthResponse from "../models/Auth/AuthResponse";

interface Props {
}

const SignUp: FunctionComponent<Props> = () => {
    const [form, setForm] = useState( { username: '', password: '', errors: {} } )
    const SIGNUP_URL = '/signup'
    const navigate = useNavigate()
    console.log(form)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { username, password } = form
            const response = await post<AuthResponse>(SIGNUP_URL, { username, password })
            let { token } = response;
            localStorage.setItem("token", token)
            navigate("/about")
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setForm({...form, errors: {...form.errors, general: error.message}})
                return
            }
            throw error
        }
    }

    return <>
        <h1>Sign up</h1>
        <form onSubmit={ handleSubmit }>
            <div style={{color: "red"}}>{form.errors["general"]}</div>
            <div>
                <span>Username: </span>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={ form.username }
                    onChange={ e => setForm( {...form, username: e.target.value}) }/>
            </div>
            <div>
                <span>Password: </span>
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={ form.password }
                    onChange={ e => setForm( {...form, password: e.target.value}) }/>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    </>
};

export default SignUp;
