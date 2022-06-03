
export interface SongSection {
    id: number;
    title: string;
    description: string;
    lyrics: string;
    image: string;
    videoUrl?: string;
    subtitles?: {
        id: string,
        startTime: string,
        endTime: string,
        text: string
    }[];
}
