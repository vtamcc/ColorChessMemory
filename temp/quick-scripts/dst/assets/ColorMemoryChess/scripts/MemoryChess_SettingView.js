
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMkRBQXNEO0FBRWhELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFELDJDQUFZO0lBQWpFO1FBQUEscUVBdUVDO1FBcEVHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBSTdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztRQXVEN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsd0JBQXdCO0lBRXhCLHdDQUFNLEdBQU47UUFDSSx5QkFBeUI7UUFDekIseUJBQXlCO1FBRXpCLElBQUksZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFHLGdCQUFnQixLQUFLLElBQUksRUFBRztZQUMzQiw0QkFBa0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLDRCQUFrQixDQUFDLFVBQVUsQ0FBQztZQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsNEJBQWtCLENBQUMsVUFBVSxDQUFDO1lBQ3pG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QUFDO0NBdkVELEFBdUVDLENBdkVvRCxFQUFFLENBQUMsU0FBUyxHQXVFaEU7a0JBdkVvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE1lbW9yeUNoZXNzX0dsb2JhbCBmcm9tIFwiLi9NZW1vcnlDaGVzc19HbG9iYWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlDaGVzc19TZXR0aW5nVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU2xpZGVyKVxuICAgIHNsaWRlck11c2ljOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmRsZU11c2ljOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQmFyTXVzaWM6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuU2xpZGVyKVxuICAgIHNsaWRlclNvdW5kOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmRsZVNvdW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQmFyU291bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVCYXJTb3VuZCgpO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZUJhck11c2ljKCk7XG5cbiAgICAgICAgbGV0IHNhdmVkTXVzaWNWb2x1bWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVzaWNCZ1ZvbHVtZScpO1xuICAgICAgICBpZihzYXZlZE11c2ljVm9sdW1lICE9PSBudWxsICkge1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtTXVzaWMgPSBKU09OLnBhcnNlKHNhdmVkTXVzaWNWb2x1bWUpO1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJNdXNpYy5wcm9ncmVzcyA9IE1lbW9yeUNoZXNzX0dsb2JhbC52b2x1bU11c2ljO1xuICAgICAgICAgICAgdGhpcy5ub2RlQmFyTXVzaWMud2lkdGggPSB0aGlzLm5vZGVCYXJNdXNpYy5wYXJlbnQud2lkdGggKiBNZW1vcnlDaGVzc19HbG9iYWwudm9sdW1NdXNpYztcbiAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIudm9sdW1lTXVzaWNCZyhNZW1vcnlDaGVzc19HbG9iYWwudm9sdW1NdXNpYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvbHVtZSBcIiwgTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtTXVzaWMpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2F2ZVNvdW5kVm9sdW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvdW5kVm9sdW1lJyk7XG4gICAgICAgIGlmKHNhdmVTb3VuZFZvbHVtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtU291bmQgPSBKU09OLnBhcnNlKHNhdmVTb3VuZFZvbHVtZSlcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyU291bmQucHJvZ3Jlc3MgPSBNZW1vcnlDaGVzc19HbG9iYWwudm9sdW1Tb3VuZDtcbiAgICAgICAgICAgIHRoaXMubm9kZUJhclNvdW5kLndpZHRoID0gdGhpcy5ub2RlQmFyU291bmQucGFyZW50LndpZHRoICogTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtU291bmQ7XG4gICAgICAgICAgICBNZW1vcnlDaGVzc19HbG9iYWwuc291bmRNYW5hZ2VyLnVwZGF0ZUJhclNvdW5kKE1lbW9yeUNoZXNzX0dsb2JhbC52b2x1bVNvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2xpZGVyTXVzaWMubm9kZS5vbignc2xpZGUnLCB0aGlzLnVwZGF0ZUJhck11c2ljLHRoaXMpO1xuICAgICAgICB0aGlzLnNsaWRlclNvdW5kLm5vZGUub24oJ3NsaWRlJywgdGhpcy51cGRhdGVCYXJTb3VuZCx0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVCYXJNdXNpYygpIHtcbiAgICAgICAgbGV0IHNsaWRlclZhbHVlID0gdGhpcy5zbGlkZXJNdXNpYy5wcm9ncmVzcztcbiAgICAgICAgbGV0IG1heEJhcldpZHRoID0gdGhpcy5ub2RlQmFyTXVzaWMucGFyZW50LndpZHRoO1xuICAgICAgICB0aGlzLm5vZGVCYXJNdXNpYy53aWR0aCA9IG1heEJhcldpZHRoICogc2xpZGVyVmFsdWU7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIudm9sdW1lTXVzaWNCZyhzbGlkZXJWYWx1ZSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWNCZ1ZvbHVtZScsIHNsaWRlclZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVCYXJTb3VuZCgpIHtcbiAgICAgICAgbGV0IHNsaWRlclZhbHVlID0gdGhpcy5zbGlkZXJTb3VuZC5wcm9ncmVzcztcbiAgICAgICAgbGV0IG1heEJhcldpZHRoID0gdGhpcy5ub2RlQmFyU291bmQucGFyZW50LndpZHRoO1xuICAgICAgICB0aGlzLm5vZGVCYXJTb3VuZC53aWR0aCA9IG1heEJhcldpZHRoICogc2xpZGVyVmFsdWU7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIudXBkYXRlQmFyU291bmQoc2xpZGVyVmFsdWUpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvdW5kVm9sdW1lJywgc2xpZGVyVmFsdWUpO1xuICAgICAgIFxuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIub25JdGVtQ2xpY2tlZCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19