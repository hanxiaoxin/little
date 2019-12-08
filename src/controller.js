import {errorHandle} from "./utils";
import validator from "option-validator";

/**
 * 控制器
 */
export default class Controller {
    constructor(player) {
        this.player = player;
        this.init();
        this.listen();
    }

    init() {
        // 自动播放
        if(this.player.options.autoPlay) {
            this.play();
        }
    }

    listen() {
        // 音频时长
        this.player.options.autioElement.addEventListener('canplay', () => {
            this.player.options.duration = this.player.options.autioElement.duration;
        });

        // 进度变化
        this.player.options.autioElement.addEventListener('timeupdate', () => {
            this.player.emit('currentTime', this.player.options.autioElement.currentTime);
        });

        this.player.options.autioElement.addEventListener('ended', () => {
            this.player.emit('ended', this.player.options.autioElement.currentTime);
            this.pause();
            this.seek(0);
        });

        // 播放器按钮
        this.player.options.controlPlayAndPauseElement.addEventListener('click', () => {
            if(this.player.options.playing) {
                this.pause();
            } else {
                this.play();
            }
        });

        this.player.options.progressWrapElement.addEventListener('click', (event) => {
            const clientX = event.clientX;
            const rect = this.player.options.progressWrapElement.getBoundingClientRect();

            const totalX = this.player.options.progressWrapElement.clientWidth;
            const seekTime = (clientX - rect.left) / totalX * this.player.options.duration;
            this.seek(seekTime);
        });
    };

    setSource(target) {
        errorHandle(target && target.url, 'audio url is invalid!');
        this.player.options.autioElement.setAttribute('src', target.url);
        this.player.options.autioElement.load();
        this.player.options.titleBoxElement.innerHTML = this.player.options.title;
    }

    play() {
        setTimeout(() => {
            const playPromise = this.player.options.autioElement.play();
            if (playPromise !== undefined) {
                playPromise.then( _ => {})
                    .catch(error => {
                        console.log(error);
                    });
            }
            this.player.options.playing = true;
        }, 0);
        this.player.options.controlPlayAndPauseElement.classList.replace('little-control-play', 'little-control-play-playing');
        this.player.options.audioIconElement.classList.add('little-playing');
    }

    pause() {
        this.player.options.autioElement.pause();
        this.player.options.playing = false;
        this.player.options.controlPlayAndPauseElement.classList.replace('little-control-play-playing', 'little-control-play');
        this.player.options.audioIconElement.classList.remove('little-playing');
    }

    seek(time) {
        this.player.options.autioElement.currentTime = time;
    }
}
