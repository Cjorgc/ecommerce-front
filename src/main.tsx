import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CatalogPage from "./pages/Catalog/CatalogPage";
import "./styles.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "catalog",
        element: <CatalogPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
            {/*<HashRouter>*/}
            {/*    <Header />*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={ <Home/> } />*/}
            {/*        <Route path="/about" element={ <About/> }/>*/}
            {/*        <Route path="/signup" element={ <SignUp/> }/>*/}
            {/*        <Route path="/login" element={ <Login/> }/>*/}
            {/*        <Route path="/catalog" element={ <CatalogPage/> }/>*/}
            {/*        <Route path="/cart" element={ <CartPage/> }/>*/}
            {/*    </Routes>*/}
            {/*</HashRouter>*/}
    </React.StrictMode>,
)
