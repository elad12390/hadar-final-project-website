declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module '*.webm' {
    const src: string;
    export default src;
}

declare module '*.srt' {
    const src: string;
    export default src;
}

declare module '!!raw-loader!*' {
    const content: string;
    export default content;
}
