import React from "react";
import {SongSection} from "../../models/general-models";

export const ContentSection = (
    models: SongSection[],
    idx: number,
    key: number,
    ref: (element: HTMLElement | null) => void,
    onClick?: (section: SongSection) => void
) => {
    const model = models.at(idx)
    if (!model) return <></>;

    return <img
        src={model.image}
        onClick={() => onClick?.(model)}
        key={`ContentImg-${idx}`}
        ref={ref}
        className="content-image"
    />
}
