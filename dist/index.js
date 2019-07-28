"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTween = function (tween, _a) {
    var frameRate = _a.frameRate, count = _a.count, length = _a.length, min = _a.min, max = _a.max;
    var mapF = function (v) { return v; };
    if (max !== undefined) {
        var m_1 = (min ? min : 0);
        mapF = function (v) {
            return m_1 + v * (max - m_1);
        };
    }
    if (count === undefined) {
        count = Math.floor(length / (1000 / (frameRate || 60)));
    }
    count;
    var stopped = false;
    var progress = 0;
    return {
        update: function () {
            if (progress < count && !stopped) {
                tween(mapF(progress / count));
                progress++;
            }
        },
        stop: function () {
            stopped = true;
        },
        get value() {
            return mapF(progress / count);
        },
    };
};
