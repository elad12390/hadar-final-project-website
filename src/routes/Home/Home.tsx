import {CircleCrop} from "../../components/CircleCrop/CircleCrop";
import {songSections} from "../../assets/data";
import {MainContent} from "../../components/MainContent/MainContent";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import React, {useContext, useEffect, useMemo, useState} from "react";
import {useWindowSize} from "../../utils/hooks/useWindowSize";
import {SongSection} from "../../models/general-models";
import {useAsyncEffect} from "../../utils/hooks/useAsyncEffect";
import {cacheImages} from "../../utils/hooks/useCachedImages";
import {Store} from "../../App";

export interface IVideoContentProps {
}

export const Home = (props: IVideoContentProps) => {
    const SIZE_MULTIPLIER = .6
    const size = useWindowSize();
    const [circleSize, setCircleSize] = useState(0);
    const [selectedSection, setSelectedSection] = useState<{
        section: SongSection,
        sectionIdx: number
    } | null>({
        section: songSections[0],
        sectionIdx: 0
    });
    const {muted, setMuted} = useContext(Store);

    useAsyncEffect(async () => {
        if (!size?.width || !size?.height) { return; }
        setCircleSize(Math.min(size.width as number * .7, size.height as number)*SIZE_MULTIPLIER);
    }, [size])

    useEffect(() => {
        window.addEventListener("wheel", e => e.preventDefault(), { passive:false })
    }, [])

    useMemo(() => {
        cacheImages(songSections.map(section => section.image));
    }, [])


    return <>
        <div className="image-container" style={{backgroundImage: `url(/${process.env.PUBLIC_URL}/images/background.png)`}}>
            <CircleCrop
                size={circleSize}
                models={songSections}
                onSelect={(selection, sectionIdx) => {
                    setSelectedSection({
                        section: selection,
                        sectionIdx
                    });
                }}
                selectedIdx={selectedSection?.sectionIdx}>
                <MainContent
                    models={songSections}
                    onClick={(station) => setMuted(muted => !muted)}
                    selectedIdx={selectedSection?.sectionIdx}
                    onPlayNextSection={() => setSelectedSection(section => {
                        if (!section) return null;

                        const nextSectionIdx = (section.sectionIdx + 1) % songSections.length;
                        return {
                            section: songSections[nextSectionIdx],
                            sectionIdx: nextSectionIdx
                        }
                    })}
                />
                <div className={"mute"}>{muted ? <VolumeOffIcon/> : <VolumeUpIcon/>}</div>
            </CircleCrop>
            <div id={"lyrics"} style={{zIndex: 3, position: 'absolute', bottom: '5%'}}/>
        </div>
    </>
}
