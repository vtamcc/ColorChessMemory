"use strict";
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