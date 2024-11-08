"use strict";
cc._RF.push(module, 'f4566NwCX9FAb0H77fo7uPg', 'MemoryChes_SoundManager');
// ColorMemoryChess/scripts/MemoryChes_SoundManager.ts

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
var MemoryChess_SoundManager = /** @class */ (function (_super) {
    __extends(MemoryChess_SoundManager, _super);
    function MemoryChess_SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music_bg = null;
        _this.audioSound_click = null;
        _this.audio_sfx = null;
        _this.audio_score = null;
        _this.sound_click = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MemoryChess_SoundManager.prototype.onLoad = function () {
        MemoryChess_Global_1.default.soundManager = this;
    };
    MemoryChess_SoundManager.prototype.volumeMusicBg = function (vloume) {
        if (this.music_bg) {
            this.music_bg.volume = vloume;
        }
    };
    MemoryChess_SoundManager.prototype.updateBarSound = function (vloume) {
        MemoryChess_Global_1.default.volumSound = vloume;
    };
    MemoryChess_SoundManager.prototype.playClickSound = function () {
        if (this.audioSound_click && this.sound_click && MemoryChess_Global_1.default.volumSound > 0) {
            this.audioSound_click.stop();
            this.audioSound_click.clip = this.sound_click;
            this.audioSound_click.volume = MemoryChess_Global_1.default.volumSound;
            this.audioSound_click.play();
        }
    };
    MemoryChess_SoundManager.prototype.onItemClicked = function () {
        this.playClickSound();
    };
    // soundClick() {
    // }
    MemoryChess_SoundManager.prototype.start = function () {
    };
    __decorate([
        property(cc.AudioSource)
    ], MemoryChess_SoundManager.prototype, "music_bg", void 0);
    __decorate([
        property(cc.AudioSource)
    ], MemoryChess_SoundManager.prototype, "audioSound_click", void 0);
    __decorate([
        property(cc.AudioSource)
    ], MemoryChess_SoundManager.prototype, "audio_sfx", void 0);
    __decorate([
        property(cc.AudioSource)
    ], MemoryChess_SoundManager.prototype, "audio_score", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MemoryChess_SoundManager.prototype, "sound_click", void 0);
    MemoryChess_SoundManager = __decorate([
        ccclass
    ], MemoryChess_SoundManager);
    return MemoryChess_SoundManager;
}(cc.Component));
exports.default = MemoryChess_SoundManager;

cc._RF.pop();