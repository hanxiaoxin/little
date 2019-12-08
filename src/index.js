/**
 * 播放器
 */
import {errorHandle} from "./utils";
import Emitter from "./emitter";
import Events from "./events";
import Template from "./template";
import Decoder from "./decoder";
import Drawer from "./drawer";
import Controller from "./controller";
import Loader from "./loader";
import validator from 'option-validator';

import '../style/index.css';

let id = 0;
const instances = [];


export default class LittlePlayer  extends Emitter {
    static get instances() {
        return instances;
    }

    static get version() {
        return '__VERSION__';
    }

    static get env() {
        return '__ENV__';
    }

    static get default() {
        return {
            container: '#littleBox',  // player dom id
            mediaElement: null,  // maybe a audio element
            wave: true,     // player wave
            waveColor: 'rgba(255, 255, 255, 0.1)',  // wave color
            backgroundColor: 'rgb(28, 32, 34)',     // player background color
            paddingColor: 'rgba(255, 255, 255, 0.05)', // player padding color
            cursor: true,       //
            cursorColor: '#ff0000',
            progress: true,
            progressColor: 'rgba(255, 255, 255, 0.5)',
            grid: true,
            gridColor: 'rgba(255, 255, 255, 0.05)',
            ruler: true,
            rulerColor: 'rgba(255, 255, 255, 0.5)',
            rulerAtTop: true,
            withCredentials: false,
            cors: false,
            manualDecode: false,
            headers: {},
            channel: 0,
            duration: 10,
            padding: 5,
            waveScale: 0.8,
            pixelRatio: window.devicePixelRatio,
            firstPlay: true, // 首次播放
            autoPlay: false, // 自动播放
            playing:  false, // 是否正在播放
            defaultCover: 'https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/covers/break-out.png', // 默认封面
        };
    }

    /**
     * 类型标准
     * @returns {Little}
     */
    static get scheme() {
        const checkNum = (name, min, max, isInteger) => (value, type) => {
            errorHandle(type === 'number', `${name} expects to receive number as a parameter, but got ${type}.`);
            errorHandle(
                value >= min && value <= max && (isInteger ? Number.isInteger(value) : true),
                `'options.${name}' expect ${
                    isInteger ? 'an integer ' : 'a '
                }number that >= ${min} and <= ${max}, but got ${value}.`,
            );
            return true;
        };

        return {
            container: 'htmlelement|htmldivelement',
            mediaElement: 'null|htmlvideoelement|htmlaudioelement',
            wave: 'boolean',
            waveColor: 'string',
            backgroundColor: 'string',
            paddingColor: 'string',
            cursor: 'boolean',
            cursorColor: 'string',
            progress: 'boolean',
            progressColor: 'string',
            grid: 'boolean',
            gridColor: 'string',
            ruler: 'boolean',
            rulerColor: 'string',
            rulerAtTop: 'boolean',
            withCredentials: 'boolean',
            cors: 'boolean',
            manualDecode: 'boolean',
            headers: 'object',
            channel: checkNum('channel', 0, 5, true),
            duration: checkNum('duration', 1, 100, true),
            padding: checkNum('padding', 1, 100, true),
            waveScale: checkNum('waveScale', 0.1, 10, false),
            pixelRatio: checkNum('pixelRatio', 1, 10, false),
            autoPlay: 'boolean',
            playing: 'boolean',
            defaultCover: 'string',
            firstPlay: 'boolean'
        };
    }


    constructor(options) {
        super();

        this.options = {};
        this._currentTime = 0;
        this.isDestroy = false;

        this.setOptions(options);
        this.events = new Events(this);
        this.template = new Template(this);
        this.decoder = new Decoder(this);
        this.drawer = new Drawer(this);
        this.loader = new Loader(this);
        this.controller = new Controller(this);


        id += 1;
        this.id = id;
        instances.push(this);
    }

    setOptions(options = {}) {
        errorHandle(validator.kindOf(options) === 'object', 'setOptions expects to receive object as a parameter.');

        if (typeof options.container === 'string') {
            options.container = document.querySelector(options.container);
        }

        if (typeof options.mediaElement === 'string') {
            options.mediaElement = document.querySelector(options.mediaElement);
        }

        this.options = validator(
            {
                ...LittlePlayer.default,
                ...this.options,
                ...options,
            },
            LittlePlayer.scheme,
        );

        this.emit('options', this.options);
        return this;
    }

    /**
     * 加载媒体文件
     * @param target
     */
    load(target) {
        if (target instanceof HTMLAudioElement || target instanceof HTMLVideoElement) {
            this.options.mediaElement = target;
            target = target.src;
        }

        this.loader.load(target);
        this.emit('load');
        return this;
    }

}
