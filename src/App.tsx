import React, {useEffect, useMemo, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useWindowSize} from "./utils/hooks/useWindowSize";
import {CircleCrop} from "./components/CircleCrop/CircleCrop";
import {MainContent} from "./components/MainContent/MainContent";
import {useAsyncEffect} from "./utils/hooks/useAsyncEffect";
import {songSections} from "./assets/data";
import {SongSection} from "./models/general-models";
import {cacheImages} from "./utils/hooks/useCachedImages";

const App = () => {
    const SIZE_MULTIPLIER = .7
    const size = useWindowSize();
    const [circleSize, setCircleSize] = useState(0);
    const [selectedSection, setSelectedSection] = useState<{
        section: SongSection,
        sectionIdx: number
    } | null>({
        section: songSections[0],
        sectionIdx: 0
    });

    useAsyncEffect(async () => {
        if (!size?.width || !size?.height) { return; }
        setCircleSize(Math.min(size.width as number, size.height as number)*SIZE_MULTIPLIER);
    }, [size])

    useEffect(() => {
        window.addEventListener("wheel", e => e.preventDefault(), { passive:false })
    }, [])

    useMemo(() => {
        cacheImages(songSections.map(section => section.image));
    }, [])


    return (
        <div className="App">
            <CircleCrop
                size={circleSize}
                models={songSections}
                onSelect={(selection, sectionIdx) => {
                    console.log(selection, sectionIdx);
                    setSelectedSection({
                        section: selection,
                        sectionIdx
                    });
                }}
                selectedIdx={selectedSection?.sectionIdx}>
                <MainContent
                    models={songSections}
                    onClick={(station) => console.log(station)}
                    selectedIdx={selectedSection?.sectionIdx}

                />
            </CircleCrop>
        </div>
    );
}

export default App;
