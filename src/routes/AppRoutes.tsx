import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import CatalogPage from "../pages/Catalog/CatalogPage";
import CartPage from "../pages/cart/CartPage";

const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/catalog" element={ <CatalogPage/> }/>
        <Route path="/cart" element={ <CartPage/> }/>
    </Routes>
}

export default AppRoutes