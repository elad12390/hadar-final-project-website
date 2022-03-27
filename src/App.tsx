import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useWindowSize} from "./utils/hooks/useWindowSize";
import {CircleCrop} from "./components/CircleCrop/CircleCrop";
import {MainContent} from "./components/MainContent/MainContent";

const App = () => {
    const SIZE_MULTIPLIER = .8
    const size = useWindowSize();
    const [circleSize, setCircleSize] = useState(0);

    useEffect(() => {
        if (!size?.width || !size?.height) { return; }
        setCircleSize(Math.min(size.width, size.height)*SIZE_MULTIPLIER);
    }, [size])

    return (
        <div className="App">
            <CircleCrop size={circleSize}>
                <MainContent models={[
                    {
                        image: 'https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        description: '',
                        lyrics: '',
                        title: '',
                        videoUrl: ''
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1648285533370-981a81bf01dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        description: '',
                        lyrics: '',
                        title: '',
                        videoUrl: ''
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        description: '',
                        lyrics: '',
                        title: '',
                        videoUrl: ''
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1648285533370-981a81bf01dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        description: '',
                        lyrics: '',
                        title: '',
                        videoUrl: ''
                    }
                ]}/>
            </CircleCrop>
        </div>
    );
}

export default App;
