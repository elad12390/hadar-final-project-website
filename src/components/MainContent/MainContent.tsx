import React, {
    FunctionComponent,
    MutableRefObject,
    useEffect,
    useRef,
    useState
} from "react";
import './MainContent.css'
import {SongSection} from "../../models/general-models";
import {ContentSection} from "../ContentSection/ContentSection";

export interface MainContentProps {
    models: SongSection[];
    selectedIdx?: number;
    onClick?: (section: SongSection) => void;
    onPlayNextSection?: () => void;
}

export const MainContent: FunctionComponent<MainContentProps> = ({models, onClick, selectedIdx, onPlayNextSection}) => {

    const itemRefs: MutableRefObject<HTMLDivElement[]> = useRef([] as HTMLDivElement[]);

    const [canScroll] = useState(false);
    const [, setPrevSelectedIdx] = useState(0);

    useEffect(() => {
        if (selectedIdx === null || selectedIdx === undefined) return;

        setPrevSelectedIdx(selectedIdx!!);
    }, [selectedIdx])

    return <div id="scrollArea" style={{height: '100%', width: '100%', overflow: canScroll ? 'auto' : 'hidden'}}>
        { models.map((model, idx) =>
            ContentSection(models, idx, idx, idx !== selectedIdx,(element) => itemRefs.current[idx] = element as HTMLDivElement, onClick, onPlayNextSection)
        ) }
    </div>
}
