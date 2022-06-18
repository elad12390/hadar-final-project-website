import {useEffect, useState} from "react";

export const useIsDesktop = () => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(max-width: 480px)');
        if ((!media.matches) !== matches) {
            setMatches(Boolean(!media.matches));
        }
        const listener = () => setMatches(!media.matches);
        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, [matches])

    return matches;
}
