import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
            <HashRouter>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/about" element={ <About/> }/>
                    <Route path="/signup" element={ <SignUp/> }/>
                    <Route path="/login" element={ <Login/> }/>
                    <Route path="/catalog" element={ <Catalog/> }/>
                </Routes>
            </HashRouter>
    </React.StrictMode>,
)
