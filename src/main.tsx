import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import "./styles.css";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <MainContent>
                <AppRoutes />
            </MainContent>
        </HashRouter>
    </React.StrictMode>,
)
