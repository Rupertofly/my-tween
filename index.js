export const myTween = (tween, { frameRate, count, length, min, max }) => {
    let mapF = (v) => v;
    if (max !== undefined) {
        let m = (min ? min : 0);
        mapF = v => {
            return m + v * (max - m);
        };
    }
    if (count === undefined) {
        count = Math.floor(length / (1000 / (frameRate || 60)));
    }
    count;
    let stopped = false;
    let progress = 0;
    return {
        update: () => {
            if (progress < count && !stopped) {
                tween(mapF(progress / count));
                progress++;
            }
        },
        stop: () => {
            stopped = true;
        },
    };
};
;
