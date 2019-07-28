declare type tweenFunction = (value: number) => any;
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
declare type fInput = tOlen | tOCount;
export declare const myTween: (tween: tweenFunction, { frameRate, count, length, min, max }: fInput) => {
    update: () => void;
    stop: () => void;
    readonly value: number;
};
export {};
