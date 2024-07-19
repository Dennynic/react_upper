import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';

//import  AboutPage  from './pages/about-page/AboutPage';
//import  MainPage  from './pages/main-page/MainPage';
import { AboutLazy } from './pages/about-page/about.async';
import { MainLazy } from './pages/main-page/main.async';
//import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
//import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                   <Route path={'/about'} element={<AboutLazy />} />
                    <Route path={'/'} element={<MainLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
