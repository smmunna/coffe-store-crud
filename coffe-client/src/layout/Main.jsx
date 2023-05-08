import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
        </div>
    );
}

export default Main;
