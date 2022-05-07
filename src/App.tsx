import React, {Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./routes/Home/Home";
import {About} from "./routes/About/About";

export const Store = React.createContext<{
    muted: boolean;
    setMuted: Dispatch<SetStateAction<boolean>>;
}>({
    muted: false,
    setMuted: () => {}
})

const App = () => {

    const [muted, setMuted] = useState(true);

    // setMuted((m) => !m)
    return (
        <Store.Provider value={{muted, setMuted}}>
            <h1 style={{
                position: 'fixed',
                left: '5%',
                top: `6%`
            }}> LI'ED </h1>
            <div style={{
                width: '100%',
                height: '100%'
            }} className='flex-center-contents'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Store.Provider>
    );
}

export default App;
