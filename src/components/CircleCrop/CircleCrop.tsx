import React, {FunctionComponent, useEffect, useMemo, useState} from "react";
import './CircleCrop.scss'
import {SongSection} from "../../models/general-models";
import {useMemoWithArg} from "../../utils/hooks/useMemoWithArg";
import {closestAngle} from "../../utils/fns";

export interface CircleCropProps {
    size: number;
    models: SongSection[];
    selectedIdx?: number | null;
    onSelect?: (selection: SongSection, sectionIdx: number) => void;
}

export const CircleCrop: FunctionComponent<CircleCropProps> = (props) => {
    const letterSpacing = 4;
    const circleCircumference = 360;
    const letterDistanceFromCircle = 60;
    let length = 0;

    const [rotation, setRotation] = useState(0)
    const [prevRotation, setPrevRotation] = useState(0);

    const textButtons = props.models.map((songSection) => {
        const result = {
            ...songSection,
            offset: length
        }

        length += songSection.title.length + letterSpacing
        return result;
    })

    const degPerChar = circleCircumference / length;


    const calcCharRotation = useMemoWithArg((characterIdx) => degPerChar * characterIdx, [degPerChar]);

    useEffect(() => {
        if (props.selectedIdx === null ||props.selectedIdx === undefined) {
            return;
        }
        const selected = textButtons[props.selectedIdx];

        setPrevRotation(rotation);

        const newDeg = -1 * ((degPerChar * (selected.offset + (selected.title.length / 2))) + 12);

        setRotation(closestAngle(prevRotation, newDeg));
    },[degPerChar, textButtons, props.selectedIdx])

    return (
        <>
            <div className="text-border"
                 style={{
                     width: props.size + 150,
                     height: props.size + 150
                 }}
            ></div>
            <div className="text-border"
                 style={{
                     width: props.size + 20,
                     height: props.size + 20
                 }}
            ></div>
            <span className="circle-drop-shadow">
                <span className="circle-text-wrapper" style={{
                    width: props.size,
                    height: props.size,
                    transform: `rotate(${rotation}deg)`,
                }}>
                    {textButtons.map((section, sectionIdx) =>
                        <span
                            key={section.id}
                            className={`wrapped-word` + (sectionIdx === props.selectedIdx ? ` selected` : ``)}
                            onClick={() => props?.onSelect?.(section, sectionIdx)}
                        >
                            {section.title.split('').map((a, charIdx) =>
                                <span
                                    className={`rotated-char`}
                                    key={'wrapped-word'+sectionIdx+'-char#'+charIdx}
                                    style={{
                                        height: props.size / 2 + letterDistanceFromCircle,
                                        top: -letterDistanceFromCircle,
                                        transform: `rotate(${calcCharRotation(section.offset + charIdx + letterSpacing)}deg)`
                                    }}>
                                    <span>{a}</span>
                                </span>
                            )}
                        </span>
                    )}
                </span>
                <div className="CircleCrop" style={{height: props.size, width: props.size}}>
                    {props.children}
                </div>
            </span>
        </>
    )
}
