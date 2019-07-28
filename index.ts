type tweenFunction = (value: number) => any;

interface tweenOptions {
  frameRate?: number;
  count?: number;
  length?: number;
  min?: number;
  max?: number;
}
interface tOCount extends tweenOptions {
  count: number;
}
interface tOlen extends tweenOptions {
  frameRate: number;
  length: number;
}
type fInput = tOlen | tOCount;
export const myTween = (
  tween: tweenFunction,
  { frameRate, count, length, min, max }: fInput
) => {
  let mapF = (v: number) => v;
  if (max !== undefined) {
    let m = (min ? <number>min : 0) as number;
    mapF = v => {
      return m + v * (max - m);
    };
  }
  if (count === undefined) {
    count = Math.floor(<number>length / (1000 / (frameRate || 60))) as number;
  }
  count as number;
  let stopped = false;
  let progress = 0;
  return {
    update: () => {
      if (progress < <number>count && !stopped) {
        tween(mapF(progress / <number>count));
        progress++;
      }
    },
    stop: () => {
      stopped = true;
    },

    get value(): number {
      return mapF(progress / <number>count);
    },
  };
};
