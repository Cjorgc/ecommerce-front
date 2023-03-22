import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CatalogPage from "./pages/Catalog/CatalogPage";
import "./styles.css";
import Header from "./components/Header";
import About from "./pages/About";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
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
