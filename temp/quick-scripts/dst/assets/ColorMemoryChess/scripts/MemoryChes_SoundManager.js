
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChes_SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc19Tb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMkRBQXNEO0FBRWhELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNELDRDQUFZO0lBQWxFO1FBQUEscUVBeURDO1FBdERFLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFtQixJQUFJLENBQUM7UUFFeEMsZUFBUyxHQUFtQixJQUFJLENBQUE7UUFFaEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFBO1FBR2xDLGlCQUFXLEdBQWlCLElBQUksQ0FBQzs7UUE0Q2hDLGlCQUFpQjtJQUNyQixDQUFDO0lBM0NHLHdCQUF3QjtJQUV4Qix5Q0FBTSxHQUFOO1FBQ0ksNEJBQWtCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0RBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ2pDO0lBRUwsQ0FBQztJQUVELGlEQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ2pCLDRCQUFrQixDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVELGlEQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLDRCQUFrQixDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDaEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLDRCQUFrQixDQUFDLFVBQVUsQ0FBQTtZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRUQsZ0RBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBTUQsaUJBQWlCO0lBRWpCLElBQUk7SUFFSix3Q0FBSyxHQUFMO0lBRUEsQ0FBQztJQW5ERjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhEQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0VBQ2U7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lFQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUVBQ1U7SUFaZix3QkFBd0I7UUFENUMsT0FBTztPQUNhLHdCQUF3QixDQXlENUM7SUFBRCwrQkFBQztDQXpERCxBQXlEQyxDQXpEcUQsRUFBRSxDQUFDLFNBQVMsR0F5RGpFO2tCQXpEb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBNZW1vcnlDaGVzc19HbG9iYWwgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfU291bmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgbXVzaWNfYmc6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcbiAgIGF1ZGlvU291bmRfY2xpY2s6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcbiAgIGF1ZGlvX3NmeDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICBhdWRpb19zY29yZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG5cbiAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICBzb3VuZF9jbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlciA9IHRoaXM7XG4gICAgfVxuXG4gICAgdm9sdW1lTXVzaWNCZyh2bG91bWUpIHtcbiAgICAgICAgaWYodGhpcy5tdXNpY19iZykge1xuICAgICAgICAgICAgdGhpcy5tdXNpY19iZy52b2x1bWUgPSB2bG91bWU7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVCYXJTb3VuZCh2bG91bWUpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtU291bmQgPSB2bG91bWU7IFxuICAgIH1cblxuICAgIHBsYXlDbGlja1NvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpb1NvdW5kX2NsaWNrICYmIHRoaXMuc291bmRfY2xpY2sgJiYgTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtU291bmQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291bmRfY2xpY2suc3RvcCgpOyBcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VuZF9jbGljay5jbGlwID0gdGhpcy5zb3VuZF9jbGljaztcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VuZF9jbGljay52b2x1bWUgPSBNZW1vcnlDaGVzc19HbG9iYWwudm9sdW1Tb3VuZFxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdW5kX2NsaWNrLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbUNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMucGxheUNsaWNrU291bmQoKTtcbiAgICB9XG5cblxuICAgIFxuXG5cbiAgICAvLyBzb3VuZENsaWNrKCkge1xuXG4gICAgLy8gfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==