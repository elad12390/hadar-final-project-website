import React, {
    ComponentProps,
    FunctionComponent,
    MutableRefObject,
    PropsWithChildren,
    useEffect,
    useRef,
    useState
} from "react";
import './MainContent.css'
import {SongSection} from "../../models/general-models";
import {ContentSection} from "../ContentSection/ContentSection";
import {getEnvironmentData} from "worker_threads";

export interface MainContentProps {
    models: SongSection[],
    onClick?: (section: SongSection) => void
}

export const MainContent: FunctionComponent<MainContentProps> = ({models, onClick}) => {

    const itemRefs: MutableRefObject<HTMLDivElement[]> = useRef([] as HTMLDivElement[]);
    const startRef: MutableRefObject<HTMLDivElement | null> = useRef(null as HTMLDivElement | null);
    const endRef: MutableRefObject<HTMLDivElement | null> = useRef(null as HTMLDivElement | null);

    const [canScroll, setCanScroll] = useState(true);

    // Intersection observer handling

    const intersectionObserverOptions: IntersectionObserverInit = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: .1
    }

    const onIntersection: IntersectionObserverCallback = async (entries) => {
        // disable scroll temporarily
        setCanScroll(false)

        const targetScrolledInto = entries
            .filter(entry => entry.isIntersecting)
            .at(0)?.target;

        targetScrolledInto?.scrollIntoView({ behavior: 'smooth'});

        setTimeout(() => { setCanScroll(true) }, 200)
        setTimeout(() => {
            if (targetScrolledInto === startRef.current) {
                itemRefs.current.at(-1)?.scrollIntoView();
            } else if (targetScrolledInto === endRef?.current) {
                itemRefs.current.at(0)?.scrollIntoView();
            }
        }, 600)

    }

    const intersectionObserver = useRef(new IntersectionObserver(onIntersection, intersectionObserverOptions));

    useEffect(() => {
        const observer = intersectionObserver.current;
        if (itemRefs.current.length !== models.length) { return; }

        for (const element of [...itemRefs.current, startRef.current!!, endRef.current!!]) {
            observer.observe(element);
        }

        itemRefs.current.at(0)?.scrollIntoView();

        return () => observer.disconnect();
    }, [models, itemRefs, startRef, endRef])


    return <div id="scrollArea" style={{height: '100%', width: '100%', overflow: canScroll ? 'auto' : 'hidden'}}>
        {ContentSection(models, -1, -1, (element) => startRef.current = element as HTMLDivElement, onClick)}
        { models.map((model, idx) => ContentSection(models, idx, idx, (element) => itemRefs.current[idx] = element as HTMLDivElement, onClick)) }
        {ContentSection(models, 0, models.length, (element) => endRef.current = element as HTMLDivElement, onClick)}
    </div>
}
