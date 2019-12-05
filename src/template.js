/**
 * 模板
 */
const containerHTML = `
<div class="little-player-container">
    <div class="little-player-self">
        <div class="little-player-play-icon">
            <span class="little-player-column"></span>
            <span class="little-player-column"></span>
            <span class="little-player-column"></span>
            <span class="little-player-column"></span>
        </div>
        <div class="little-player-play-title">
            <div class="little-player-play-title-box"></div>
        </div>
    </div>
    <div class="little-player-controller">
        <div class="little-player-control-wrap">
             <div class="little-control-before"></div>
             <div class="little-control-play"></div>
             <div class="little-control-after"></div>
        </div>
        <div class="little-progress-wrap">
             <div class="little-player-play-progress"></div>
             <div class="little-player-buffer-progress"></div>
        </div>
    </div>
</div>

<audio id="little-player-audio" autoplay="true"></audio>
`;


export default class Template {
    constructor(player) {
        this.player = player;
        this.update();
    }

    update() {
        this.player.options.container.innerHTML = containerHTML;
    }

    destroy() {
        this.player.options.container.innerHTML = '';
    }
}
