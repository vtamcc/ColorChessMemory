"use strict";
cc._RF.push(module, 'f6e94vg/dpF84SQ939DKzwq', 'MemoryChess_Global');
// ColorMemoryChess/scripts/MemoryChess_Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChess_Global = /** @class */ (function () {
    function MemoryChess_Global() {
    }
    MemoryChess_Global.soundManager = null;
    MemoryChess_Global.gameOver = null;
    MemoryChess_Global.volumMusic = 1;
    MemoryChess_Global.heart = 3;
    MemoryChess_Global.volumSound = 1;
    MemoryChess_Global.arrColor = [1, 2, 3, 4, 5, 6];
    MemoryChess_Global = __decorate([
        ccclass
    ], MemoryChess_Global);
    return MemoryChess_Global;
}());
exports.default = MemoryChess_Global;

cc._RF.pop();