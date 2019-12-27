/**
 * 模板
 */
const containerHTML = `
<div class="little-player-container">
    <div class="little-player-self little-info-default">
        <div class="little-player-play-icon little-playing">
            <span class="little-player-column"></span>
            <span class="little-player-column"></span>
            <span class="little-player-column"></span>
            <span class="little-player-column"></span>
        </div>
        <div class="little-player-play-title little-player-play-title-prefix">
            <div class="little-player-play-title-box"></div>
        </div>
    </div>
    <div class="little-player-controller">
        <div class="little-player-control-wrap">
             <div class="little-control-before"></div>
             <div class="little-control-play" id="little-play-pause"></div>
             <div class="little-control-after"></div>
        </div>
        <div class="little-progress-wrap">
            <div class="little-player-play-progress"></div>
            <div class="little-player-buffer-progress"></div>
        </div>
    </div>
</div>

<audio id="little-player-audio" preload="auto"></audio>
`;


export default class Template {
    constructor(player) {
        this.player = player;
        this.update();
        this.listen();
    }

    listen() {
        this.player.options.containerElement = document.querySelector('.little-player-container');
        this.player.options.autioElement = document.getElementById("little-player-audio");
        this.player.options.titleBoxElement = document.querySelector(".little-player-play-title-box");
        this.player.options.titleElement = document.querySelector('.little-player-play-title');
        this.player.options.audioIconElement = document.querySelector('.little-player-play-icon');
        this.player.options.progressElement = document.querySelector('.little-player-play-progress');
        this.player.options.progressWrapElement = document.querySelector('.little-progress-wrap');
        this.player.options.infoElement = document.querySelector('.little-player-self');
        this.player.options.controllerElement = document.querySelector('.little-player-controller');
        this.player.options.controlWrapElement = document.querySelector('.little-player-control-wrap');
        this.player.options.controlBeforeElement = document.querySelector('.little-control-before');
        this.player.options.controlAfterElement = document.querySelector('.little-control-after');

        // 进度条hover
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

        // 显示控制区
        if(this.player.options.alwaysShowPlayer){
            this.player.options.controllerElement.classList.remove('little-player-controller-hide');
            this.player.options.controllerElement.classList.add('little-player-controller-hover');
        }

        window.addEventListener('click', (event) => {
           // console.log(event, event.target);
           if(!this.player.options.alwaysShowPlayer && !this.player.options.containerElement.contains(event.target)) {
               this.player.options.controllerElement.classList.replace('little-player-controller-hover', 'little-player-controller-hide');
           }
        });

        this.player.options.infoElement.addEventListener('mouseover',  () => {
            this.player.options.controllerElement.classList.remove('little-player-controller-hide');
            this.player.options.controllerElement.classList.add('little-player-controller-hover');
        });

        // 进度条计算
        const TotalWidth = this.player.options.progressWrapElement.clientWidth;
        this.player.on('currentTime', (currentTime) => {
            const duration = this.player.options.duration;
            const width = currentTime / duration * TotalWidth;
            this.player.options.progressElement.style.width = width+ 'px';
        });

        // 上一首 下一首
        this.player.options.controlBeforeElement.addEventListener('click', (event) => {
           this.player.emit('prevMusic', event);
        });

        this.player.options.controlAfterElement.addEventListener('click', (event) => {
            this.player.emit('nextMusic', event);
        });
    }

    update() {
        this.player.options.container.innerHTML = containerHTML;
    }

    destroy() {
        this.player.options.container.innerHTML = '';
    }
}
