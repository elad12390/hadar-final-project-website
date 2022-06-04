import React, {useContext, useEffect, useRef, useState} from "react";
import {SongSection} from "../../models/general-models";
import './ContentSection.scss';
import {Store} from "../../App";
import {convertTimestampToSeconds, isWithinTimestamps, throttle} from "../../utils/fns";
import ReactDOM from "react-dom";
import {useMediaQuery} from "../../utils/hooks/useMediaQuery";

export const ContentSection = (
    models: SongSection[],
    idx: number,
    key: number,
    isHidden: boolean,
    ref: (element: HTMLElement | null) => void,
    onClick?: (section: SongSection) => void,
    onPlayNextSection?: () => void
) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const { muted } = useContext(Store);
    const [currentTime, setCurrentTime] = useState(0);
    const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);
    const isMediumSize = useMediaQuery('(min-width: 768px)');
    const isSmallSize = useMediaQuery('(max-width: 767px)');
    const {isPlaying: isFinishedIntro} = useContext(Store);

    const model = models.at(idx)

    const onTimeChange = () => {
        if (!playerRef.current) return;
        const player = playerRef.current;
        setCurrentTime(() => player.currentTime);
    }

    const onVideoEnd = () => {
        onPlayNextSection?.();
    }

    useEffect(() => {
        if (!playerRef.current) return;

        if (isFinishedIntro && !isHidden) {
            playerRef.current.play();
        } else if (isHidden) {
            playerRef.current.pause();
            playerRef.current.currentTime = 0;
        }
    }, [isFinishedIntro, isHidden])

    useEffect(() => {
        if (!isCurrentlyPlaying || !model?.subtitles || !playerRef.current) return;
        const player = playerRef.current;
        const fn = throttle(onTimeChange, 100);

        player.addEventListener('timeupdate', fn);
        return () => player?.removeEventListener('timeupdate', fn);
    }, [playerRef, isCurrentlyPlaying])

    useEffect(() => {
        if (!playerRef.current) return;
        const player = playerRef.current;
        const setPlaying = () => setIsCurrentlyPlaying(true);
        const setPaused = () => setIsCurrentlyPlaying(false);


        player.addEventListener("playing", setPlaying);
        player.addEventListener('pause', setPaused);
        player.addEventListener('ended', onVideoEnd);


        return () => {
            player.removeEventListener("playing", setPlaying);
            player.removeEventListener('pause', setPaused);
            player.removeEventListener('ended', onVideoEnd);
        }
    }, [playerRef])

    const renderRunningLyrics = () => {
        if (!model?.subtitles) return;

        const currentLyric = model?.subtitles?.find(sub => isWithinTimestamps(sub.startTime, currentTime, sub.endTime));
        const lyrics = document.getElementById('lyrics');
        if (!lyrics) return;

        let fontSize = 1.5;
        if (isMediumSize) {
            fontSize = 1.3;
        } else if (isSmallSize) {
            fontSize = 1.2;
        }
        return ReactDOM.createPortal(
            (
                <div style={{
                    fontSize: fontSize + 'rem',
                    userSelect: 'none',
                }}>{currentLyric?.text}</div>
            ),
            lyrics
        );
    }


    if (!model) return <></>;


    return <React.Fragment key={`ContentImg-${idx}`}>
        {
            model.videoUrl
                ? <video
                    muted={isHidden || muted ? true : undefined}
                    autoPlay={false}
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
        {isCurrentlyPlaying && renderRunningLyrics()}
    </React.Fragment>
}


