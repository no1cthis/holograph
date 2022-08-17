import React from 'react';
import {Route, Routes, useLocation } from 'react-router-dom';
import '../../scss/defaultStyles.scss'

import Header from '../Header/Header';
import WelcomePage from '../WelcomePage/WelcomePage'
import Features from '../Features/Features';
import Games from '../Games/Games';
import Marketplace from '../Marketplace/Marketplace';
import Tokenomics from '../Tokenomics/Tokenomics';
import Team from '../Team/Team';
import Partners from '../Partners/Partners';
import Airdrops from '../Airdrops/Airdrops';
import Footer from '../Footer/Footer';
import { AnimatePresence } from 'framer-motion';



function App() {
    const location = useLocation();

    return ( 
        <>
            <Header/>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route location = {location} key = {location.pathname} path='/features'     element={<Features/>}/>
                    <Route location = {location} key = {location.pathname} path='/games'        element={<Games/>}/>
                    <Route location = {location} key = {location.pathname} path='/marketplace'  element={[<Marketplace/>, <Airdrops/>]}/>
                    <Route location = {location} key = {location.pathname} path='/tokenomics'   element={[<Tokenomics/>, <Partners/>]}/>
                    <Route location = {location} key = {location.pathname} path='/team'         element={<Team/>}/>
                    <Route location = {location} key = {location.pathname} path='/holograph'    element={<WelcomePage/>}/>
                </Routes>
            </AnimatePresence>
            <Footer/>
        </>
     );
}

export default App;