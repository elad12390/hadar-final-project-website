import React, {useContext, useEffect, useRef, useState} from "react";
import {SongSection} from "../../models/general-models";
import './ContentSection.scss';
import {Store} from "../../App";
import {convertTimestampToSeconds, isWithinTimestamps, throttle} from "../../utils/fns";
import ReactDOM from "react-dom";

export const ContentSection = (
    models: SongSection[],
    idx: number,
    key: number,
    isHidden: boolean,
    ref: (element: HTMLElement | null) => void,
    onClick?: (section: SongSection) => void
) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const { muted } = useContext(Store);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const model = models.at(idx)

    const onTimeChange = () => {
        if (!playerRef.current) return;
        const player = playerRef.current;
        setCurrentTime(() => player.currentTime);
    }

    useEffect(() => {
        if (!isPlaying || !model?.subtitles || !playerRef.current) return;
        const player = playerRef.current;

        player.addEventListener('timeupdate', throttle(onTimeChange, 1000));
        return () => player?.removeEventListener('timeupdate', throttle(onTimeChange, 1000));
    }, [playerRef, isPlaying])

    useEffect(() => {
        if (!playerRef.current) return;
        const player = playerRef.current;
        const setPlaying = () => setIsPlaying(true);
        const setPaused = () => setIsPlaying(false);


        player.addEventListener("playing", setPlaying);
        player.addEventListener('pause', setPaused);

        return () => {
            player.removeEventListener("playing", setPlaying);
            player.removeEventListener('pause', setPaused);
        }
    }, [playerRef])

    useEffect(() => {
        if (!playerRef.current) return;

        if (!isHidden) {
            playerRef.current.play();
        } else {
            playerRef.current.pause();
            playerRef.current.currentTime = 0;
        }
    }, [isHidden])

    const renderRunningLyrics = () => {
        if (!model?.subtitles) return;

        const currentLyric = model?.subtitles?.find(sub => isWithinTimestamps(sub.startTime, currentTime, sub.endTime));
        const lyrics = document.getElementById('lyrics');
        console.log(lyrics);
        if (!lyrics) return;
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
            (
                <div style={{ fontSize: '1.5em' }}>
                    <div>{currentLyric?.text}</div>
                </div>
            ),
            // A DOM element
            lyrics
        );
    }


    if (!model) return <></>;


    return <React.Fragment key={`ContentImg-${idx}`}>
        {
            model.videoUrl
                ? <video
                    autoPlay={!isHidden}
                    loop
                    muted={isHidden || muted ? true : undefined}
                    className="content-image"
                    onClick={() => onClick?.(model)}
                    ref={playerRef}
                    src={model.videoUrl}
                    style={{display: isHidden ? 'none' : 'block'}}
                />
                : <img
                    src={model.image}
                    onClick={() => onClick?.(model)}
                    key={`ContentImg-${idx}`}
                    ref={ref}
                    className="content-image"
                />
        }
        {isPlaying && renderRunningLyrics()}
    </React.Fragment>
}


