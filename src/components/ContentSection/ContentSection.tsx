import React, {useContext, useEffect, useRef, useState} from "react";
import {SongSection} from "../../models/general-models";
import './ContentSection.scss';
import {Store} from "../../App";

export const ContentSection = (
    models: SongSection[],
    idx: number,
    key: number,
    ref: (element: HTMLElement | null) => void,
    onClick?: (section: SongSection) => void
) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const { muted } = useContext(Store);

    const model = models.at(idx)
    if (!model) return <></>;

    return <React.Fragment key={`ContentImg-${idx}`}>
        {
            model.videoUrl
                ? <video
                    autoPlay
                    loop
                    muted={muted ? true : undefined}
                    className="content-image"
                    onClick={() => onClick?.(model)}
                    ref={playerRef}
                    src={model.videoUrl}
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


