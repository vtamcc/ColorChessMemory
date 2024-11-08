
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELHFFQUFnRTtBQUUxRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXVEQztRQW5ERyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQzs7UUErQ2pDLGlCQUFpQjtJQUNyQixDQUFDO0lBL0NHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUcsZ0JBQWdCLElBQUksSUFBSSxFQUFFO2dCQUN6Qiw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyw0QkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFDbkY7aUJBQUs7Z0JBQ0YsNEJBQWtCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDN0QsaUdBQWlHO2dCQUNqRyw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyw0QkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFDbkY7WUFFRCxJQUFHLGVBQWUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3hCLDRCQUFrQixDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsNEJBQWtCLENBQUMsVUFBVSxDQUFDO2FBQzNGO2lCQUFLO2dCQUNGLDRCQUFrQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1RCw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLDRCQUFrQixDQUFDLFVBQVUsQ0FBQTtnQkFDdkYsd0dBQXdHO2FBQzNHO1FBRUwsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBS1YsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDL0MsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLDhCQUFvQixDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksNEJBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQ0FBdUIsQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtJQUVBLENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNhO0lBUGhCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBdURwQztJQUFELHVCQUFDO0NBdkRELEFBdURDLENBdkQ2QyxFQUFFLENBQUMsU0FBUyxHQXVEekQ7a0JBdkRvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE1lbW9yeUNoZXNzX0dhbWVQbGF5IGZyb20gXCIuL01lbW9yeUNoZXNzX0dhbWVQbGF5XCI7XG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2xvYmFsIGZyb20gXCIuL01lbW9yeUNoZXNzX0dsb2JhbFwiO1xuaW1wb3J0IE1lbW9yeUNoZXNzX1NldHRpbmdWaWV3IGZyb20gXCIuL01lbW9yeUNoZXNzX1NldHRpbmdWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZVBsYXk6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZlNldHRpbmdWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IHNhdmVkTXVzaWNWb2x1bWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVzaWNCZ1ZvbHVtZScpO1xuICAgICAgICBsZXQgc2F2ZVNvdW5kVm9sdW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvdW5kVm9sdW1lJyk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmKHNhdmVkTXVzaWNWb2x1bWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIubXVzaWNfYmcudm9sdW1lID0gTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtTXVzaWM7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtTXVzaWMgPSBKU09OLnBhcnNlKHNhdmVkTXVzaWNWb2x1bWUpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNZW1vcnlDaGVzc19HbG9iYWwuc291bmRNYW5hZ2VyLm11c2ljX2JnLnZvbHVtZSBcIiwgIE1lbW9yeUNoZXNzX0dsb2JhbC52b2x1bU11c2ljKVxuICAgICAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIubXVzaWNfYmcudm9sdW1lID0gTWVtb3J5Q2hlc3NfR2xvYmFsLnZvbHVtTXVzaWM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHNhdmVTb3VuZFZvbHVtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5hdWRpb1NvdW5kX2NsaWNrLnZvbHVtZSA9IE1lbW9yeUNoZXNzX0dsb2JhbC52b2x1bVNvdW5kO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC52b2x1bVNvdW5kID0gSlNPTi5wYXJzZShzYXZlU291bmRWb2x1bWUpO1xuICAgICAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIuYXVkaW9Tb3VuZF9jbGljay52b2x1bWUgPSBNZW1vcnlDaGVzc19HbG9iYWwudm9sdW1Tb3VuZFxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNZW1vcnlDaGVzc19HbG9iYWwuc291bmRNYW5hZ2VyLmF1ZGlvU291bmRfY2xpY2sudm9sdW1lIFwiLCBNZW1vcnlDaGVzc19HbG9iYWwudm9sdW1Tb3VuZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LDAuNSlcbiAgICAgICBcblxuICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuICAgIGNsaWNrUGxheSgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5vbkl0ZW1DbGlja2VkKClcbiAgICAgICAgbGV0IGdhbWVQbGF5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lUGxheSkuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0dhbWVQbGF5KVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVBsYXkubm9kZSk7XG4gICAgfVxuXG4gICAgY2xpY2tTZXR0aW5nKCkge1xuICAgICAgICBNZW1vcnlDaGVzc19HbG9iYWwuc291bmRNYW5hZ2VyLm9uSXRlbUNsaWNrZWQoKVxuICAgICAgICBsZXQgc2V0dGluZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2V0dGluZ1ZpZXcpLmdldENvbXBvbmVudChNZW1vcnlDaGVzc19TZXR0aW5nVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNldHRpbmcubm9kZSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19