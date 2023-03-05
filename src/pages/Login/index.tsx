import { FC, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { post } from "../../api/AxiosClient";
import AuthResponse from "../../models/Auth/AuthResponse";
import { isAuthenticated, login } from "../../auth/auth";

const Login: FC = () => {
    const [form, setForm] = useState( { username: '', password: '', errors: {} } )
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const { username, password } = form
            const response = await post<AuthResponse>('/login', { username, password })
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
        <h1>Log in</h1>
        <form onSubmit={ handleSubmit }>
            <div style={{color: "red"}}>{form.errors["general"]}</div>
            <div>
                <label>Username: </label>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={ form.username }
                    onChange={ e => setForm( {...form, username: e.target.value}) }/>
            </div>
            <div>
                <label>Password: </label>
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={ form.password }
                    onChange={ e => setForm( {...form, password: e.target.value}) }/>
            </div>
            <div>
                <button type="submit">Log in</button>
            </div>
            <div>
                You dont have an account? <Link to={"/signup"}>Sign up</Link>
            </div>
        </form>
    </>
};

export default Login
