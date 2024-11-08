
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