// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_Global from "./MemoryChess_Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MemoryChess_SoundManager extends cc.Component {

   @property(cc.AudioSource)
   music_bg: cc.AudioSource = null;
   @property(cc.AudioSource)
   audioSound_click: cc.AudioSource = null;
   @property(cc.AudioSource)
   audio_sfx: cc.AudioSource = null
   @property(cc.AudioSource)
   audio_score: cc.AudioSource = null

   @property(cc.AudioClip)
   sound_click: cc.AudioClip = null;
   
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        MemoryChess_Global.soundManager = this;
    }

    volumeMusicBg(vloume) {
        if(this.music_bg) {
            this.music_bg.volume = vloume;
        }
       
    }

    updateBarSound(vloume) {
        MemoryChess_Global.volumSound = vloume; 
    }

    playClickSound() {
        if (this.audioSound_click && this.sound_click && MemoryChess_Global.volumSound > 0) {
            this.audioSound_click.stop(); 
            this.audioSound_click.clip = this.sound_click;
            this.audioSound_click.volume = MemoryChess_Global.volumSound
            this.audioSound_click.play();
        }
    }

    onItemClicked() {
        this.playClickSound();
    }


    


    // soundClick() {

    // }

    start () {

    }

    // update (dt) {}
}
