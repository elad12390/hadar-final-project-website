import {useEffect, useState} from "react";

export enum Language {
    ERROR,
    ENGLISH,
    HEBREW
}

export const LanguageSelector = (params: {language: Language, onClick?: (language: Language) => void}) => {
    const hebrewWidth = 43;
    const englishWidth = 67;

    return <div style={{
        position: 'relative',
        display: "flex",
        flexDirection: "row",
        gap: '1rem',
        fontSize: 20,
        width: `calc(${hebrewWidth}px + ${englishWidth}px + 1rem)`
    }}>
        <div onClick={() => params.onClick?.(Language.ENGLISH)} style={{cursor: 'pointer'}}>English</div>
        <div onClick={() => params.onClick?.(Language.HEBREW)} style={{cursor: 'pointer'}}>עברית</div>
        <div style={{
            position: 'absolute',
            background: "#fbfaf8",
            height: 1,
            bottom: 0,
            left: params.language === Language.ENGLISH ? 0 : `calc(100% - ${hebrewWidth}px)`,
            width: params.language === Language.ENGLISH ? englishWidth : hebrewWidth,
            transition: 'left .2s ease-in-out, width .2s ease-in-out',
        }}></div>
    </div>
}