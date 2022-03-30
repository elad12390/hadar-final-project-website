import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useWindowSize} from "./utils/hooks/useWindowSize";
import {CircleCrop} from "./components/CircleCrop/CircleCrop";
import {MainContent} from "./components/MainContent/MainContent";
import {useAsyncEffect} from "./utils/hooks/useAsyncEffect";

const App = () => {
    const SIZE_MULTIPLIER = .8
    const size = useWindowSize();
    const [circleSize, setCircleSize] = useState(0);
    //
    // useEffect(() => {
    //     if (!size?.width || !size?.height) { return; }
    //     setCircleSize(Math.min(size.width as number, size.height as number)*SIZE_MULTIPLIER);
    // }, [size])
    useAsyncEffect(async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json());
        console.table(data);

    }, [])

    useAsyncEffect(async () => {
        if (!size?.width || !size?.height) { return; }
        setCircleSize(Math.min(size.width as number, size.height as number)*SIZE_MULTIPLIER);
    }, [size])

    return (
        <div className="App">
            <CircleCrop size={circleSize}>
                <MainContent
                    models={[
                        {
                            image: process.env.PUBLIC_URL + '/images/eye.png',
                            description: '',
                            lyrics: '',
                            title: '',
                            videoUrl: ''
                        },
                        {
                            image: process.env.PUBLIC_URL + '/images/going-to-cliff.png',
                            description: '',
                            lyrics: '',
                            title: '',
                            videoUrl: ''
                        },
                        {
                            image: process.env.PUBLIC_URL + '/images/look-through-window.png',
                            description: '',
                            lyrics: '',
                            title: '',
                            videoUrl: ''
                        },
                        {
                            image: process.env.PUBLIC_URL + '/images/on-the-edge.png',
                            description: '',
                            lyrics: '',
                            title: '',
                            videoUrl: ''
                        },
                        {
                            image: process.env.PUBLIC_URL + '/images/synagogue.png',
                            description: '',
                            lyrics: '',
                            title: '',
                            videoUrl: ''
                        }
                    ]}
                    onClick={(station) => console.log(station)}
                />
            </CircleCrop>
        </div>
    );
}

export default App;
