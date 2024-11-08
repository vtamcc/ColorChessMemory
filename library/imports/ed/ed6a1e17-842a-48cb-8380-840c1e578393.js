"use strict";
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
var MemoryChess_Global_1 = require("./MemoryChess_Global");
var MemoryChess_SettingView_1 = require("./MemoryChess_SettingView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChess_Main = /** @class */ (function (_super) {
    __extends(MemoryChess_Main, _super);
    function MemoryChess_Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGamePlay = null;
        _this.prfSettingView = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MemoryChess_Main.prototype.onLoad = function () {
        var savedMusicVolume = localStorage.getItem('musicBgVolume');
        var saveSoundVolume = localStorage.getItem('soundVolume');
        this.scheduleOnce(function () {
            if (savedMusicVolume == null) {
                MemoryChess_Global_1.default.soundManager.music_bg.volume = MemoryChess_Global_1.default.volumMusic;
            }
            else {
                MemoryChess_Global_1.default.volumMusic = JSON.parse(savedMusicVolume);
                //console.log("MemoryChess_Global.soundManager.music_bg.volume ",  MemoryChess_Global.volumMusic)
                MemoryChess_Global_1.default.soundManager.music_bg.volume = MemoryChess_Global_1.default.volumMusic;
            }
            if (saveSoundVolume == null) {
                MemoryChess_Global_1.default.soundManager.audioSound_click.volume = MemoryChess_Global_1.default.volumSound;
            }
            else {
                MemoryChess_Global_1.default.volumSound = JSON.parse(saveSoundVolume);
                MemoryChess_Global_1.default.soundManager.audioSound_click.volume = MemoryChess_Global_1.default.volumSound;
                //console.log("MemoryChess_Global.soundManager.audioSound_click.volume ", MemoryChess_Global.volumSound)
            }
        }, 0.5);
    };
    MemoryChess_Main.prototype.clickPlay = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        var gamePlay = cc.instantiate(this.prfGamePlay).getComponent(MemoryChess_GamePlay_1.default);
        this.node.addChild(gamePlay.node);
    };
    MemoryChess_Main.prototype.clickSetting = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        var setting = cc.instantiate(this.prfSettingView).getComponent(MemoryChess_SettingView_1.default);
        this.node.addChild(setting.node);
    };
    MemoryChess_Main.prototype.start = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], MemoryChess_Main.prototype, "prfGamePlay", void 0);
    __decorate([
        property(cc.Prefab)
    ], MemoryChess_Main.prototype, "prfSettingView", void 0);
    MemoryChess_Main = __decorate([
        ccclass
    ], MemoryChess_Main);
    return MemoryChess_Main;
}(cc.Component));
exports.default = MemoryChess_Main;

cc._RF.pop();