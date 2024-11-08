
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
require('./assets/ColorMemoryChess/scripts/MemoryChes_SoundManager');
require('./assets/ColorMemoryChess/scripts/MemoryChess_GameOver');
require('./assets/ColorMemoryChess/scripts/MemoryChess_GamePlay');
require('./assets/ColorMemoryChess/scripts/MemoryChess_Global');
require('./assets/ColorMemoryChess/scripts/MemoryChess_Item');
require('./assets/ColorMemoryChess/scripts/MemoryChess_Main');
require('./assets/ColorMemoryChess/scripts/MemoryChess_SettingView');

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
var MemoryChess_GameOver_1 = require("./MemoryChess_GameOver");
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
        _this.prfGameOver = null;
        _this.lbTime = null;
        _this.lbHeart = null;
        _this.numCircles = 3;
        _this.listColor = [];
        _this.listIdColor = [];
        _this.isClick = true;
        _this.isClickItem = false;
        _this.isPlayerTurn = true;
        _this.time = 3;
        return _this;
        // update (dt) {}
    }
    MemoryChess_GamePlay_1 = MemoryChess_GamePlay;
    // LIFE-CYCLE CALLBACKS:
    MemoryChess_GamePlay.prototype.onLoad = function () {
        var _this = this;
        console.log("heart ", MemoryChess_Global_1.default.heart);
        MemoryChess_GamePlay_1.instance = this;
        this.randomColor();
        this.shuffle();
        this.renItem();
        this.updateLbHeart();
        //this.startPlayerTurn();
        this.scheduleOnce(function () {
            _this.startCountDown();
        }, 5.5);
        console.log("iisClick ", this.isClick);
    };
    MemoryChess_GamePlay.prototype.resetGame = function () {
        var _this = this;
        this.nodeItem.removeAllChildren();
        this.listColor = [];
        this.listIdColor = [];
        this.isClick = true;
        this.isClickItem = false;
        MemoryChess_Global_1.default.heart = 3;
        this.randomColor();
        this.shuffle();
        this.renItem();
        this.updateLbHeart();
        this.scheduleOnce(function () {
            _this.startCountDown();
        }, 5.5);
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
            this.upChessBack(item.sprItemBack, delay);
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
    MemoryChess_GamePlay.prototype.startCountDown = function () {
        this.time = 3;
        this.lbTime.node.active = true;
        this.updateLbTime();
        this.schedule(this.countDownTick, 1);
    };
    MemoryChess_GamePlay.prototype.countDownTick = function () {
        if (this.time > 0) {
            this.time--;
            this.updateLbTime();
        }
        else {
            this.unschedule(this.countDownTick);
            this.lbTime.node.active = false;
            ;
            this.downChessBack();
            this.isClick = false;
        }
    };
    MemoryChess_GamePlay.prototype.updateLbTime = function () {
        this.lbTime.string = this.time + ' ';
    };
    MemoryChess_GamePlay.prototype.upChessBack = function (node, delay) {
        // cc.tween(node)
        //     .delay(delay)
        //     .to(0.5, { y: 68 })
        //     .delay(4)
        //     .to(0.5, { y: originalY })
        //     .start();
        cc.tween(node)
            .delay(delay)
            .to(0.5, { y: 68 })
            .start();
    };
    MemoryChess_GamePlay.prototype.downChessBack = function () {
        for (var i = 0; i < this.nodeItem.childrenCount; i++) {
            var node = this.nodeItem.children[i].children[1];
            cc.tween(node)
                .to(0.2, { y: 0 })
                .start();
        }
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
    MemoryChess_GamePlay.prototype.updateLbHeart = function () {
        this.lbHeart.string = MemoryChess_Global_1.default.heart + ' ';
    };
    MemoryChess_GamePlay.prototype.checkIdColor = function (idColor, node, disableNode) {
        var _this = this;
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
            MemoryChess_Global_1.default.heart--;
            this.scheduleOnce(function () {
                _this.updateLbHeart();
            }, 3);
        }
        if (MemoryChess_Global_1.default.heart == 0) {
            MemoryChess_Global_1.default.gameOver = cc.instantiate(this.prfGameOver).getComponent(MemoryChess_GameOver_1.default);
            MemoryChess_Global_1.default.gameOver.showLose();
            this.scheduleOnce(function () {
                _this.node.addChild(MemoryChess_Global_1.default.gameOver.node);
            }, 3.5);
        }
        if (this.listColor.length == 0) {
            this.isClick = true;
            MemoryChess_Global_1.default.gameOver = cc.instantiate(this.prfGameOver).getComponent(MemoryChess_GameOver_1.default);
            MemoryChess_Global_1.default.gameOver.showWin();
            this.node.addChild(MemoryChess_Global_1.default.gameOver.node);
            console.log("Win");
        }
        console.log("listColor ", this.listColor);
        this.listIdColor = [];
        // if (this.isPlayerTurn) {
        //     this.endPlayerTurn();
        // }
    };
    MemoryChess_GamePlay.prototype.onClickBack = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        this.node.destroy();
    };
    MemoryChess_GamePlay.prototype.nodeDestroy = function () {
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
    __decorate([
        property(cc.Prefab)
    ], MemoryChess_GamePlay.prototype, "prfGameOver", void 0);
    __decorate([
        property(cc.Label)
    ], MemoryChess_GamePlay.prototype, "lbTime", void 0);
    __decorate([
        property(cc.Label)
    ], MemoryChess_GamePlay.prototype, "lbHeart", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfR2FtZVBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQXlEO0FBQ3pELDJEQUFzRDtBQUN0RCx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUErVkM7UUE1VkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUkxQixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFHcEMsbUJBQWEsR0FBdUIsRUFBRSxDQUFDO1FBR3ZDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBSSxHQUFHLENBQUMsQ0FBQzs7UUE0VFQsaUJBQWlCO0lBQ3JCLENBQUM7NkJBL1ZvQixvQkFBb0I7SUFtQ3JDLHdCQUF3QjtJQUV4QixxQ0FBTSxHQUFOO1FBQUEsaUJBYUM7UUFaRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFB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QUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELG9DQUFLLEdBQUw7SUFFQSxDQUFDOztJQTNWYSw2QkFBUSxHQUF5QixJQUFJLENBQUM7SUFFcEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDTTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhEQUNXO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7K0RBQ1k7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ007SUEzQlIsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0ErVnhDO0lBQUQsMkJBQUM7Q0EvVkQsQUErVkMsQ0EvVmlELEVBQUUsQ0FBQyxTQUFTLEdBK1Y3RDtrQkEvVm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWVtb3J5Q2hlc19HYW1lT3ZlciBmcm9tIFwiLi9NZW1vcnlDaGVzc19HYW1lT3ZlclwiO1xuaW1wb3J0IE1lbW9yeUNoZXNzX0dsb2JhbCBmcm9tIFwiLi9NZW1vcnlDaGVzc19HbG9iYWxcIjtcbmltcG9ydCBNZW1vcnlDaGVzc19JdGVtIGZyb20gXCIuL01lbW9yeUNoZXNzX0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeUNoZXNzX0dhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNZW1vcnlDaGVzc19HYW1lUGxheSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVJdGVtOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVEaWNlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3BmRGljZTogY2MuU3ByaXRlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZDaGVzczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbkNsaXApXG4gICAgbGlzdEFuaW1hdGlvbjogY2MuQW5pbWF0aW9uQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGltZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSGVhcnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBudW1DaXJjbGVzID0gMztcbiAgICBsaXN0Q29sb3IgPSBbXTtcbiAgICBsaXN0SWRDb2xvciA9IFtdO1xuICAgIGlzQ2xpY2sgPSB0cnVlO1xuICAgIGlzQ2xpY2tJdGVtID0gZmFsc2U7XG4gICAgaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICB0aW1lID0gMztcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWFydCBcIixNZW1vcnlDaGVzc19HbG9iYWwuaGVhcnQpO1xuICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucmFuZG9tQ29sb3IoKTtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgICAgIHRoaXMucmVuSXRlbSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxiSGVhcnQoKTtcbiAgICAgICAgLy90aGlzLnN0YXJ0UGxheWVyVHVybigpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydENvdW50RG93bigpO1xuICAgICAgICB9LDUuNSlcbiAgICAgICAgY29uc29sZS5sb2coXCJpaXNDbGljayBcIiwgdGhpcy5pc0NsaWNrKTtcbiAgICAgICBcbiAgICB9XG5cbiAgICByZXNldEdhbWUoKSB7XG4gICAgICAgIHRoaXMubm9kZUl0ZW0ucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5saXN0Q29sb3IgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0SWRDb2xvciA9IFtdO1xuICAgICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2xpY2tJdGVtID0gZmFsc2U7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5oZWFydCA9IDM7XG4gICAgICAgIHRoaXMucmFuZG9tQ29sb3IoKTtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgICAgIHRoaXMucmVuSXRlbSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxiSGVhcnQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSw1LjUpXG5cbiAgICB9XG4gICAgc3RhcnRQbGF5ZXJUdXJuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkx1b3QgY3VhIG5ndW9pIGNob2kgXCIpO1xuICAgICAgICB0aGlzLmlzUGxheWVyVHVybiA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgICAgIFxuICAgIH1cblxuICAgIGVuZFBsYXllclR1cm4oKSB7XG4gICAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUdXJuQm90KCk7XG4gICAgICAgIH0sIDIuNSlcbiAgICB9XG5cbiAgICBzdGFydFR1cm5Cb3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTHVvdCBjdWEgbmd1b2kgQm90IFwiKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xpY2tSb2xsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGVuZ3QgXCIsIHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgICBsZXQgcmFtZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vZGVJdGVtLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmFuZG9tQ29sb3IoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVtb3J5Q2hlc3NfR2xvYmFsLmFyckNvbG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5wdXNoKE1lbW9yeUNoZXNzX0dsb2JhbC5hcnJDb2xvcltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFtZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgICAgIHRoaXMubGlzdENvbG9yLnB1c2gocmFtZG9tSW5kZXgpO1xuXG4gICAgfVxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdENvbG9yLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFt0aGlzLmxpc3RDb2xvcltpXSwgdGhpcy5saXN0Q29sb3Jbal1dID0gW3RoaXMubGlzdENvbG9yW2pdLCB0aGlzLmxpc3RDb2xvcltpXV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0IENvbG9yIFwiLCB0aGlzLmxpc3RDb2xvcik7XG4gICAgfVxuXG4gICAgcmVuSXRlbSgpIHtcbiAgICAgICAgLy8gbGV0IGFyclJhZGl1cyA9IFsyMDAsIDEyMCwgMF07XG4gICAgICAgIC8vIGxldCBudW1QaWVjZXNJbkNpcmNsZXMgPSBbMTYsIDgsIDFdO1xuXG4gICAgICAgIC8vIGZvciAobGV0IGNpcmNsZSA9IDA7IGNpcmNsZSA8IHRoaXMubnVtQ2lyY2xlczsgY2lyY2xlKyspIHtcbiAgICAgICAgLy8gICAgIGxldCByYWRpdXMgPSBhcnJSYWRpdXNbY2lyY2xlXTtcbiAgICAgICAgLy8gICAgIGxldCBudW1QaWVjZXNJbkNpcmNsZSA9IG51bVBpZWNlc0luQ2lyY2xlc1tjaXJjbGVdO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QaWVjZXNJbkNpcmNsZTsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGFuZ2xlID0gKGkgLyBudW1QaWVjZXNJbkNpcmNsZSkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgLy8gICAgICAgICBsZXQgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgLy8gICAgICAgICBsZXQgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pO1xuICAgICAgICAvLyAgICAgICAgIGxldCBpdGVtID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0l0ZW0pO1xuICAgICAgICAvLyAgICAgICAgIGl0ZW1Ob2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAvLyAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmxpc3RDb2xvcltpXSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlSXRlbS5hZGRDaGlsZChpdGVtTm9kZSk7XG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgZ3JpZFNpemUgPSA1O1xuICAgICAgICBsZXQgY2VsbFNwYWNpbmcgPSAzNTtcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oZ3JpZFNpemUgLSAxKSAqICh0aGlzLnByZkl0ZW0uZGF0YS53aWR0aCArIGNlbGxTcGFjaW5nKSAvIDI7XG4gICAgICAgIGxldCBzdGFydFkgPSAoZ3JpZFNpemUgLSAxKSAqICh0aGlzLnByZkl0ZW0uZGF0YS5oZWlnaHQgKyBjZWxsU3BhY2luZykgLyAyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGkgLyBncmlkU2l6ZSk7XG4gICAgICAgICAgICBsZXQgY29sID0gaSAlIGdyaWRTaXplO1xuXG4gICAgICAgICAgICAvLyBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbSkuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNzX0l0ZW0pXG4gICAgICAgICAgICAvLyBpdGVtLnNldERhdGEodGhpcy5saXN0Q29sb3JbaV0pO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlSXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChNZW1vcnlDaGVzc19JdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmxpc3RDb2xvcltpXSk7XG4gICAgICAgICAgICBsZXQgeCA9IHN0YXJ0WCArIGNvbCAqIChpdGVtLm5vZGUud2lkdGggKyBjZWxsU3BhY2luZyk7XG4gICAgICAgICAgICBsZXQgeSA9IHN0YXJ0WSAtIHJvdyAqIChpdGVtLm5vZGUuaGVpZ2h0ICsgY2VsbFNwYWNpbmcpO1xuICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgbGV0IGRlbGF5ID0gaSAqIDAuMjtcbiAgICAgICAgICAgIHRoaXMudXBDaGVzc0JhY2soaXRlbS5zcHJJdGVtQmFjaywgZGVsYXkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlSXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tSb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlkQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgICAgIHRoaXMubm9kZURpY2UuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSh0aGlzLmxpc3RBbmltYXRpb25baWRDb2xvcl0ubmFtZSk7XG4gICAgICAgIHRoaXMubGlzdElkQ29sb3IucHVzaChpZENvbG9yKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpZENvbG9yIFwiLCB0aGlzLmxpc3RJZENvbG9yKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrSXRlbSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0NsaWNrICcsIHRoaXMuaXNDbGljayk7XG5cblxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLnRpbWUgPSAzO1xuICAgICAgICB0aGlzLmxiVGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZUxiVGltZSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnREb3duVGljaywgMSk7XG4gICAgfVxuXG4gICAgY291bnREb3duVGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZS0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYlRpbWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnREb3duVGljayk7XG4gICAgICAgICAgICB0aGlzLmxiVGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlOztcbiAgICAgICAgICAgIHRoaXMuZG93bkNoZXNzQmFjaygpO1xuICAgICAgICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVMYlRpbWUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSB0aGlzLnRpbWUgKyAnICc7XG4gICAgfVxuICAgIHVwQ2hlc3NCYWNrKG5vZGUsIGRlbGF5KSB7XG4gICAgICAgIC8vIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgIC8vICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgIC8vICAgICAudG8oMC41LCB7IHk6IDY4IH0pXG4gICAgICAgIC8vICAgICAuZGVsYXkoNClcbiAgICAgICAgLy8gICAgIC50bygwLjUsIHsgeTogb3JpZ2luYWxZIH0pXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgIC5kZWxheShkZWxheSlcbiAgICAgICAgICAgIC50bygwLjUsIHsgeTogNjggfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIGRvd25DaGVzc0JhY2soKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVJdGVtLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGVJdGVtLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgIC50bygwLjIsIHt5OiAwfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVRvQ2VudGVyQW5kRGVzdHJveShub2RlLCBkaXNhYmxlTm9kZSkge1xuICAgICAgICBsZXQgY2VudGVyWCA9IDA7XG4gICAgICAgIGxldCBjZW50ZXJZID0gMDtcbiAgICAgICAgbm9kZS56SW5kZXggPSAxMDA7XG4gICAgICAgIC8vZGlzYWJsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgIC8vICAgICAudG8oMC41LCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclksIHNjYWxlOiAxLjUgfSlcbiAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCBzY2FsZTogMS41IH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjYy50d2VlbihkaXNhYmxlTm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiBkaXNhYmxlTm9kZS55ICsgNjUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyB5OiAwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjgpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgbW92ZVRvQ2VudGVyQW5kUmV0dXJuKG5vZGUsIGRpc2FibGVOb2RlKSB7XG5cbiAgICAgICAgbGV0IGNlbnRlclggPSAwO1xuICAgICAgICBsZXQgY2VudGVyWSA9IDA7XG4gICAgICAgIGxldCBvcmlnaW5hbFggPSBub2RlLng7XG4gICAgICAgIGxldCBvcmlnaW5hbFkgPSBub2RlLnk7XG4gICAgICAgIG5vZGUuekluZGV4ID0gMTAwO1xuICAgICAgICAvL2Rpc2FibGVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBjYy50d2Vlbihub2RlKVxuICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCBzY2FsZTogMS41IH0pXG4gICAgICAgIC8vICAgICAuZGVsYXkoMC41KVxuICAgICAgICAvLyAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGRpc2FibGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnRvKDAuNSwgeyB4OiBvcmlnaW5hbFgsIHk6IG9yaWdpbmFsWSwgc2NhbGU6IDEuMCB9KVxuICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMC41LCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclksIHNjYWxlOiAxLjUgfSlcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZGlzYWJsZU5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogZGlzYWJsZU5vZGUueSArIDY1IH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgeTogMCB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMS41KVxuICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiBvcmlnaW5hbFgsIHk6IG9yaWdpbmFsWSwgc2NhbGU6IDEuMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuXG4gICAgfVxuICAgIHVwZGF0ZUxiSGVhcnQoKSB7XG4gICAgICAgIHRoaXMubGJIZWFydC5zdHJpbmcgPSBNZW1vcnlDaGVzc19HbG9iYWwuaGVhcnQgKyAnICdcbiAgICB9XG5cbiAgICBjaGVja0lkQ29sb3IoaWRDb2xvciwgbm9kZSwgZGlzYWJsZU5vZGUpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RDb2xvciBcIiwgdGhpcy5saXN0Q29sb3IpO1xuICAgICAgICBpZiAodGhpcy5saXN0SWRDb2xvclswXSA9PSBpZENvbG9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImR1bmcgXCIpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0Q29sb3IuaW5kZXhPZihpZENvbG9yKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDb2xvci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1vdmVUb0NlbnRlckFuZERlc3Ryb3kobm9kZSwgZGlzYWJsZU5vZGUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhaSBcIik7XG4gICAgICAgICAgICB0aGlzLm1vdmVUb0NlbnRlckFuZFJldHVybihub2RlLCBkaXNhYmxlTm9kZSk7XG4gICAgICAgICAgICBNZW1vcnlDaGVzc19HbG9iYWwuaGVhcnQtLTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxiSGVhcnQoKTtcbiAgICAgICAgICAgIH0sMylcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoTWVtb3J5Q2hlc3NfR2xvYmFsLmhlYXJ0ID09IDApIHtcbiAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5nYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChNZW1vcnlDaGVzX0dhbWVPdmVyKTtcbiAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5nYW1lT3Zlci5zaG93TG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChNZW1vcnlDaGVzc19HbG9iYWwuZ2FtZU92ZXIubm9kZSk7XG4gICAgICAgICAgICB9LDMuNSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdENvbG9yLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLmdhbWVPdmVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KE1lbW9yeUNoZXNfR2FtZU92ZXIpO1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLmdhbWVPdmVyLnNob3dXaW4oKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChNZW1vcnlDaGVzc19HbG9iYWwuZ2FtZU92ZXIubm9kZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpblwiKTtcblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdENvbG9yIFwiLCB0aGlzLmxpc3RDb2xvcik7XG4gICAgICAgIHRoaXMubGlzdElkQ29sb3IgPSBbXTtcblxuICAgICAgICAvLyBpZiAodGhpcy5pc1BsYXllclR1cm4pIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kUGxheWVyVHVybigpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrQmFjaygpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5vbkl0ZW1DbGlja2VkKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgbm9kZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQWlDaEMsQ0FBQztJQTdCRyxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRSw2QkFBNkI7SUFFakMsQ0FBQztJQUtELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRWhGLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsOEJBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDbEQsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ04sd0VBQXdFO1NBQzNFO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7SUFFTCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNVO0lBVFgsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EwQ3BDO0lBQUQsdUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzZDLEVBQUUsQ0FBQyxTQUFTLEdBMEN6RDtrQkExQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2FtZVBsYXkgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2FtZVBsYXlcIjtcbmltcG9ydCBNZW1vcnlDaGVzc19HbG9iYWwgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2xvYmFsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlDaGVzc19JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJJdGVtOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3BySXRlbUJhY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaWQ7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNldERhdGEoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAvL3RoaXMubGFiZWwuc3RyaW5nID0gaWQgKyAnICc7XG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmxpc3RTcGZDaGVzc1tpZF07XG4gICAgICAgIC8vdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gXG5cbiAgICB9XG5cblxuXG5cbiAgICBjbGlja0l0ZW0oKSB7XG4gICAgICAgIGlmIChNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSkge1xuICAgICAgICAgICAgTWVtb3J5Q2hlc3NfR2FtZVBsYXkuaW5zdGFuY2UuY2hlY2tJZENvbG9yKHRoaXMuaWQsIHRoaXMubm9kZSwgdGhpcy5zcHJJdGVtQmFjaylcbiAgICAgICAgICAgXG4gICAgICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrSXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sMS41KVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaXMgY2xpY2sgXCIsICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5pc0NsaWNrIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2h1YSBjbGljayB4dWMgeGFjIFwiKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbn1cbiJdfQ==
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
    MemoryChess_Global.soundManager = null;
    MemoryChess_Global.gameOver = null;
    MemoryChess_Global.volumMusic = 1;
    MemoryChess_Global.heart = 3;
    MemoryChess_Global.volumSound = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFLaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQU9BLENBQUM7SUFOVSwrQkFBWSxHQUE2QixJQUFJLENBQUM7SUFDOUMsMkJBQVEsR0FBd0IsSUFBSSxDQUFDO0lBQ3JDLDZCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ2Ysd0JBQUssR0FBRyxDQUFDLENBQUM7SUFDViw2QkFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLDJCQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBTmYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FPdEM7SUFBRCx5QkFBQztDQVBELEFBT0MsSUFBQTtrQkFQb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBNZW1vcnlDaGVzc19Tb3VuZE1hbmFnZXIgZnJvbSBcIi4vTWVtb3J5Q2hlc19Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCBNZW1vcnlDaGVzX0dhbWVPdmVyIGZyb20gXCIuL01lbW9yeUNoZXNzX0dhbWVPdmVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc3NfR2xvYmFse1xuICAgIHN0YXRpYyBzb3VuZE1hbmFnZXI6IE1lbW9yeUNoZXNzX1NvdW5kTWFuYWdlciA9IG51bGw7XG4gICAgc3RhdGljIGdhbWVPdmVyOiBNZW1vcnlDaGVzX0dhbWVPdmVyID0gbnVsbDtcbiAgICBzdGF0aWMgdm9sdW1NdXNpYyA9IDE7XG4gICAgc3RhdGljIGhlYXJ0ID0gMztcbiAgICBzdGF0aWMgdm9sdW1Tb3VuZCA9IDE7XG4gICAgc3RhdGljIGFyckNvbG9yID0gWzEsMiwzLDQsNSw2XTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ColorMemoryChess/scripts/MemoryChess_GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4b0fPA8KdFA5QsurU3Pjy4', 'MemoryChess_GameOver');
// ColorMemoryChess/scripts/MemoryChess_GameOver.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MemoryChes_GameOver = /** @class */ (function (_super) {
    __extends(MemoryChes_GameOver, _super);
    function MemoryChes_GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MemoryChes_GameOver.prototype.onLoad = function () { };
    MemoryChes_GameOver.prototype.start = function () {
    };
    MemoryChes_GameOver.prototype.showLose = function () {
        this.label.string = "Game Over ";
    };
    MemoryChes_GameOver.prototype.showWin = function () {
        this.label.string = "Win!!!";
    };
    MemoryChes_GameOver.prototype.onClose = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        MemoryChess_GamePlay_1.default.instance.nodeDestroy();
    };
    MemoryChes_GameOver.prototype.onClickReset = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        MemoryChess_GamePlay_1.default.instance.resetGame();
        this.node.destroy();
    };
    MemoryChes_GameOver.prototype.onHome = function () {
        MemoryChess_Global_1.default.soundManager.onItemClicked();
        MemoryChess_GamePlay_1.default.instance.nodeDestroy();
    };
    __decorate([
        property(cc.Label)
    ], MemoryChes_GameOver.prototype, "label", void 0);
    __decorate([
        property
    ], MemoryChes_GameOver.prototype, "text", void 0);
    MemoryChes_GameOver = __decorate([
        ccclass
    ], MemoryChes_GameOver);
    return MemoryChes_GameOver;
}(cc.Component));
exports.default = MemoryChes_GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db2xvck1lbW9yeUNoZXNzL3NjcmlwdHMvTWVtb3J5Q2hlc3NfR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUVoRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQXlDQztRQXRDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBa0N2QixpQkFBaUI7SUFDckIsQ0FBQztJQWpDRyx3QkFBd0I7SUFFeEIsb0NBQU0sR0FBTixjQUFXLENBQUM7SUFFWixtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUdELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsOEJBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0ksNEJBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hELDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0ksNEJBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hELDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0k7SUFHdkI7UUFEQyxRQUFRO3FEQUNjO0lBTk4sbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0F5Q3ZDO0lBQUQsMEJBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q2dELEVBQUUsQ0FBQyxTQUFTLEdBeUM1RDtrQkF6Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWVtb3J5Q2hlc3NfR2FtZVBsYXkgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2FtZVBsYXlcIjtcbmltcG9ydCBNZW1vcnlDaGVzc19HbG9iYWwgZnJvbSBcIi4vTWVtb3J5Q2hlc3NfR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5Q2hlc19HYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIFxuXG4gICAgc2hvd0xvc2UoKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJHYW1lIE92ZXIgXCI7XG4gICAgfVxuXG4gICAgc2hvd1dpbigpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIldpbiEhIVwiO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dsb2JhbC5zb3VuZE1hbmFnZXIub25JdGVtQ2xpY2tlZCgpO1xuICAgICAgICBNZW1vcnlDaGVzc19HYW1lUGxheS5pbnN0YW5jZS5ub2RlRGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tSZXNldCgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5vbkl0ZW1DbGlja2VkKCk7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLnJlc2V0R2FtZSgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uSG9tZSgpIHtcbiAgICAgICAgTWVtb3J5Q2hlc3NfR2xvYmFsLnNvdW5kTWFuYWdlci5vbkl0ZW1DbGlja2VkKCk7XG4gICAgICAgIE1lbW9yeUNoZXNzX0dhbWVQbGF5Lmluc3RhbmNlLm5vZGVEZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
