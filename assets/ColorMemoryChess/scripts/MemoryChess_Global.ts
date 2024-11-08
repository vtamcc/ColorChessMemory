// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_SoundManager from "./MemoryChes_SoundManager";
import MemoryChes_GameOver from "./MemoryChess_GameOver";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MemoryChess_Global{
    static soundManager: MemoryChess_SoundManager = null;
    static gameOver: MemoryChes_GameOver = null;
    static volumMusic = 1;
    static heart = 3;
    static volumSound = 1;
    static arrColor = [1,2,3,4,5,6];
}
