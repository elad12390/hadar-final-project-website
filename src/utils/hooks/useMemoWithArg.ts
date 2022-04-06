/**
 * For pure functions
 * @param calculation
 * @param dependencies
 */
import {useCallback, useRef} from "react";

export const useMemoWithArg = (calculation: (arg: any) => any, dependencies: any[]) => {
    const cache = useRef(new Map());
    let deps = useRef(dependencies);

    return useCallback((arg: any) => {
        if (deps.current !== dependencies) {
            deps.current = dependencies;
            cache.current.clear();
        }

        if (cache.current.has(arg)) {
            return cache.current.get(arg);
        }

        const result = calculation(arg);
        cache.current.set(arg, result);
        return result;
    }, [calculation, cache, dependencies])
}
