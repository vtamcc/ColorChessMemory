// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_GamePlay from "./MemoryChess_GamePlay";
import MemoryChess_Global from "./MemoryChess_Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MemoryChess_Item extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    sprItem: cc.Sprite = null;

    @property(cc.Node)
    sprItemBack: cc.Node = null;

    id;

    start() {

    }

    setData(id) {
        this.id = id;
        this.label.string = id + ' ';
        this.sprItem.spriteFrame = MemoryChess_GamePlay.instance.listSpfChess[id];
        //this.sprItem.spriteFrame = 

    }




    clickItem() {
        if (MemoryChess_GamePlay.instance.isClickItem) {
            MemoryChess_GamePlay.instance.checkIdColor(this.id, this.node, this.sprItemBack)
            MemoryChess_GamePlay.instance.isClick = false;
            MemoryChess_GamePlay.instance.isClickItem = false;
            //     console.log("is click ",  MemoryChess_GamePlay.instance.isClick )
        } else {
            console.log("Chua click xuc xac ");
        }
       
    }
}
