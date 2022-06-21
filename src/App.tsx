import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import './App.css';
import {Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./routes/Home/Home";
import {About} from "./routes/About/About";
import LogoNight from './assets/icons/logo-night.svg';
import LogoDay from './assets/icons/logo-day.svg';
import {Intro} from "./Intro/Intro";
import {useIsDesktop} from "./utils/hooks/useIsDesktop";

export const Store = React.createContext<{
    muted: boolean;
    setMuted: Dispatch<SetStateAction<boolean>>;
    isNightMode: boolean;
    setIsNightMode: Dispatch<SetStateAction<boolean>>;
    isPlaying: boolean;
}>({
    muted: false,
    setMuted: () => {
    },
    isNightMode: false,
    setIsNightMode: () => {
    },
    isPlaying: false
})

const App = () => {
    const isDesktop = useIsDesktop();
    const [muted, setMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const location = useLocation();
    const [isNightMode, setIsNightMode] = useState(false);
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    useEffect(() => {
        setIsNightMode(location.pathname.includes('about'));
    }, [location])


    // setMuted((m) => !m)
    return (
        <Store.Provider value={{muted, setMuted, isNightMode, setIsNightMode, isPlaying}}>
            <Link to={'/'} style={{
                zIndex: 2,
                position: 'fixed',
                left: '5%',
                bottom: `90%`,
                textDecoration: 'none',
                color: 'black'
            }} onClick={() => setIsNightMode(false)}><img src={isNightMode ? LogoNight : LogoDay} alt={''}/></Link>
            {isNightMode && <div style={{
                background: 'black',
                position: 'absolute',
                width: '90%',
                height: '12%',
                top: 0,
                left: 0,
                zIndex: 1
            }}></div>}
            <div style={{
                width: '100%',
                height: '100%',
                background: isNightMode ? 'black' : '#fbfaf8',
                color: isNightMode ? '#fbfaf8' : 'black',
                transition: isNightMode ? 'background .4s' : 'background .2s',
                transitionDelay: '.1s'
            }} className='flex-center-contents'>
                <Routes>
                    <Route path="/" element={
                        <Intro
                            isFinished={isIntroFinished}
                            onFinished={() => {
                                setIsIntroFinished(true);
                                setMuted(false);
                                setTimeout(() => {
                                    setIsPlaying(true);
                                }, 300)
                            }}>
                            <Home/>
                        </Intro>
                    }/>
                    <Route path="/about" element={<About/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/" replace/>}
                    />
                </Routes>
            </div>
            <Link hidden={location.pathname.includes('about')} to={'/about'} style={{color: 'black'}}><h2 style={{
                position: 'fixed',
                right: '5%',
                bottom: `calc(91% - 2px)`,
                margin: 0
            }} onClick={() => setIsNightMode(true)}>About</h2></Link>

        </Store.Provider>
    );
}

export default App;
