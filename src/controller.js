/**
 * 控制器
 */
export default class Controller {
    constructor(player) {
        this.player = player;
        this.player.options.autioElement = document.getElementById("little-player-audio");
        this.player.options.titleElement = document.querySelector(".little-player-play-title");
    }

    setSource(url) {
        this.player.options.autioElement.setAttribute('src', url);
        this.player.options.titleElement.innerHTML = this.player.options.title;
    }

    play() {
        this.player.options.autioElement.play();
    }

    stop() {
        this.player.options.autioElement.play();
    }
}
