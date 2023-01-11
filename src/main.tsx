import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hola mundo!</h1>}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>,
)
