import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ScrollRestoration } from "react-router-dom";
import './Main.css';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <div className='footer-bg'>
                <Footer />
            </div>
        </div>
    );
}

export default Main;
