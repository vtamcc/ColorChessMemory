// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import MemoryChess_GamePlay from "./MemoryChess_GamePlay";
import MemoryChess_Global from "./MemoryChess_Global";
import MemoryChess_SettingView from "./MemoryChess_SettingView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MemoryChess_Main extends cc.Component {


    @property(cc.Prefab)
    prfGamePlay: cc.Prefab = null;

    @property(cc.Prefab)
    prfSettingView: cc.Prefab = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let savedMusicVolume = localStorage.getItem('musicBgVolume');
        let saveSoundVolume = localStorage.getItem('soundVolume');
        this.scheduleOnce(() => {
            if(savedMusicVolume == null) {
                MemoryChess_Global.soundManager.music_bg.volume = MemoryChess_Global.volumMusic;
            }else {
                MemoryChess_Global.volumMusic = JSON.parse(savedMusicVolume);
                //console.log("MemoryChess_Global.soundManager.music_bg.volume ",  MemoryChess_Global.volumMusic)
                MemoryChess_Global.soundManager.music_bg.volume = MemoryChess_Global.volumMusic;
            }

            if(saveSoundVolume == null) {
                MemoryChess_Global.soundManager.audioSound_click.volume = MemoryChess_Global.volumSound;
            }else {
                MemoryChess_Global.volumSound = JSON.parse(saveSoundVolume);
                MemoryChess_Global.soundManager.audioSound_click.volume = MemoryChess_Global.volumSound
                //console.log("MemoryChess_Global.soundManager.audioSound_click.volume ", MemoryChess_Global.volumSound)
            }
            
        },0.5)
       

       
       
    }

    clickPlay() {
        MemoryChess_Global.soundManager.onItemClicked()
        let gamePlay = cc.instantiate(this.prfGamePlay).getComponent(MemoryChess_GamePlay)
        this.node.addChild(gamePlay.node);
    }

    clickSetting() {
        MemoryChess_Global.soundManager.onItemClicked()
        let setting = cc.instantiate(this.prfSettingView).getComponent(MemoryChess_SettingView)
        this.node.addChild(setting.node);
    }

    start () {

    }


    // update (dt) {}
}
