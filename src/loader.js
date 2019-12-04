/**
 * 加载器
 */
export default class Loader {
    constructor(player) {
        this.player = player;
        this.fileSize = 0;
        this.loadSize = 0;
        this.data = new Uint8Array();
        this.reader = null;
        this.abortController = null;
    }

    load(target) {
        this.destroy();
        const {url, title} = target;
        // about controller ??
        this.abortController = new AbortController();
        this.player.setOptions({title: title, url: url});
        this.player.controller.setSource(url);
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
