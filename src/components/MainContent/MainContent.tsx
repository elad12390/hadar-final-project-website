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

export interface MainContentProps {
    models: SongSection[]
}

export const MainContent: FunctionComponent<MainContentProps> = ({models}) => {

    const itemRefs: MutableRefObject<HTMLDivElement[]> = useRef([] as HTMLDivElement[]);
    const bottomDivRef: MutableRefObject<HTMLDivElement | null> = useRef(null as HTMLDivElement | null);

    const [canScroll, setCanScroll] = useState(true);

    // Intersection observer handling

    const intersectionObserverOptions: IntersectionObserverInit = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: .1
    }

    const onIntersection: IntersectionObserverCallback = (entries) => {
        const elementScrolledInto = entries
            .filter(entry => entry.isIntersecting)
            .at(0)?.target;

        console.log(elementScrolledInto);

        if (!elementScrolledInto) return;

        elementScrolledInto.scrollIntoView({ behavior: 'smooth'});

        // disable scroll temporarily
        setCanScroll(false)
        setTimeout(() => {
            setCanScroll(true)
        }, 200)

        console.log(elementScrolledInto === bottomDivRef.current);
        if (elementScrolledInto === bottomDivRef.current) {
            setTimeout(() => {
                elementScrolledInto.scrollIntoView();
            }, 300)
        }


    }

    const intersectionObserver = useRef(new IntersectionObserver(onIntersection, intersectionObserverOptions));

    useEffect(() => {
        const observer = intersectionObserver.current;
        if (itemRefs.current.length !== models.length) { return; }

        for (const element of itemRefs.current) {
            observer.observe(element);
        }

        if (bottomDivRef.current) {
            observer.observe(bottomDivRef.current);
        }

        return () => observer.disconnect();
    }, [models, itemRefs])

    return <div id="scrollArea" style={{height: '100%', width: '100%', overflow: canScroll ? 'auto' : 'hidden'}}>
        { models.map((model, idx) => {
            return <section
                key={`ContentImg-${idx}`}
                ref={element => itemRefs.current[idx] = element as HTMLDivElement}
                className="ContentImage"
                style={{
                    background: `url(${model.image}) fixed center center no-repeat`
                }}/>
        }) }
        <section
            key={`ContentImg-${-1}`}
            ref={bottomDivRef}
            className="ContentImage"
            style={{
                background: `url(${models.at(-1)?.image}) fixed center center no-repeat`
            }}/>
    </div>
}
