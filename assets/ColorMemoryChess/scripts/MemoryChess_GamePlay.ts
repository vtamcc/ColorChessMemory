// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChes_GameOver from "./MemoryChess_GameOver";
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

    @property(cc.Prefab)
    prfGameOver: cc.Prefab = null;

    @property(cc.Label)
    lbTime: cc.Label = null;

    @property(cc.Label)
    lbHeart: cc.Label = null;
    numCircles = 3;
    listColor = [];
    listIdColor = [];
    isClick = true;
    isClickItem = false;
    isPlayerTurn = true;
    time = 3;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log("heart ",MemoryChess_Global.heart);
        MemoryChess_GamePlay.instance = this;
        this.randomColor();
        this.shuffle();
        this.renItem();
        this.updateLbHeart();
        //this.startPlayerTurn();
        this.scheduleOnce( () => {
            this.startCountDown();
        },5.5)
        console.log("iisClick ", this.isClick);
       
    }

    resetGame() {
        this.nodeItem.removeAllChildren();
        this.listColor = [];
        this.listIdColor = [];
        this.isClick = true;
        this.isClickItem = false;
        MemoryChess_Global.heart = 3;
        this.randomColor();
        this.shuffle();
        this.renItem();
        this.updateLbHeart();
        this.scheduleOnce( () => {
            this.startCountDown();
        },5.5)

    }
    startPlayerTurn() {
        console.log("Luot cua nguoi choi ");
        this.isPlayerTurn = true;
        this.isClick = false;
       
    }

    endPlayerTurn() {
        this.isClick = true;
        this.scheduleOnce(() => {
            this.startTurnBot();
        }, 2.5)
    }

    startTurnBot() {
        console.log("Luot cua nguoi Bot ");
        this.isClick = false;
        this.clickRoll();
        console.log("lengt ", this.node.children.length);
        let ramdomIndex = Math.floor(Math.random() * this.nodeItem.children.length);
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
            let delay = i * 0.2;
            this.upChessBack(item.sprItemBack, delay);
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

    startCountDown() {
        this.time = 3;
        this.lbTime.node.active = true;
        
        this.updateLbTime();
        this.schedule(this.countDownTick, 1);
    }

    countDownTick() {
        if (this.time > 0) {
            this.time--;
            this.updateLbTime();
            
        } else {
            this.unschedule(this.countDownTick);
            this.lbTime.node.active = false;;
            this.downChessBack();
            this.isClick = false;
        }
    }

    updateLbTime() {
        
        this.lbTime.string = this.time + ' ';
    }
    upChessBack(node, delay) {
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
    }

    downChessBack() {
        for(let i = 0; i < this.nodeItem.childrenCount; i++) {
            let node = this.nodeItem.children[i].children[1];
            cc.tween(node)
            .to(0.2, {y: 0})
            .start();
        }
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
                    .delay(0.5)
                    .to(0.5, { y: 0 })
                    .delay(0.8)
                    .call(() => {
                        disableNode.active = false;
                        node.destroy();
                    })
                    .start();
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
            .delay(0.5)
            .call(() => {
                cc.tween(disableNode)
                    .to(0.5, { y: disableNode.y + 65 })
                    .delay(0.5)
                    .to(0.5, { y: 0 })
                    .start();
            })
            .delay(1.5)
            .to(0.5, { x: originalX, y: originalY, scale: 1.0 })
            .call(() => {
                node.zIndex = 1;
            })
            .start();


    }
    updateLbHeart() {
        this.lbHeart.string = MemoryChess_Global.heart + ' '
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
            MemoryChess_Global.heart--;
            this.scheduleOnce(() => {
                this.updateLbHeart();
            },3)
            
        }

        if(MemoryChess_Global.heart == 0) {
            MemoryChess_Global.gameOver = cc.instantiate(this.prfGameOver).getComponent(MemoryChes_GameOver);
            MemoryChess_Global.gameOver.showLose();
            this.scheduleOnce(() => {
                this.node.addChild(MemoryChess_Global.gameOver.node);
            },3.5)
            
        }

        if (this.listColor.length == 0) {
            this.isClick = true;
            MemoryChess_Global.gameOver = cc.instantiate(this.prfGameOver).getComponent(MemoryChes_GameOver);
            MemoryChess_Global.gameOver.showWin();
            this.node.addChild(MemoryChess_Global.gameOver.node);
            console.log("Win");

        }



        console.log("listColor ", this.listColor);
        this.listIdColor = [];

        // if (this.isPlayerTurn) {
        //     this.endPlayerTurn();
        // }
    }


    onClickBack() {
        MemoryChess_Global.soundManager.onItemClicked();
        this.node.destroy();
    }

    nodeDestroy() {
        this.node.destroy();
    }
    start() {

    }

    // update (dt) {}
}
