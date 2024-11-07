
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ColorMemoryChess/scripts/MemoryChess_GamePlay');
require('./assets/ColorMemoryChess/scripts/MemoryChess_Global');
require('./assets/ColorMemoryChess/scripts/MemoryChess_Item');
require('./assets/ColorMemoryChess/scripts/MemoryChess_Main');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    MemoryChess_Global.arrColor = [1, 2, 3, 4, 5, 6];
    MemoryChess_Global = __decorate([
        ccclass
    ], MemoryChess_Global);
    return MemoryChess_Global;
}());
exports.default = MemoryChess_Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQUdBLENBQUM7SUFEVSwyQkFBUSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUZmLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBR3RDO0lBQUQseUJBQUM7Q0FIRCxBQUdDLElBQUE7a0JBSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeUNoZXNzX0dsb2JhbHtcblxuICAgIHN0YXRpYyBhcnJDb2xvciA9IFsxLDIsMyw0LDUsNl07XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed6a14XhCpIy4OAhAweV4OT', 'MemoryChess_Main');
// ColorMemoryChess/scripts/MemoryChess_Main.ts

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
var MemoryChess_Main = /** @class */ (function (_super) {
    __extends(MemoryChess_Main, _super);
    function MemoryChess_Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGamePlay = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MemoryChess_Main.prototype.clickPlay = function () {
        var gamePlay = cc.instantiate(this.prfGamePlay).getComponent(MemoryChess_GamePlay_1.default);
        this.node.addChild(gamePlay.node);
    };
    MemoryChess_Main.prototype.start = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], MemoryChess_Main.prototype, "prfGamePlay", void 0);
    MemoryChess_Main = __decorate([
        ccclass
    ], MemoryChess_Main);
    return MemoryChess_Main;
}(cc.Component));
exports.default = MemoryChess_Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFFcEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFtQkM7UUFmRyxpQkFBVyxHQUFjLElBQUksQ0FBQzs7UUFjOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9DQUFTLEdBQVQ7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsOEJBQW9CLENBQUMsQ0FBQTtRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUpiLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbUJwQztJQUFELHVCQUFDO0NBbkJELEFBbUJDLENBbkI2QyxFQUFFLENBQUMsU0FBUyxHQW1CekQ7a0JBbkJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE1lbW9yeUNoZXNzX0dhbWVQbGF5IGZyb20gXCIuL01lbW9yeUNoZXNzX0dhbWVQbGF5XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZVBsYXk6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIGNsaWNrUGxheSgpIHtcbiAgICAgICAgbGV0IGdhbWVQbGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lUGxheSkuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0dhbWVQbGF5KVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVBsYXkubm9kZSk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba8de1b+CZMyry0wTCJEqbZ', 'MemoryChess_GamePlay');
// ColorMemoryChess/scripts/MemoryChess_GamePlay.ts

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
var MemoryChess_Global_1 = require("./MemoryChess_Global");
var MemoryChess_Item_1 = require("./MemoryChess_Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChess_GamePlay = /** @class */ (function (_super) {
    __extends(MemoryChess_GamePlay, _super);
    function MemoryChess_GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfItem = null;
        _this.nodeItem = null;
        _this.nodeDice = null;
        _this.spfDice = null;
        _this.listSpfChess = [];
        _this.listAnimation = [];
        _this.numCircles = 3;
        _this.listColor = [];
        _this.listIdColor = [];
        _this.isClick = false;
        _this.isClickItem = false;
        return _this;
        // update (dt) {}
    }
    MemoryChess_GamePlay_1 = MemoryChess_GamePlay;
    // LIFE-CYCLE CALLBACKS:
    MemoryChess_GamePlay.prototype.onLoad = function () {
        MemoryChess_GamePlay_1.instance = this;
        this.randomColor();
        this.shuffle();
        this.renItem();
    };
    MemoryChess_GamePlay.prototype.randomColor = function () {
        for (var i = 0; i < MemoryChess_Global_1.default.arrColor.length; i++) {
            this.listColor.push(MemoryChess_Global_1.default.arrColor[i]);
            this.listColor.push(MemoryChess_Global_1.default.arrColor[i]);
            this.listColor.push(MemoryChess_Global_1.default.arrColor[i]);
            this.listColor.push(MemoryChess_Global_1.default.arrColor[i]);
        }
        var ramdomIndex = Math.floor(Math.random() * 6) + 1;
        this.listColor.push(ramdomIndex);
    };
    MemoryChess_GamePlay.prototype.shuffle = function () {
        var _a;
        for (var i = this.listColor.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.listColor[j], this.listColor[i]], this.listColor[i] = _a[0], this.listColor[j] = _a[1];
        }
        console.log("list Color ", this.listColor);
    };
    MemoryChess_GamePlay.prototype.renItem = function () {
        // let arrRadius = [200, 120, 0];
        // let numPiecesInCircles = [16, 8, 1];
        // for (let circle = 0; circle < this.numCircles; circle++) {
        //     let radius = arrRadius[circle];
        //     let numPiecesInCircle = numPiecesInCircles[circle];
        //     for (let i = 0; i < numPiecesInCircle; i++) {
        //         let angle = (i / numPiecesInCircle) * Math.PI * 2;
        //         let x = Math.cos(angle) * radius;
        //         let y = Math.sin(angle) * radius;
        //         let itemNode = cc.instantiate(this.prfItem);
        //         let item = itemNode.getComponent(MemoryChess_Item);
        //         itemNode.setPosition(x, y);
        //         item.setData(this.listColor[i]);
        //         this.nodeItem.addChild(itemNode);
        //     }
        // }
        var gridSize = 5;
        var cellSpacing = 35;
        var startX = -(gridSize - 1) * (this.prfItem.data.width + cellSpacing) / 2;
        var startY = (gridSize - 1) * (this.prfItem.data.height + cellSpacing) / 2;
        for (var i = 0; i < this.listColor.length; i++) {
            var row = Math.floor(i / gridSize);
            var col = i % gridSize;
            // let item = cc.instantiate(this.prfItem).getComponent(MemoryChess_Item)
            // item.setData(this.listColor[i]);
            // this.nodeItem.addChild(item.node);
            var item = cc.instantiate(this.prfItem).getComponent(MemoryChess_Item_1.default);
            item.setData(this.listColor[i]);
            var x = startX + col * (item.node.width + cellSpacing);
            var y = startY - row * (item.node.height + cellSpacing);
            item.node.setPosition(x, y);
            this.moveChessBack(item.sprItemBack);
            this.nodeItem.addChild(item.node);
        }
    };
    MemoryChess_GamePlay.prototype.clickRoll = function () {
        if (this.isClick) {
            return;
        }
        var idColor = Math.floor(Math.random() * 6) + 1;
        this.nodeDice.getComponent(cc.Animation).play(this.listAnimation[idColor].name);
        this.listIdColor.push(idColor);
        console.log("idColor ", this.listIdColor);
        this.isClickItem = true;
        this.isClick = true;
        console.log('isClick ', this.isClick);
    };
    MemoryChess_GamePlay.prototype.moveChessBack = function (node) {
        var originalY = node.y;
        cc.tween(node)
            .to(0.5, { y: 68 })
            .delay(0.5)
            .to(0.5, { y: originalY })
            .start();
    };
    MemoryChess_GamePlay.prototype.moveToCenterAndDestroy = function (node, disableNode) {
        var _this = this;
        var centerX = 0;
        var centerY = 0;
        node.zIndex = 100;
        disableNode.active = false;
        cc.tween(node)
            .to(0.5, { x: centerX, y: centerY, scale: 1.5 })
            .call(function () {
            _this.scheduleOnce(function () {
                node.destroy();
            }, 0.5);
        })
            .start();
    };
    MemoryChess_GamePlay.prototype.moveToCenterAndReturn = function (node, disableNode) {
        var centerX = 0;
        var centerY = 0;
        var originalX = node.x;
        var originalY = node.y;
        node.zIndex = 100;
        disableNode.active = false;
        cc.tween(node)
            .to(0.5, { x: centerX, y: centerY, scale: 1.5 })
            .delay(0.5)
            .call(function () {
            disableNode.active = true;
        })
            .to(0.5, { x: originalX, y: originalY, scale: 1.0 })
            .start();
    };
    MemoryChess_GamePlay.prototype.checkIdColor = function (idColor, node, disableNode) {
        console.log("listColor ", this.listColor);
        if (this.listIdColor[0] == idColor) {
            console.log("dung ");
            var index = this.listColor.indexOf(idColor);
            if (index !== -1) {
                this.listColor.splice(index, 1);
            }
            this.moveToCenterAndDestroy(node, disableNode);
        }
        else {
            console.log("Sai ");
            this.moveToCenterAndReturn(node, disableNode);
        }
        if (this.listColor.length == 0) {
            this.isClick = true;
            console.log("Win");
        }
        console.log("listColor ", this.listColor);
        this.listIdColor = [];
    };
    MemoryChess_GamePlay.prototype.onClickBack = function () {
        this.node.destroy();
    };
    MemoryChess_GamePlay.prototype.start = function () {
    };
    var MemoryChess_GamePlay_1;
    MemoryChess_GamePlay.instance = null;
    __decorate([
        property(cc.Prefab)
    ], MemoryChess_GamePlay.prototype, "prfItem", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_GamePlay.prototype, "nodeItem", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_GamePlay.prototype, "nodeDice", void 0);
    __decorate([
        property(cc.Sprite)
    ], MemoryChess_GamePlay.prototype, "spfDice", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MemoryChess_GamePlay.prototype, "listSpfChess", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], MemoryChess_GamePlay.prototype, "listAnimation", void 0);
    MemoryChess_GamePlay = MemoryChess_GamePlay_1 = __decorate([
        ccclass
    ], MemoryChess_GamePlay);
    return MemoryChess_GamePlay;
}(cc.Component));
exports.default = MemoryChess_GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMkRBQXNEO0FBQ3RELHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQXFNQztRQWxNRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBSTFCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUdwQyxtQkFBYSxHQUF1QixFQUFFLENBQUM7UUFDdkMsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixpQkFBVyxHQUFHLEtBQUssQ0FBQzs7UUE2S3BCLGlCQUFpQjtJQUNyQixDQUFDOzZCQXJNb0Isb0JBQW9CO0lBeUJyQyx3QkFBd0I7SUFFeEIscUNBQU0sR0FBTjtRQUNJLHNCQUFvQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBR0QsMENBQVcsR0FBWDtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxF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QXFNQyxDQXJNaUQsRUFBRSxDQUFDLFNBQVMsR0FxTTdEO2tCQXJNb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBNZW1vcnlDaGVzc19HbG9iYWwgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2xvYmFsXCI7XG5pbXBvcnQgTWVtb3J5Q2hlc3NfSXRlbSBmcm9tIFwiLi9NZW1vcnlDaGVzc19JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlDaGVzc19HYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTWVtb3J5Q2hlc3NfR2FtZVBsYXkgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlSXRlbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlRGljZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwZkRpY2U6IGNjLlNwcml0ZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmQ2hlc3M6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb25DbGlwKVxuICAgIGxpc3RBbmltYXRpb246IGNjLkFuaW1hdGlvbkNsaXBbXSA9IFtdO1xuICAgIG51bUNpcmNsZXMgPSAzO1xuICAgIGxpc3RDb2xvciA9IFtdO1xuICAgIGxpc3RJZENvbG9yID0gW107XG4gICAgaXNDbGljayA9IGZhbHNlO1xuICAgIGlzQ2xpY2tJdGVtID0gZmFsc2U7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2FtZVBsYXkuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnJhbmRvbUNvbG9yKCk7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLnJlbkl0ZW0oKTtcblxuICAgIH1cblxuXG4gICAgcmFuZG9tQ29sb3IoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVtb3J5Q2hlc3NfR2xvYmFsLmFyckNvbG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFtZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgICAgIHRoaXMubGlzdENvbG9yLnB1c2gocmFtZG9tSW5kZXgpO1xuXG4gICAgfVxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdENvbG9yLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFt0aGlzLmxpc3RDb2xvcltpXSwgdGhpcy5saXN0Q29sb3Jbal1dID0gW3RoaXMubGlzdENvbG9yW2pdLCB0aGlzLmxpc3RDb2xvcltpXV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0IENvbG9yIFwiLCB0aGlzLmxpc3RDb2xvcik7XG4gICAgfVxuXG4gICAgcmVuSXRlbSgpIHtcbiAgICAgICAgLy8gbGV0IGFyclJhZGl1cyA9IFsyMDAsIDEyMCwgMF07XG4gICAgICAgIC8vIGxldCBudW1QaWVjZXNJbkNpcmNsZXMgPSBbMTYsIDgsIDFdO1xuXG4gICAgICAgIC8vIGZvciAobGV0IGNpcmNsZSA9IDA7IGNpcmNsZSA8IHRoaXMubnVtQ2lyY2xlczsgY2lyY2xlKyspIHtcbiAgICAgICAgLy8gICAgIGxldCByYWRpdXMgPSBhcnJSYWRpdXNbY2lyY2xlXTtcbiAgICAgICAgLy8gICAgIGxldCBudW1QaWVjZXNJbkNpcmNsZSA9IG51bVBpZWNlc0luQ2lyY2xlc1tjaXJjbGVdO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QaWVjZXNJbkNpcmNsZTsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGFuZ2xlID0gKGkgLyBudW1QaWVjZXNJbkNpcmNsZSkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgLy8gICAgICAgICBsZXQgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgLy8gICAgICAgICBsZXQgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pO1xuICAgICAgICAvLyAgICAgICAgIGxldCBpdGVtID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0l0ZW0pO1xuICAgICAgICAvLyAgICAgICAgIGl0ZW1Ob2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAvLyAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmxpc3RDb2xvcltpXSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlSXRlbS5hZGRDaGlsZChpdGVtTm9kZSk7XG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgZ3JpZFNpemUgPSA1O1xuICAgICAgICBsZXQgY2VsbFNwYWNpbmcgPSAzNTtcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oZ3JpZFNpemUgLSAxKSAqICh0aGlzLnByZkl0ZW0uZGF0YS53aWR0aCArIGNlbGxTcGFjaW5nKSAvIDI7XG4gICAgICAgIGxldCBzdGFydFkgPSAoZ3JpZFNpemUgLSAxKSAqICh0aGlzLnByZkl0ZW0uZGF0YS5oZWlnaHQgKyBjZWxsU3BhY2luZykgLyAyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGkgLyBncmlkU2l6ZSk7XG4gICAgICAgICAgICBsZXQgY29sID0gaSAlIGdyaWRTaXplO1xuXG4gICAgICAgICAgICAvLyBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbSkuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0l0ZW0pXG4gICAgICAgICAgICAvLyBpdGVtLnNldERhdGEodGhpcy5saXN0Q29sb3JbaV0pO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlSXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChNZW1vcnlDaGVzc19JdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmxpc3RDb2xvcltpXSk7XG4gICAgICAgICAgICBsZXQgeCA9IHN0YXJ0WCArIGNvbCAqIChpdGVtLm5vZGUud2lkdGggKyBjZWxsU3BhY2luZyk7XG4gICAgICAgICAgICBsZXQgeSA9IHN0YXJ0WSAtIHJvdyAqIChpdGVtLm5vZGUuaGVpZ2h0ICsgY2VsbFNwYWNpbmcpO1xuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlQ2hlc3NCYWNrKGl0ZW0uc3BySXRlbUJhY2spO1xuICAgICAgICAgICAgdGhpcy5ub2RlSXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tSb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlkQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgICAgIHRoaXMubm9kZURpY2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSh0aGlzLmxpc3RBbmltYXRpb25baWRDb2xvcl0ubmFtZSk7XG4gICAgICAgIHRoaXMubGlzdElkQ29sb3IucHVzaChpZENvbG9yKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpZENvbG9yIFwiLCB0aGlzLmxpc3RJZENvbG9yKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrSXRlbSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG5cblxuICAgICAgICBjb25zb2xlLmxvZygnaXNDbGljayAnLCB0aGlzLmlzQ2xpY2spO1xuXG5cbiAgICB9XG5cbiAgICBtb3ZlQ2hlc3NCYWNrKG5vZGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsWSA9IG5vZGUueTtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgLnRvKDAuNSwge3k6IDY4IH0pXG4gICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgIC50bygwLjUsIHt5OiBvcmlnaW5hbFl9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9DZW50ZXJBbmREZXN0cm95KG5vZGUsIGRpc2FibGVOb2RlKSB7XG4gICAgICAgIGxldCBjZW50ZXJYID0gMDtcbiAgICAgICAgbGV0IGNlbnRlclkgPSAwO1xuICAgICAgICBub2RlLnpJbmRleCA9IDEwMDtcbiAgICAgICAgZGlzYWJsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclksIHNjYWxlOiAxLjUgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIG1vdmVUb0NlbnRlckFuZFJldHVybihub2RlLCBkaXNhYmxlTm9kZSkge1xuXG4gICAgICAgIGxldCBjZW50ZXJYID0gMDtcbiAgICAgICAgbGV0IGNlbnRlclkgPSAwO1xuICAgICAgICBsZXQgb3JpZ2luYWxYID0gbm9kZS54O1xuICAgICAgICBsZXQgb3JpZ2luYWxZID0gbm9kZS55O1xuICAgICAgICBub2RlLnpJbmRleCA9IDEwMDtcbiAgICAgICAgZGlzYWJsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclksIHNjYWxlOiAxLjUgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IG9yaWdpbmFsWCwgeTogb3JpZ2luYWxZLCBzY2FsZTogMS4wIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBjaGVja0lkQ29sb3IoaWRDb2xvciwgbm9kZSwgZGlzYWJsZU5vZGUpIHtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0Q29sb3IgXCIsIHRoaXMubGlzdENvbG9yKTtcbiAgICAgICAgaWYgKHRoaXMubGlzdElkQ29sb3JbMF0gPT0gaWRDb2xvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkdW5nIFwiKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubGlzdENvbG9yLmluZGV4T2YoaWRDb2xvcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q29sb3Iuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9DZW50ZXJBbmREZXN0cm95KG5vZGUsIGRpc2FibGVOb2RlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYWkgXCIpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG9DZW50ZXJBbmRSZXR1cm4obm9kZSwgZGlzYWJsZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdENvbG9yLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaW5cIik7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0Q29sb3IgXCIsIHRoaXMubGlzdENvbG9yKTtcbiAgICAgICAgdGhpcy5saXN0SWRDb2xvciA9IFtdO1xuICAgIH1cblxuICAgIFxuICAgIG9uQ2xpY2tCYWNrKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        this.label.string = id + ' ';
        this.sprItem.spriteFrame = MemoryChess_GamePlay_1.default.instance.listSpfChess[id];
        //this.sprItem.spriteFrame = 
    };
    MemoryChess_Item.prototype.clickItem = function () {
        if (MemoryChess_GamePlay_1.default.instance.isClickItem) {
            MemoryChess_GamePlay_1.default.instance.checkIdColor(this.id, this.node, this.sprItemBack);
            MemoryChess_GamePlay_1.default.instance.isClick = false;
            MemoryChess_GamePlay_1.default.instance.isClickItem = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF1Q0M7UUFwQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQThCaEMsQ0FBQztJQTFCRyxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsNkJBQTZCO0lBRWpDLENBQUM7SUFLRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSw4QkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQzNDLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNoRiw4QkFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUM5Qyw4QkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNsRCx3RUFBd0U7U0FDM0U7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN0QztJQUVMLENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1U7SUFUWCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVDcEM7SUFBRCx1QkFBQztDQXZDRCxBQXVDQyxDQXZDNkMsRUFBRSxDQUFDLFNBQVMsR0F1Q3pEO2tCQXZDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBNZW1vcnlDaGVzc19HYW1lUGxheSBmcm9tIFwiLi9NZW1vcnlDaGVzc19HYW1lUGxheVwiO1xuaW1wb3J0IE1lbW9yeUNoZXNzX0dsb2JhbCBmcm9tIFwiLi9NZW1vcnlDaGVzc19HbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeUNoZXNzX0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckl0ZW06IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcHJJdGVtQmFjazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBpZDtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgc2V0RGF0YShpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gaWQgKyAnICc7XG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmxpc3RTcGZDaGVzc1tpZF07XG4gICAgICAgIC8vdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gXG5cbiAgICB9XG5cblxuXG5cbiAgICBjbGlja0l0ZW0oKSB7XG4gICAgICAgIGlmIChNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSkge1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2FtZVBsYXkuaW5zdGFuY2UuY2hlY2tJZENvbG9yKHRoaXMuaWQsIHRoaXMubm9kZSwgdGhpcy5zcHJJdGVtQmFjaylcbiAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmlzQ2xpY2tJdGVtID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpcyBjbGljayBcIiwgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmlzQ2xpY2sgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaHVhIGNsaWNrIHh1YyB4YWMgXCIpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
