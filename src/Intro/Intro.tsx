import {FunctionComponent, useEffect, useState} from "react";
import {animated, useSpring, useTransition} from 'react-spring';
import './Intro.scss';


const initialDistance = 40;

export const Intro: FunctionComponent = ({children}) => {
    const [isFinished, setIsFinished] = useState(true);
    const [animationState, setAnimationState] = useState(0);
    const leftTextProps = useSpring({
        // left: `${55 - initialDistance/2}%`,
        x: '55',
        y: '55'
        // top: '50%'
    })
    const rightTextProps = useSpring({
        position: 'absolute',
        right: `${55 - initialDistance/2}%`,
        top: '50%'
    })

    useEffect(() => {
        const onClick = () => {
            if (isFinished) {
                document.removeEventListener('mouseup', onClick)
                return;
            }
            console.log('click');
            // leftTextProps.left.set('0%');
        }
        document.addEventListener('mouseup', onClick);

        return () => document.removeEventListener('mouseup', onClick);
    }, [])

    if (isFinished) {
        return <>{children}</>;
    }


    return <div className={'intro-canvas'}>
        <animated.div style={{...leftTextProps as any}}>test</animated.div>
        <animated.div style={{...rightTextProps as any}}>test2</animated.div>
    </div>
}
