// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_Global from "./MemoryChess_Global";
import MemoryChess_Item from "./MemoryChess_Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MemoryChess_GamePlay extends cc.Component {
    public static instance: MemoryChess_GamePlay = null;
    @property(cc.Prefab)
    prfItem: cc.Prefab = null;
    @property(cc.Node)
    nodeItem: cc.Node = null;

    @property(cc.Node)
    nodeDice: cc.Node = null;

    @property(cc.Sprite)
    spfDice: cc.Sprite = null;


    @property(cc.SpriteFrame)
    listSpfChess: cc.SpriteFrame[] = [];

    @property(cc.AnimationClip)
    listAnimation: cc.AnimationClip[] = [];
    numCircles = 3;
    listColor = [];
    listIdColor = [];
    isClick = false;
    isClickItem = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        MemoryChess_GamePlay.instance = this;
        this.randomColor();
        this.shuffle();
        this.renItem();

    }


    randomColor() {
        for (let i = 0; i < MemoryChess_Global.arrColor.length; i++) {
            this.listColor.push(MemoryChess_Global.arrColor[i]);
            this.listColor.push(MemoryChess_Global.arrColor[i]);
            this.listColor.push(MemoryChess_Global.arrColor[i]);
            this.listColor.push(MemoryChess_Global.arrColor[i]);
        }

        let ramdomIndex = Math.floor(Math.random() * 6) + 1;
        this.listColor.push(ramdomIndex);

    }

    shuffle() {
        for (let i = this.listColor.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.listColor[i], this.listColor[j]] = [this.listColor[j], this.listColor[i]];
        }
        console.log("list Color ", this.listColor);
    }

    renItem() {
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
        let gridSize = 5;
        let cellSpacing = 35;
        let startX = -(gridSize - 1) * (this.prfItem.data.width + cellSpacing) / 2;
        let startY = (gridSize - 1) * (this.prfItem.data.height + cellSpacing) / 2;

        for (let i = 0; i < this.listColor.length; i++) {
            let row = Math.floor(i / gridSize);
            let col = i % gridSize;

            // let item = cc.instantiate(this.prfItem).getComponent(MemoryChess_Item)
            // item.setData(this.listColor[i]);
            // this.nodeItem.addChild(item.node);
            let item = cc.instantiate(this.prfItem).getComponent(MemoryChess_Item);
            item.setData(this.listColor[i]);
            let x = startX + col * (item.node.width + cellSpacing);
            let y = startY - row * (item.node.height + cellSpacing);
            item.node.setPosition(x, y);
            this.moveChessBack(item.sprItemBack);
            this.nodeItem.addChild(item.node);
        }
    }

    clickRoll() {
        if (this.isClick) {
            return;
        }
        let idColor = Math.floor(Math.random() * 6) + 1;
        this.nodeDice.getComponent(cc.Animation).play(this.listAnimation[idColor].name);
        this.listIdColor.push(idColor);
        console.log("idColor ", this.listIdColor);
        this.isClickItem = true;
        this.isClick = true;


        console.log('isClick ', this.isClick);


    }

    moveChessBack(node) {
        let originalY = node.y;
        cc.tween(node)
        .to(0.5, {y: 68 })
        .delay(0.5)
        .to(0.5, {y: originalY})
        .start();
    }

    moveToCenterAndDestroy(node, disableNode) {
        let centerX = 0;
        let centerY = 0;
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
        .call(() => {
            
            cc.tween(disableNode)
                .to(0.5, { y: disableNode.y + 65 })  
                .call(() => {
                    disableNode.active = false;  
                })
                .start();
            
            this.scheduleOnce(() => {
                node.destroy();
            }, 0.5);
        })
        .start();
    }


    moveToCenterAndReturn(node, disableNode) {

        let centerX = 0;
        let centerY = 0;
        let originalX = node.x;
        let originalY = node.y;
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
        .call(() => {
            cc.tween(disableNode)
                .to(0.5, { y: disableNode.y + 65 })
                .delay(0.5)
                .to(0.5, { y: 0})
                .start();
        })
        .delay(0.5)
        .to(0.5, { x: originalX, y: originalY, scale: 1.0 })
        .start();
    }

    checkIdColor(idColor, node, disableNode) {
       
        console.log("listColor ", this.listColor);
        if (this.listIdColor[0] == idColor) {
            console.log("dung ");
            let index = this.listColor.indexOf(idColor);
            if (index !== -1) {
                this.listColor.splice(index, 1);
            }

            this.moveToCenterAndDestroy(node, disableNode);

        } else {
            console.log("Sai ");
            this.moveToCenterAndReturn(node, disableNode);
        }

        if (this.listColor.length == 0) {
            this.isClick = true;
            console.log("Win");
          
        }



        console.log("listColor ", this.listColor);
        this.listIdColor = [];
    }

    
    onClickBack() {
        this.node.destroy();
    }

    start() {

    }

    // update (dt) {}
}
