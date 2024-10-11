import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../Components/Header/Header";
import CookiesPopup from "../Components/CookiesPopup/CookiesPopup";
import Footer from "../Components/Footer/Footer";
import AuthorGallery from "../Components/Gallery/AuthorGallery/AuthorGallery";

const MainLayout = () => {
    return (
        <>
            <AuthorGallery/>
            <div className="wrap">
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
                <CookiesPopup/>
            </div>
        </>
    );
}

export default MainLayout;
