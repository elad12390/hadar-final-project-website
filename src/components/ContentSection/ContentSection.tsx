import React, {useContext, useEffect, useRef, useState} from "react";
import {SongSection} from "../../models/general-models";
import './ContentSection.scss';
import {Store} from "../../App";

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

    const model = models.at(idx)

    useEffect(() => {
        if (!playerRef.current) return;

        if (!isHidden) {
            playerRef.current.play();
        } else {
            playerRef.current.pause();
            playerRef.current.currentTime = 0;
        }
    }, [isHidden])

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
    </React.Fragment>
}


