import React, {Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./routes/Home/Home";
import {About} from "./routes/About/About";
import LogoNight from './assets/icons/logo-night.svg';
import LogoDay from './assets/icons/logo-day.svg';

export const Store = React.createContext<{
    muted: boolean;
    setMuted: Dispatch<SetStateAction<boolean>>;
    isNightMode: boolean;
    setIsNightMode: Dispatch<SetStateAction<boolean>>;
}>({
    muted: false,
    setMuted: () => {},
    isNightMode: false,
    setIsNightMode: () => {}
})

const App = () => {

    const [muted, setMuted] = useState(true);
    const location = useLocation();
    const [isNightMode, setIsNightMode] = useState(location.pathname.includes('about'));


    // setMuted((m) => !m)
    return (
        <Store.Provider value={{muted, setMuted, isNightMode, setIsNightMode}}>
            <Link to={'/'} style={{
                position: 'fixed',
                left: '5%',
                top: `6%`,
                textDecoration: 'none',
                color: 'black'
            }} onClick={() => setIsNightMode(false)}><img src={isNightMode ? LogoNight : LogoDay}/></Link>
            <div style={{
                width: '100%',
                height: '100%',
                background: isNightMode ? 'black' : 'white',
                color: isNightMode ? 'white' : 'black',
                transition: isNightMode ? 'background .4s' : 'background .2s',
                transitionDelay: '.1s'
            }} className='flex-center-contents'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
            <Link hidden={location.pathname.includes('about')} to={'/about'} style={{color: 'black'}}><h2 style={{
                position: 'fixed',
                right: '5%',
                top: `6%`
            }} onClick={() => setIsNightMode(true)}>About</h2></Link>

        </Store.Provider>
    );
}

export default App;
