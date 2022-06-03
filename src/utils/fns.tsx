
export const closestAngle = (from: number, to: number) => from + ((((to - from) % 360) + 540) % 360) - 180;

export const throttle = (fn = (...args: any[]) => {}, delay = 300) => {
    const isFinished: { running: boolean } = {
        running: false
    };
    return (...args: any[]) => {
        if (isFinished.running) return;
        isFinished.running = true;
        setTimeout(() => {
            isFinished.running = false;
            fn(...args);
        }, delay);
    }
}

export const convertTimestampToSeconds = (timeStamp: string) => {
    // example '00:00:01,920' => 1.920
    const [hours, minutes, secondsAndMS] = timeStamp.split(':');
    const [seconds, ms] = secondsAndMS.split(',')

    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds) + (Number(ms) / 1000);
}

export const isWithinTimestamps = (startTimestamp: string, value: number, endTimestamp: string) => {
    return value >= convertTimestampToSeconds(startTimestamp) && value < convertTimestampToSeconds(endTimestamp);
}
