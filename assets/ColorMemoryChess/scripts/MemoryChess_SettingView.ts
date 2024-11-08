// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_Global from "./MemoryChess_Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MemoryChess_SettingView extends cc.Component {

    @property(cc.Slider)
    sliderMusic: cc.Slider = null;
    @property(cc.Node)
    handleMusic: cc.Node = null;
    @property(cc.Node)
    nodeBarMusic: cc.Node = null;


    @property(cc.Slider)
    sliderSound: cc.Slider = null;
    @property(cc.Node)
    handleSound: cc.Node = null;
    @property(cc.Node)
    nodeBarSound: cc.Node = null;

  
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.updateBarSound();
        // this.updateBarMusic();

        let savedMusicVolume = localStorage.getItem('musicBgVolume');
        if(savedMusicVolume !== null ) {
            MemoryChess_Global.volumMusic = JSON.parse(savedMusicVolume);
            this.sliderMusic.progress = MemoryChess_Global.volumMusic;
            this.nodeBarMusic.width = this.nodeBarMusic.parent.width * MemoryChess_Global.volumMusic;
            MemoryChess_Global.soundManager.volumeMusicBg(MemoryChess_Global.volumMusic);
            console.log("volume ", MemoryChess_Global.volumMusic)
        }

        let saveSoundVolume = localStorage.getItem('soundVolume');
        if(saveSoundVolume !== null) {
            MemoryChess_Global.volumSound = JSON.parse(saveSoundVolume)
            this.sliderSound.progress = MemoryChess_Global.volumSound;
            this.nodeBarSound.width = this.nodeBarSound.parent.width * MemoryChess_Global.volumSound;
            MemoryChess_Global.soundManager.updateBarSound(MemoryChess_Global.volumSound);
        }

        this.sliderMusic.node.on('slide', this.updateBarMusic,this);
        this.sliderSound.node.on('slide', this.updateBarSound,this);
    }

    start () {

    }

    updateBarMusic() {
        let sliderValue = this.sliderMusic.progress;
        let maxBarWidth = this.nodeBarMusic.parent.width;
        this.nodeBarMusic.width = maxBarWidth * sliderValue;
        MemoryChess_Global.soundManager.volumeMusicBg(sliderValue);
        cc.sys.localStorage.setItem('musicBgVolume', sliderValue);
    }

    updateBarSound() {
        let sliderValue = this.sliderSound.progress;
        let maxBarWidth = this.nodeBarSound.parent.width;
        this.nodeBarSound.width = maxBarWidth * sliderValue;
        MemoryChess_Global.soundManager.updateBarSound(sliderValue);
        cc.sys.localStorage.setItem('soundVolume', sliderValue);
       
    }

    onClose() {
        MemoryChess_Global.soundManager.onItemClicked();
        this.node.destroy();
    }
    // update (dt) {}
}
