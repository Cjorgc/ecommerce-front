import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import CatalogPage from "./pages/Catalog/CatalogPage";
import "./styles.css";
import Header from "./components/Header";
import CartPage from "./pages/cart/CartPage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/about" element={ <About/> }/>
                    <Route path="/signup" element={ <SignUp/> }/>
                    <Route path="/login" element={ <Login/> }/>
                    <Route path="/catalog" element={ <CatalogPage/> }/>
                    <Route path="/cart" element={ <CartPage/> }/>
                </Routes>
            </HashRouter>
    </React.StrictMode>,
)
