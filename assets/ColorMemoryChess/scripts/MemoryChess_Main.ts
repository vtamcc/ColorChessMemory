// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_GamePlay from "./MemoryChess_GamePlay";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MemoryChess_Main extends cc.Component {


    @property(cc.Prefab)
    prfGamePlay: cc.Prefab = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    clickPlay() {
        let gamePlay = cc.instantiate(this.prfGamePlay).getComponent(MemoryChess_GamePlay)
        this.node.addChild(gamePlay.node);
    }
    start () {

    }


    // update (dt) {}
}
