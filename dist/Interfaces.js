"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GartnerCategory;
(function (GartnerCategory) {
    GartnerCategory["NichePlayer"] = "niche player";
    GartnerCategory["Challenger"] = "challenger";
    GartnerCategory["Visionary"] = "visionary";
    GartnerCategory["Leader"] = "leader";
})(GartnerCategory = exports.GartnerCategory || (exports.GartnerCategory = {}));
class GartnerPoint {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xScale = 0;
        this.yScale = 0;
        this.category = GartnerCategory.NichePlayer;
    }
}
exports.GartnerPoint = GartnerPoint;
