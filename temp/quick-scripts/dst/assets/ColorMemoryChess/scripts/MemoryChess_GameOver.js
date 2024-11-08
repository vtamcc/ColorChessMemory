
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUVoRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQXlDQztRQXRDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBa0N2QixpQkFBaUI7SUFDckIsQ0FBQztJQWpDRyx3QkFBd0I7SUFFeEIsb0NBQU0sR0FBTixjQUFXLENBQUM7SUFFWixtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUdELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0ksNEJBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hELDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0ksNEJBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hELDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0k7SUFHdkI7UUFEQyxRQUFRO3FEQUNjO0lBTk4sbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0F5Q3ZDO0lBQUQsMEJBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q2dELEVBQUUsQ0FBQyxTQUFTLEdBeUM1RDtrQkF6Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2FtZVBsYXkgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2FtZVBsYXlcIjtcbmltcG9ydCBNZW1vcnlDaGVzc19HbG9iYWwgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc19HYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIFxuXG4gICAgc2hvd0xvc2UoKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJHYW1lIE92ZXIgXCI7XG4gICAgfVxuXG4gICAgc2hvd1dpbigpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIldpbiEhIVwiO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIub25JdGVtQ2xpY2tlZCgpO1xuICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5ub2RlRGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tSZXNldCgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5vbkl0ZW1DbGlja2VkKCk7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLnJlc2V0R2FtZSgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uSG9tZSgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5vbkl0ZW1DbGlja2VkKCk7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLm5vZGVEZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=