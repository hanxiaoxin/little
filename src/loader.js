/**
 * 加载器
 */
import {errorHandle} from "./utils";

export default class Loader {
    constructor(player) {
        this.player = player;
        this.fileSize = 0;
        this.loadSize = 0;
        this.playListIndex = 0; // 播放序号
        this.data = new Uint8Array();
        this.reader = null;
        this.abortController = null;
        this.listen();
    }

    listen() {
        this.player.on('prevMusic', () => {
            const nextIndex = this.playListIndex - 1 < 0 ?  this.playList.length - 1 : this.playListIndex - 1;
            this.next(nextIndex);
        });

        this.player.on('nextMusic', () => {
            const nextIndex = (this.playListIndex + 1) % this.playList.length;
            this.next(nextIndex);
        });
    }

    /**
     * 初始化音乐列表
     * @param playList
     */
    load(playList) {
        this.destroy();
        // about controller ??
        this.abortController = new AbortController();
        errorHandle(playList || playList.length === 0, '音乐列表初始化失败!');
        this.playList = playList;
        this.next(0);
    }

    next(index) {
        if(index === 0) {
            this.playListIndex = 0;
        } else if(!index){
            this.playListIndex = (++this.playListIndex) % this.playList.length;
        } else {
            this.playListIndex = index;
        }
        this.start();
    }

    start() {
        this.currentPlayInfo = this.playList[this.playListIndex];
        this.player.controller.setSource(this.currentPlayInfo.url);
        this.player.emit('loadEnd', this.currentPlayInfo);
    }

    destroy() {
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        if (this.reader) {
            this.reader.cancel();
            this.reader = null;
        }
        if (this.abortController) {
            this.abortController.abort();
            this.abortController = null;
        }
    }
}
