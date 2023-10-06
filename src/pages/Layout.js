import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../cpmponents/Header';
import Footer from '../cpmponents/Footer';


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    );
}

export default Layout;
