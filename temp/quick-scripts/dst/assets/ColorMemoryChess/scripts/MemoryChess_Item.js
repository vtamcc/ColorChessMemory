
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fa1d0bwopCC5O2x8Lygkqa', 'MemoryChess_Item');
// ColorMemoryChess/scripts/MemoryChess_Item.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChess_Item = /** @class */ (function (_super) {
    __extends(MemoryChess_Item, _super);
    function MemoryChess_Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.sprItem = null;
        _this.sprItemBack = null;
        return _this;
    }
    MemoryChess_Item.prototype.start = function () {
    };
    MemoryChess_Item.prototype.setData = function (id) {
        this.id = id;
        //this.label.string = id + ' ';
        this.sprItem.spriteFrame = MemoryChess_GamePlay_1.default.instance.listSpfChess[id];
        //this.sprItem.spriteFrame = 
    };
    MemoryChess_Item.prototype.clickItem = function () {
        if (MemoryChess_GamePlay_1.default.instance.isClickItem) {
            MemoryChess_GamePlay_1.default.instance.checkIdColor(this.id, this.node, this.sprItemBack);
            MemoryChess_GamePlay_1.default.instance.isClickItem = false;
            this.scheduleOnce(function () {
                MemoryChess_GamePlay_1.default.instance.isClick = false;
            }, 1.5);
            //     console.log("is click ",  MemoryChess_GamePlay.instance.isClick )
        }
        else {
            console.log("Chua click xuc xac ");
        }
    };
    __decorate([
        property(cc.Label)
    ], MemoryChess_Item.prototype, "label", void 0);
    __decorate([
        property(cc.Sprite)
    ], MemoryChess_Item.prototype, "sprItem", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_Item.prototype, "sprItemBack", void 0);
    MemoryChess_Item = __decorate([
        ccclass
    ], MemoryChess_Item);
    return MemoryChess_Item;
}(cc.Component));
exports.default = MemoryChess_Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQWlDaEMsQ0FBQztJQTdCRyxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRSw2QkFBNkI7SUFFakMsQ0FBQztJQUtELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRWhGLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsOEJBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDbEQsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ04sd0VBQXdFO1NBQzNFO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7SUFFTCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNVO0lBVFgsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EwQ3BDO0lBQUQsdUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzZDLEVBQUUsQ0FBQyxTQUFTLEdBMEN6RDtrQkExQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2FtZVBsYXkgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2FtZVBsYXlcIjtcbmltcG9ydCBNZW1vcnlDaGVzc19HbG9iYWwgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2xvYmFsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlDaGVzc19JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJJdGVtOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3BySXRlbUJhY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaWQ7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNldERhdGEoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAvL3RoaXMubGFiZWwuc3RyaW5nID0gaWQgKyAnICc7XG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmxpc3RTcGZDaGVzc1tpZF07XG4gICAgICAgIC8vdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gXG5cbiAgICB9XG5cblxuXG5cbiAgICBjbGlja0l0ZW0oKSB7XG4gICAgICAgIGlmIChNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSkge1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2FtZVBsYXkuaW5zdGFuY2UuY2hlY2tJZENvbG9yKHRoaXMuaWQsIHRoaXMubm9kZSwgdGhpcy5zcHJJdGVtQmFjaylcbiAgICAgICAgICAgXG4gICAgICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sMS41KVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaXMgY2xpY2sgXCIsICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2h1YSBjbGljayB4dWMgeGFjIFwiKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbn1cbiJdfQ==