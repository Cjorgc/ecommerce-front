import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { post } from "../../api/AxiosClient";
import AuthResponse from "../../models/Auth/AuthResponse";
import { isAuthenticated, login } from "../../services/auth/auth";

interface Props {
}

const SignUp: FunctionComponent<Props> = () => {
    const [form, setForm] = useState( { username: '', password: '', errors: {} } )
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { username, password } = form
            const response = await post<AuthResponse>('/signup', { username, password })
            login(response.token)
            navigate("/catalog")
        } catch (error: unknown) {
            if (error instanceof Error) {
                setForm({...form, errors: {...form.errors, general: error.message}})
                return
            }
            throw error
        }
    }

    useEffect(() => {
        if (isAuthenticated()) navigate("/catalog")
    }, [])

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
                <button type="submit">Sign Up</button>
            </div>
            <div>
                Already have an account? <Link to={"/login"}>Log in</Link>
            </div>
        </form>
    </>
};

export default SignUp;
