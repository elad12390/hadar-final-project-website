import {useEffect, useMemo, useState} from 'react';

export const useMediaQuery = (query: string) => {
    const mediaMatch = useMemo(() => window.matchMedia(query), [query]);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = (e: any) => setMatches(e.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
    });
    return matches;
};
