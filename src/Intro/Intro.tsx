import {useEffect, useMemo, useState} from "react";
import './Intro.scss';
import {useWindowSize} from "../utils/hooks/useWindowSize";
import intro from '../assets/images/intro.png';

const initialDistance = 300;
const animationDelay = 200;

export interface IntroProps extends React.PropsWithChildren<any> {
    onFinished: () => void;
}

export const Intro = ({children, onFinished, isFinished}: IntroProps) => {
    const size = useWindowSize();
    const minSize = useMemo(() => size.width && size.height && Math.min(size.width, size.height), [size]);

    const [animatedSize, setAnimatedSize] = useState(1);
    const [mainContentSize, setMainContentSize] = useState(isFinished ? 1 : 0);
    const divSize = useMemo(() => minSize && (minSize - initialDistance), [minSize]);


    useEffect(() => {
        const onClick = () => {
            if (isFinished) { document.removeEventListener('mouseup', onClick); return; }
            setAnimatedSize(0);
            console.log('click');
            setTimeout(() => {
                setMainContentSize(1);
                onFinished?.();
                document.removeEventListener('mouseup', onClick)
            }, animationDelay)
            // leftTextProps.left.set('0%');
        }
        document.addEventListener('mouseup', onClick);

        return () => document.removeEventListener('mouseup', onClick);
    }, [isFinished, onFinished])



    return <>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: `scale(${mainContentSize})`,
            transition: 'transform .5s ease-in-out',
        }}>{children}</div>
        {!isFinished && <div className={'intro-canvas'}>
            <div style={{
                position: 'absolute',
                width: divSize,
                height: divSize,
                backgroundImage: `url(${intro})`,
                backgroundSize: 'auto 100%',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${animatedSize})`,
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: divSize + 'px',
                color: "white",
                fontSize: divSize && (divSize / 20 + 'px'),
                transition: `transform ${animationDelay / 1000}s ease-in-out`,
                cursor: 'pointer',
                userSelect: 'none',
            }}>
                Start
            </div>
        </div>}
    </>

}
