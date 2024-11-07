
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29sb3JNZW1vcnlDaGVzc1xcc2NyaXB0c1xcTWVtb3J5Q2hlc3NfTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFFcEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFtQkM7UUFmRyxpQkFBVyxHQUFjLElBQUksQ0FBQzs7UUFjOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9DQUFTLEdBQVQ7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsOEJBQW9CLENBQUMsQ0FBQTtRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUpiLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbUJwQztJQUFELHVCQUFDO0NBbkJELEFBbUJDLENBbkI2QyxFQUFFLENBQUMsU0FBUyxHQW1CekQ7a0JBbkJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2FtZVBsYXkgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2FtZVBsYXlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmZHYW1lUGxheTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIGNsaWNrUGxheSgpIHtcclxuICAgICAgICBsZXQgZ2FtZVBsYXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVQbGF5KS5nZXRDb21wb25lbnQoTWVtb3J5Q2hlc3NfR2FtZVBsYXkpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVQbGF5Lm5vZGUpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
        _this.isPlayerTurn = true;
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
        this.startPlayerTurn();
    };
    MemoryChess_GamePlay.prototype.startPlayerTurn = function () {
        console.log("Luot cua nguoi choi ");
        this.isPlayerTurn = true;
        this.isClick = false;
    };
    MemoryChess_GamePlay.prototype.endPlayerTurn = function () {
        var _this = this;
        this.isClick = true;
        this.scheduleOnce(function () {
            _this.startTurnBot();
        }, 2.5);
    };
    MemoryChess_GamePlay.prototype.startTurnBot = function () {
        console.log("Luot cua nguoi Bot ");
        this.isClick = false;
        this.clickRoll();
        console.log("lengt ", this.node.children.length);
        var ramdomIndex = Math.floor(Math.random() * this.nodeItem.children.length);
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
            var delay = i * 0.2;
            this.moveChessBack(item.sprItemBack, delay);
            this.nodeItem.addChild(item.node);
        }
    };
    MemoryChess_GamePlay.prototype.clickRoll = function () {
        if (this.isClick || !this.isPlayerTurn) {
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
    MemoryChess_GamePlay.prototype.moveChessBack = function (node, delay) {
        var originalY = node.y;
        cc.tween(node)
            .delay(delay)
            .to(0.5, { y: 68 })
            .delay(1)
            .to(0.5, { y: originalY })
            .start();
    };
    MemoryChess_GamePlay.prototype.moveToCenterAndDestroy = function (node, disableNode) {
        var centerX = 0;
        var centerY = 0;
        node.zIndex = 100;
        //disableNode.active = false;
        // cc.tween(node)
        //     .to(0.5, { x: centerX, y: centerY, scale: 1.5 })
        //     .call(() => {
        //         this.scheduleOnce(() => {
        //             node.destroy();
        //         }, 0.5)
        //     })
        //     .start();
        cc.tween(node)
            .to(0.5, { x: centerX, y: centerY, scale: 1.5 })
            .call(function () {
            cc.tween(disableNode)
                .to(0.5, { y: disableNode.y + 65 })
                .delay(0.5)
                .to(0.5, { y: 0 })
                .delay(0.8)
                .call(function () {
                disableNode.active = false;
                node.destroy();
            })
                .start();
        })
            .start();
    };
    MemoryChess_GamePlay.prototype.moveToCenterAndReturn = function (node, disableNode) {
        var centerX = 0;
        var centerY = 0;
        var originalX = node.x;
        var originalY = node.y;
        node.zIndex = 100;
        //disableNode.active = false;
        // cc.tween(node)
        //     .to(0.5, { x: centerX, y: centerY, scale: 1.5 })
        //     .delay(0.5)
        //     .call(() => {
        //         disableNode.active = true;
        //     })
        //     .to(0.5, { x: originalX, y: originalY, scale: 1.0 })
        //     .start();
        cc.tween(node)
            .to(0.5, { x: centerX, y: centerY, scale: 1.5 })
            .delay(0.5)
            .call(function () {
            cc.tween(disableNode)
                .to(0.5, { y: disableNode.y + 65 })
                .delay(0.5)
                .to(0.5, { y: 0 })
                .start();
        })
            .delay(1.5)
            .to(0.5, { x: originalX, y: originalY, scale: 1.0 })
            .call(function () {
            node.zIndex = 1;
        })
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
        if (this.isPlayerTurn) {
            this.endPlayerTurn();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29sb3JNZW1vcnlDaGVzc1xcc2NyaXB0c1xcTWVtb3J5Q2hlc3NfR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMkRBQXNEO0FBQ3RELHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQWdRQztRQTdQRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBSTFCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUdwQyxtQkFBYSxHQUF1QixFQUFFLENBQUM7UUFDdkMsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBWSxHQUFHLElBQUksQ0FBQzs7UUF1T3BCLGlCQUFpQjtJQUNyQixDQUFDOzZCQWhRb0Isb0JBQW9CO0lBeUJyQyx3QkFBd0I7SUFFeEIscUNBQU0sR0FBTjtRQUNJLHNCQUFvQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FB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O1FBSUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBR0QsMENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG9DQUFLLEdBQUw7SUFFQSxDQUFDOztJQTVQYSw2QkFBUSxHQUF5QixJQUFJLENBQUM7SUFFcEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDTTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhEQUNXO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7K0RBQ1k7SUFsQnRCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBZ1F4QztJQUFELDJCQUFDO0NBaFFELEFBZ1FDLENBaFFpRCxFQUFFLENBQUMsU0FBUyxHQWdRN0Q7a0JBaFFvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2xvYmFsIGZyb20gXCIuL01lbW9yeUNoZXNzX0dsb2JhbFwiO1xyXG5pbXBvcnQgTWVtb3J5Q2hlc3NfSXRlbSBmcm9tIFwiLi9NZW1vcnlDaGVzc19JdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTWVtb3J5Q2hlc3NfR2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkl0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVEaWNlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3BmRGljZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdFNwZkNoZXNzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbkNsaXApXHJcbiAgICBsaXN0QW5pbWF0aW9uOiBjYy5BbmltYXRpb25DbGlwW10gPSBbXTtcclxuICAgIG51bUNpcmNsZXMgPSAzO1xyXG4gICAgbGlzdENvbG9yID0gW107XHJcbiAgICBsaXN0SWRDb2xvciA9IFtdO1xyXG4gICAgaXNDbGljayA9IGZhbHNlO1xyXG4gICAgaXNDbGlja0l0ZW0gPSBmYWxzZTtcclxuICAgIGlzUGxheWVyVHVybiA9IHRydWU7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2FtZVBsYXkuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmFuZG9tQ29sb3IoKTtcclxuICAgICAgICB0aGlzLnNodWZmbGUoKTtcclxuICAgICAgICB0aGlzLnJlbkl0ZW0oKTtcclxuICAgICAgICB0aGlzLnN0YXJ0UGxheWVyVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UGxheWVyVHVybigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkx1b3QgY3VhIG5ndW9pIGNob2kgXCIpO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRQbGF5ZXJUdXJuKCkge1xyXG4gICAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybkJvdCgpO1xyXG4gICAgICAgIH0sMi41KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VHVybkJvdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkx1b3QgY3VhIG5ndW9pIEJvdCBcIik7XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbGlja1JvbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0IFwiLCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgICAgICBsZXQgcmFtZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vZGVJdGVtLmNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICB9IFxyXG5cclxuICAgIHJhbmRvbUNvbG9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVtb3J5Q2hlc3NfR2xvYmFsLmFyckNvbG9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENvbG9yLnB1c2goTWVtb3J5Q2hlc3NfR2xvYmFsLmFyckNvbG9yW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q29sb3IucHVzaChNZW1vcnlDaGVzc19HbG9iYWwuYXJyQ29sb3JbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdENvbG9yLnB1c2goTWVtb3J5Q2hlc3NfR2xvYmFsLmFyckNvbG9yW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW1kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKHJhbWRvbUluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2h1ZmZsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5saXN0Q29sb3IubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFt0aGlzLmxpc3RDb2xvcltpXSwgdGhpcy5saXN0Q29sb3Jbal1dID0gW3RoaXMubGlzdENvbG9yW2pdLCB0aGlzLmxpc3RDb2xvcltpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdCBDb2xvciBcIiwgdGhpcy5saXN0Q29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbkl0ZW0oKSB7XHJcbiAgICAgICAgLy8gbGV0IGFyclJhZGl1cyA9IFsyMDAsIDEyMCwgMF07XHJcbiAgICAgICAgLy8gbGV0IG51bVBpZWNlc0luQ2lyY2xlcyA9IFsxNiwgOCwgMV07XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGNpcmNsZSA9IDA7IGNpcmNsZSA8IHRoaXMubnVtQ2lyY2xlczsgY2lyY2xlKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHJhZGl1cyA9IGFyclJhZGl1c1tjaXJjbGVdO1xyXG4gICAgICAgIC8vICAgICBsZXQgbnVtUGllY2VzSW5DaXJjbGUgPSBudW1QaWVjZXNJbkNpcmNsZXNbY2lyY2xlXTtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QaWVjZXNJbkNpcmNsZTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYW5nbGUgPSAoaSAvIG51bVBpZWNlc0luQ2lyY2xlKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcclxuICAgICAgICAvLyAgICAgICAgIGxldCBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbSk7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbSA9IGl0ZW1Ob2RlLmdldENvbXBvbmVudChNZW1vcnlDaGVzc19JdGVtKTtcclxuICAgICAgICAvLyAgICAgICAgIGl0ZW1Ob2RlLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIC8vICAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMubGlzdENvbG9yW2ldKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZUl0ZW0uYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgZ3JpZFNpemUgPSA1O1xyXG4gICAgICAgIGxldCBjZWxsU3BhY2luZyA9IDM1O1xyXG4gICAgICAgIGxldCBzdGFydFggPSAtKGdyaWRTaXplIC0gMSkgKiAodGhpcy5wcmZJdGVtLmRhdGEud2lkdGggKyBjZWxsU3BhY2luZykgLyAyO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAoZ3JpZFNpemUgLSAxKSAqICh0aGlzLnByZkl0ZW0uZGF0YS5oZWlnaHQgKyBjZWxsU3BhY2luZykgLyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENvbG9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGkgLyBncmlkU2l6ZSk7XHJcbiAgICAgICAgICAgIGxldCBjb2wgPSBpICUgZ3JpZFNpemU7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbSkuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0l0ZW0pXHJcbiAgICAgICAgICAgIC8vIGl0ZW0uc2V0RGF0YSh0aGlzLmxpc3RDb2xvcltpXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZUl0ZW0uYWRkQ2hpbGQoaXRlbS5ub2RlKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChNZW1vcnlDaGVzc19JdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMubGlzdENvbG9yW2ldKTtcclxuICAgICAgICAgICAgbGV0IHggPSBzdGFydFggKyBjb2wgKiAoaXRlbS5ub2RlLndpZHRoICsgY2VsbFNwYWNpbmcpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHN0YXJ0WSAtIHJvdyAqIChpdGVtLm5vZGUuaGVpZ2h0ICsgY2VsbFNwYWNpbmcpO1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgIGxldCBkZWxheSA9IGkgKiAwLjI7IFxyXG4gICAgICAgICAgICB0aGlzLm1vdmVDaGVzc0JhY2soaXRlbS5zcHJJdGVtQmFjayxkZWxheSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUl0ZW0uYWRkQ2hpbGQoaXRlbS5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tSb2xsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2sgfHwgIXRoaXMuaXNQbGF5ZXJUdXJuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlkQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgdGhpcy5ub2RlRGljZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KHRoaXMubGlzdEFuaW1hdGlvbltpZENvbG9yXS5uYW1lKTtcclxuICAgICAgICB0aGlzLmxpc3RJZENvbG9yLnB1c2goaWRDb2xvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZENvbG9yIFwiLCB0aGlzLmxpc3RJZENvbG9yKTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2tJdGVtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lzQ2xpY2sgJywgdGhpcy5pc0NsaWNrKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb3ZlQ2hlc3NCYWNrKG5vZGUsIGRlbGF5KSB7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsWSA9IG5vZGUueTtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAuZGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgeTogNjggfSlcclxuICAgICAgICAgICAgLmRlbGF5KDEpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgeTogb3JpZ2luYWxZIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb0NlbnRlckFuZERlc3Ryb3kobm9kZSwgZGlzYWJsZU5vZGUpIHtcclxuICAgICAgICBsZXQgY2VudGVyWCA9IDA7XHJcbiAgICAgICAgbGV0IGNlbnRlclkgPSAwO1xyXG4gICAgICAgIG5vZGUuekluZGV4ID0gMTAwO1xyXG4gICAgICAgIC8vZGlzYWJsZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY2MudHdlZW4obm9kZSlcclxuICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCBzY2FsZTogMS41IH0pXHJcbiAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgLnRvKDAuNSwgeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCBzY2FsZTogMS41IH0pXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MudHdlZW4oZGlzYWJsZU5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IGRpc2FibGVOb2RlLnkgKyA2NSB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHt5OiAwfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjgpIFxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVOb2RlLmFjdGl2ZSA9IGZhbHNlOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVRvQ2VudGVyQW5kUmV0dXJuKG5vZGUsIGRpc2FibGVOb2RlKSB7XHJcblxyXG4gICAgICAgIGxldCBjZW50ZXJYID0gMDtcclxuICAgICAgICBsZXQgY2VudGVyWSA9IDA7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsWCA9IG5vZGUueDtcclxuICAgICAgICBsZXQgb3JpZ2luYWxZID0gbm9kZS55O1xyXG4gICAgICAgIG5vZGUuekluZGV4ID0gMTAwO1xyXG4gICAgICAgIC8vZGlzYWJsZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY2MudHdlZW4obm9kZSlcclxuICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCBzY2FsZTogMS41IH0pXHJcbiAgICAgICAgLy8gICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGRpc2FibGVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeDogb3JpZ2luYWxYLCB5OiBvcmlnaW5hbFksIHNjYWxlOiAxLjAgfSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAudG8oMC41LCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclksIHNjYWxlOiAxLjUgfSlcclxuICAgICAgICAuZGVsYXkoMC41KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4oZGlzYWJsZU5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IGRpc2FibGVOb2RlLnkgKyA2NSB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogMH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kZWxheSgxLjUpXHJcbiAgICAgICAgLnRvKDAuNSwgeyB4OiBvcmlnaW5hbFgsIHk6IG9yaWdpbmFsWSwgc2NhbGU6IDEuMCB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZENvbG9yKGlkQ29sb3IsIG5vZGUsIGRpc2FibGVOb2RlKSB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RDb2xvciBcIiwgdGhpcy5saXN0Q29sb3IpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RJZENvbG9yWzBdID09IGlkQ29sb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkdW5nIFwiKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0Q29sb3IuaW5kZXhPZihpZENvbG9yKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q29sb3Iuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9DZW50ZXJBbmREZXN0cm95KG5vZGUsIGRpc2FibGVOb2RlKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYWkgXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb0NlbnRlckFuZFJldHVybihub2RlLCBkaXNhYmxlTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5saXN0Q29sb3IubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaW5cIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0Q29sb3IgXCIsIHRoaXMubGlzdENvbG9yKTtcclxuICAgICAgICB0aGlzLmxpc3RJZENvbG9yID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyVHVybikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZFBsYXllclR1cm4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBvbkNsaWNrQmFjaygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29sb3JNZW1vcnlDaGVzc1xcc2NyaXB0c1xcTWVtb3J5Q2hlc3NfSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQWlDaEMsQ0FBQztJQTdCRyxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRSw2QkFBNkI7SUFFakMsQ0FBQztJQUtELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRWhGLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsOEJBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDbEQsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ04sd0VBQXdFO1NBQzNFO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7SUFFTCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNVO0lBVFgsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EwQ3BDO0lBQUQsdUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzZDLEVBQUUsQ0FBQyxTQUFTLEdBMEN6RDtrQkExQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBNZW1vcnlDaGVzc19HYW1lUGxheSBmcm9tIFwiLi9NZW1vcnlDaGVzc19HYW1lUGxheVwiO1xyXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2xvYmFsIGZyb20gXCIuL01lbW9yeUNoZXNzX0dsb2JhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeUNoZXNzX0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwckl0ZW06IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzcHJJdGVtQmFjazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaWQ7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoaWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgLy90aGlzLmxhYmVsLnN0cmluZyA9IGlkICsgJyAnO1xyXG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmxpc3RTcGZDaGVzc1tpZF07XHJcbiAgICAgICAgLy90aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgY2xpY2tJdGVtKCkge1xyXG4gICAgICAgIGlmIChNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSkge1xyXG4gICAgICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5jaGVja0lkQ29sb3IodGhpcy5pZCwgdGhpcy5ub2RlLCB0aGlzLnNwckl0ZW1CYWNrKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sMS41KVxyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpcyBjbGljayBcIiwgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmlzQ2xpY2sgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2h1YSBjbGljayB4dWMgeGFjIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29sb3JNZW1vcnlDaGVzc1xcc2NyaXB0c1xcTWVtb3J5Q2hlc3NfR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQUdBLENBQUM7SUFEVSwyQkFBUSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUZmLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBR3RDO0lBQUQseUJBQUM7Q0FIRCxBQUdDLElBQUE7a0JBSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfR2xvYmFse1xyXG5cclxuICAgIHN0YXRpYyBhcnJDb2xvciA9IFsxLDIsMyw0LDUsNl07XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
