
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