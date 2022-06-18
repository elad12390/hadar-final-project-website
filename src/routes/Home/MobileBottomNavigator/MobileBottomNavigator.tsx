import React, {FunctionComponent} from "react";
import './MobileBottomNavigator.scss'
import {songSections} from "../../../assets/data";

export const MobileBottomNavigator: FunctionComponent<any> = ({selectedSection, onChangeIdx}) => {
    const onPrev = () => {
        let newIdx = selectedSection?.sectionIdx - 1;
        if (newIdx < 0) {
            newIdx = songSections.length - 1;
        }
        onChangeIdx(newIdx);
    };

    const onNext = () => {
        onChangeIdx((selectedSection?.sectionIdx + 1) % songSections.length);
    };

    return (
        <div className={"bottom-navigator"}>
            <div className={'side-button prev'} onClick={onPrev}>prev</div>
            <div className={'current'}>{selectedSection?.section?.title.split('.').join('. ')}</div>
            <div className={'side-button next'} onClick={onNext}>next</div>
        </div>
    )
}
