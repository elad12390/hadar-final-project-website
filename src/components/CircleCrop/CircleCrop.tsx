import React, {FunctionComponent} from "react";
import './CircleCrop.scss'
import {SongSection} from "../../models/general-models";

export interface CircleCropProps {
    size: number;
    models: SongSection[];
    selectedIdx?: number | null;
    onSelect?: (selection: SongSection, sectionIdx: number) => void;
}

export const CircleCrop: FunctionComponent<CircleCropProps> = (props) => {
    let length = 0;
    const textButtons = props.models.map((songSection) => {
        const result = {
            ...songSection,
            offset: length
        }

        length += songSection.title.length + 1
        return result;
    })

    const degPerChar = 360 / 110;

    const calcRotation = () => {
        if (props.selectedIdx === null ||props.selectedIdx === undefined) {
            return 0;
        }
        const selected = textButtons[props.selectedIdx];

        return degPerChar * (selected.offset + (selected.title.length / 2));
    }

    return (
        <span className="circle-drop-shadow">
            <div className="circle-text-wrapper" style={{
                width: props.size,
                height: props.size,
                transform: `rotate(-${calcRotation() - 3}deg)`,
            }}>
                {textButtons.map((section, sectionIdx) =>
                    <span
                        key={section.id}
                        className={`wrapped-word` + (sectionIdx === props.selectedIdx ? ` selected` : ``)}
                        onClick={() => props?.onSelect?.(section, sectionIdx)}
                    >
                        {section.title.split('').map((a, charIdx) =>
                            <span
                                key={'wrapped-word'+sectionIdx+'-char#'+charIdx}
                                style={{height: props.size / 2 + 40}}
                                className={`rotated-char char${section.offset + charIdx + 1}`}>{a}</span>)}
                    </span>
                )}
            </div>
            <div className="CircleCrop" style={{height: props.size, width: props.size}}>
                {props.children}
            </div>
        </span>
    )
}
