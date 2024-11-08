"use strict";
cc._RF.push(module, 'b4b0fPA8KdFA5QsurU3Pjy4', 'MemoryChess_GameOver');
// ColorMemoryChess/scripts/MemoryChess_GameOver.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MemoryChess_GamePlay_1 = require("./MemoryChess_GamePlay");
var MemoryChess_Global_1 = require("./MemoryChess_Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChes_GameOver = /** @class */ (function (_super) {
    __extends(MemoryChes_GameOver, _super);
    function MemoryChes_GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MemoryChes_GameOver.prototype.onLoad = function () { };
    MemoryChes_GameOver.prototype.start = function () {
    };
    MemoryChes_GameOver.prototype.showLose = function () {
        this.label.string = "Game Over ";
    };
    MemoryChes_GameOver.prototype.showWin = function () {
        this.label.string = "Win!!!";
    };
    MemoryChes_GameOver.prototype.onClose = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        MemoryChess_GamePlay_1.default.instance.nodeDestroy();
    };
    MemoryChes_GameOver.prototype.onClickReset = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        MemoryChess_GamePlay_1.default.instance.resetGame();
        this.node.destroy();
    };
    MemoryChes_GameOver.prototype.onHome = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        MemoryChess_GamePlay_1.default.instance.nodeDestroy();
    };
    __decorate([
        property(cc.Label)
    ], MemoryChes_GameOver.prototype, "label", void 0);
    __decorate([
        property
    ], MemoryChes_GameOver.prototype, "text", void 0);
    MemoryChes_GameOver = __decorate([
        ccclass
    ], MemoryChes_GameOver);
    return MemoryChes_GameOver;
}(cc.Component));
exports.default = MemoryChes_GameOver;

cc._RF.pop();