// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_GamePlay from "./MemoryChess_GamePlay";
import MemoryChess_Global from "./MemoryChess_Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MemoryChes_GameOver extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {

    }
    

    showLose() {
        this.label.string = "Game Over ";
    }

    showWin() {
        this.label.string = "Win!!!";
    }

    onClose() {
        MemoryChess_Global.soundManager.onItemClicked();
        MemoryChess_GamePlay.instance.nodeDestroy();
    }

    onClickReset() {
        MemoryChess_Global.soundManager.onItemClicked();
        MemoryChess_GamePlay.instance.resetGame();
        this.node.destroy();
    }

    onHome() {
        MemoryChess_Global.soundManager.onItemClicked();
        MemoryChess_GamePlay.instance.nodeDestroy();
    }
    // update (dt) {}
}
