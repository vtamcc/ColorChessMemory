
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