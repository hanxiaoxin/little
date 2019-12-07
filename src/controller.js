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
        this.player.options.autioElement = document.getElementById("little-player-audio");
        this.player.options.titleElement = document.querySelector(".little-player-play-title-box");

        // 进度条hover
        this.player.options.progressWrapElement = document.querySelector('.little-progress-wrap');
        this.player.options.progressWrapElement.addEventListener('mouseover',  ()  => {
            if(this.player.options.progressWrapElement.classList.contains('none-thick')) {
                this.player.options.progressWrapElement.classList.replace('none-thick', 'thick');
            } else {
                this.player.options.progressWrapElement.classList.add('thick');
            }
        });
        this.player.options.progressWrapElement.addEventListener('mouseout', ()  => {
            this.player.options.progressWrapElement.classList.replace('thick', 'none-thick');
        });

        // 信息hover
        this.player.options.infoElement = document.querySelector('.little-player-self');
        this.player.options.controlWrapElement = document.querySelector('.little-player-control-wrap');
        const Addfn = ()  => {
            this.player.options.infoElement.classList.replace('little-info-default', 'little-info-active');
            this.player.options.infoElement.classList.add('hover');
        };
        const removeFn = ()  => {
            this.player.options.infoElement.classList.replace('little-info-active', 'little-info-default');
            this.player.options.infoElement.classList.remove('hover');
        };

        this.player.options.controlWrapElement.addEventListener('mouseover',  Addfn);
        this.player.options.progressWrapElement.addEventListener('mouseover',  Addfn);

        this.player.options.controlWrapElement.addEventListener('mouseout', removeFn);
        this.player.options.progressWrapElement.addEventListener('mouseout', removeFn);

        this.player.options.controlWrapElement = document.querySelector('.little-player-control-wrap');
        this.player.options.controlPlayAndPauseElement = document.querySelector('.little-control-play');

        // 自动播放
        if(this.player.options.autoPlay) {
            this.play();
        }
    }

    listen() {
        this.player.options.controlPlayAndPauseElement.addEventListener('click', () => {
            if(this.player.options.playing) {
                this.pause();
            } else {
                this.play();
            }
        })
    };

    setSource(target) {
        errorHandle(target && target.url, 'audio url is invalid!');
        this.player.options.autioElement.setAttribute('src', target.url);
        this.player.options.autioElement.load();
        this.player.options.titleElement.innerHTML = this.player.options.title;
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
    }

    pause() {
        this.player.options.autioElement.pause();
        this.player.options.playing = false;
        this.player.options.controlPlayAndPauseElement.classList.replace('little-control-play-playing', 'little-control-play');
    }
}
