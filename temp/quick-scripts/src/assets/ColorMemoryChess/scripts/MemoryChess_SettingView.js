"use strict";
cc._RF.push(module, 'ccba8GxYh9Csos3qndju800', 'MemoryChess_SettingView');
// ColorMemoryChess/scripts/MemoryChess_SettingView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChess_SettingView = /** @class */ (function (_super) {
    __extends(MemoryChess_SettingView, _super);
    function MemoryChess_SettingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sliderMusic = null;
        _this.handleMusic = null;
        _this.nodeBarMusic = null;
        _this.sliderSound = null;
        _this.handleSound = null;
        _this.nodeBarSound = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MemoryChess_SettingView.prototype.onLoad = function () {
        // this.updateBarSound();
        // this.updateBarMusic();
        var savedMusicVolume = localStorage.getItem('musicBgVolume');
        if (savedMusicVolume !== null) {
            MemoryChess_Global_1.default.volumMusic = JSON.parse(savedMusicVolume);
            this.sliderMusic.progress = MemoryChess_Global_1.default.volumMusic;
            this.nodeBarMusic.width = this.nodeBarMusic.parent.width * MemoryChess_Global_1.default.volumMusic;
            MemoryChess_Global_1.default.soundManager.volumeMusicBg(MemoryChess_Global_1.default.volumMusic);
            console.log("volume ", MemoryChess_Global_1.default.volumMusic);
        }
        var saveSoundVolume = localStorage.getItem('soundVolume');
        if (saveSoundVolume !== null) {
            MemoryChess_Global_1.default.volumSound = JSON.parse(saveSoundVolume);
            this.sliderSound.progress = MemoryChess_Global_1.default.volumSound;
            this.nodeBarSound.width = this.nodeBarSound.parent.width * MemoryChess_Global_1.default.volumSound;
            MemoryChess_Global_1.default.soundManager.updateBarSound(MemoryChess_Global_1.default.volumSound);
        }
        this.sliderMusic.node.on('slide', this.updateBarMusic, this);
        this.sliderSound.node.on('slide', this.updateBarSound, this);
    };
    MemoryChess_SettingView.prototype.start = function () {
    };
    MemoryChess_SettingView.prototype.updateBarMusic = function () {
        var sliderValue = this.sliderMusic.progress;
        var maxBarWidth = this.nodeBarMusic.parent.width;
        this.nodeBarMusic.width = maxBarWidth * sliderValue;
        MemoryChess_Global_1.default.soundManager.volumeMusicBg(sliderValue);
        cc.sys.localStorage.setItem('musicBgVolume', sliderValue);
    };
    MemoryChess_SettingView.prototype.updateBarSound = function () {
        var sliderValue = this.sliderSound.progress;
        var maxBarWidth = this.nodeBarSound.parent.width;
        this.nodeBarSound.width = maxBarWidth * sliderValue;
        MemoryChess_Global_1.default.soundManager.updateBarSound(sliderValue);
        cc.sys.localStorage.setItem('soundVolume', sliderValue);
    };
    MemoryChess_SettingView.prototype.onClose = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        this.node.destroy();
    };
    __decorate([
        property(cc.Slider)
    ], MemoryChess_SettingView.prototype, "sliderMusic", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_SettingView.prototype, "handleMusic", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_SettingView.prototype, "nodeBarMusic", void 0);
    __decorate([
        property(cc.Slider)
    ], MemoryChess_SettingView.prototype, "sliderSound", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_SettingView.prototype, "handleSound", void 0);
    __decorate([
        property(cc.Node)
    ], MemoryChess_SettingView.prototype, "nodeBarSound", void 0);
    MemoryChess_SettingView = __decorate([
        ccclass
    ], MemoryChess_SettingView);
    return MemoryChess_SettingView;
}(cc.Component));
exports.default = MemoryChess_SettingView;

cc._RF.pop();