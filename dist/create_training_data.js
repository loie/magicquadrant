"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Interfaces_1 = require("./Interfaces");
const Helper_1 = require("./Helper");
const scaledValueInRange = (minimum, maximum, scaled) => {
    console.assert(0 <= scaled && scaled <= 1);
    return minimum + (scaled * (maximum - minimum));
};
const emptyArray = new Array(10).fill(0);
const minimum = 8.7;
const maximum = 96.981;
// const middle: number = scaledValueInRange(minimum, maximum, 0.5)
const randomPoints = emptyArray
    .map(_ => {
    const xScale = Math.random();
    const yScale = Math.random();
    const category = xScale < 0.5 ?
        (yScale < 0.5 ? Interfaces_1.GartnerCategory.NichePlayer : Interfaces_1.GartnerCategory.Visionary) :
        (yScale < 0.5 ? Interfaces_1.GartnerCategory.Challenger : Interfaces_1.GartnerCategory.Leader);
    const point = {
        x: scaledValueInRange(minimum, maximum, xScale),
        y: scaledValueInRange(minimum, maximum, yScale),
        xScale: xScale,
        yScale: yScale,
        category: category
    };
    return point;
});
console.log(randomPoints);
const masterSVG = fs.readFileSync("../resources/magic_quadrant_opt.svg", "utf-8");
Helper_1.debug(masterSVG);
