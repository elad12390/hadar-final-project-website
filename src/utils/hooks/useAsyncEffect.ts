import React, {useEffect} from 'react';

type Destructor = () => void;

export const useAsyncEffect = (fn: (mounted?: boolean) => Promise<void>, deps?: any[], destructor?: Destructor) => {
    return useEffect(() => {
        let mounted = true;
        fn(mounted);
        return () => {
            mounted = false;
            destructor?.();
        }
    }, deps ?? [])
}
