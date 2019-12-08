(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.LitterPlayer = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  var LittlePlayerError =
  /*#__PURE__*/
  function (_Error) {
    inherits(LittlePlayerError, _Error);

    function LittlePlayerError(message) {
      var _this;

      classCallCheck(this, LittlePlayerError);

      _this = possibleConstructorReturn(this, getPrototypeOf(LittlePlayerError).call(this, message));
      _this.name = 'LittlePlayerError';
      return _this;
    }

    return LittlePlayerError;
  }(wrapNativeSuper(Error));
  function errorHandle(condition, msg) {
    if (!condition) {
      throw new LittlePlayerError(msg);
    }

    return condition;
  }

  /**
   * 事件发射器
   */
  var Emitter =
  /*#__PURE__*/
  function () {
    function Emitter() {
      classCallCheck(this, Emitter);
    }

    createClass(Emitter, [{
      key: "on",
      value: function on(name, fn, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
          fn: fn,
          ctx: ctx
        });
        return this;
      }
    }, {
      key: "once",
      value: function once(name, fn, ctx) {
        var self = this;

        function listener() {
          self.off(name, listener);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          fn.apply(ctx, args);
        }

        listener._ = fn;
        return this.on(name, listener, ctx);
      }
    }, {
      key: "emit",
      value: function emit(name) {
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();

        for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          data[_key2 - 1] = arguments[_key2];
        }

        for (var i = 0; i < evtArr.length; i += 1) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];

        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i += 1) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
          }
        }

        if (liveEvents.length) {
          e[name] = liveEvents;
        } else {
          delete e[name];
        }

        return this;
      }
    }]);

    return Emitter;
  }();

  /**
   * 事件
   */
  var Events =
  /*#__PURE__*/
  function () {
    function Events() {
      classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var _this = this;

        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (Array.isArray(name)) {
          name.forEach(function (item) {
            return _this.proxy(target, item, callback, option);
          });
        } else {
          target.addEventListener(name, callback, option);
          this.destroyEvents.push(function () {
            target.removeEventListener(name, callback, option);
          });
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyEvents.forEach(function (event) {
          return event();
        });
      }
    }]);

    return Events;
  }();

  /**
   * 模板
   */
  var containerHTML = "\n<div class=\"little-player-container\">\n    <div class=\"little-player-self little-info-default\">\n        <div class=\"little-player-play-icon little-playing\">\n            <span class=\"little-player-column\"></span>\n            <span class=\"little-player-column\"></span>\n            <span class=\"little-player-column\"></span>\n            <span class=\"little-player-column\"></span>\n        </div>\n        <div class=\"little-player-play-title little-player-play-title-prefix\">\n            <div class=\"little-player-play-title-box\"></div>\n        </div>\n    </div>\n    <div class=\"little-player-controller\">\n        <div class=\"little-player-control-wrap\">\n             <div class=\"little-control-before\"></div>\n             <div class=\"little-control-play\" id=\"little-play-pause\"></div>\n             <div class=\"little-control-after\"></div>\n        </div>\n        <div class=\"little-progress-wrap\">\n            <div class=\"little-player-play-progress\"></div>\n            <div class=\"little-player-buffer-progress\"></div>\n        </div>\n    </div>\n</div>\n\n<audio id=\"little-player-audio\" preload=\"auto\"></audio>\n";

  var Template =
  /*#__PURE__*/
  function () {
    function Template(player) {
      classCallCheck(this, Template);

      this.player = player;
      this.update();
      this.listen();
    }

    createClass(Template, [{
      key: "listen",
      value: function listen() {
        var _this = this;

        this.player.options.autioElement = document.getElementById("little-player-audio");
        this.player.options.titleBoxElement = document.querySelector(".little-player-play-title-box");
        this.player.options.titleElement = document.querySelector('.little-player-play-title');
        this.player.options.audioIconElement = document.querySelector('.little-player-play-icon');
        this.player.options.progressElement = document.querySelector('.little-player-play-progress');
        this.player.options.progressWrapElement = document.querySelector('.little-progress-wrap');
        this.player.options.infoElement = document.querySelector('.little-player-self');
        this.player.options.controlWrapElement = document.querySelector('.little-player-control-wrap'); // 进度条hover

        this.player.options.progressWrapElement.addEventListener('mouseover', function () {
          if (_this.player.options.progressWrapElement.classList.contains('none-thick')) {
            _this.player.options.progressWrapElement.classList.replace('none-thick', 'thick');
          } else {
            _this.player.options.progressWrapElement.classList.add('thick');
          }
        });
        this.player.options.progressWrapElement.addEventListener('mouseout', function () {
          _this.player.options.progressWrapElement.classList.replace('thick', 'none-thick');
        }); // 信息hover

        var Addfn = function Addfn() {
          _this.player.options.infoElement.classList.replace('little-info-default', 'little-info-active');

          _this.player.options.infoElement.classList.add('hover');
        };

        var removeFn = function removeFn() {
          _this.player.options.infoElement.classList.replace('little-info-active', 'little-info-default');

          _this.player.options.infoElement.classList.remove('hover');
        };

        this.player.options.controlWrapElement.addEventListener('mouseover', Addfn);
        this.player.options.progressWrapElement.addEventListener('mouseover', Addfn);
        this.player.options.controlWrapElement.addEventListener('mouseout', removeFn);
        this.player.options.progressWrapElement.addEventListener('mouseout', removeFn);
        this.player.options.controlWrapElement = document.querySelector('.little-player-control-wrap');
        this.player.options.controlPlayAndPauseElement = document.querySelector('.little-control-play'); // 进度条计算

        var TotalWidth = this.player.options.progressWrapElement.clientWidth;
        this.player.on('currentTime', function (currentTime) {
          var duration = _this.player.options.duration;
          var width = currentTime / duration * TotalWidth;
          _this.player.options.progressElement.style.width = width + 'px';
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.player.options.container.innerHTML = containerHTML;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.player.options.container.innerHTML = '';
      }
    }]);

    return Template;
  }();

  /**
   * 解析器
   */
  var Decoder = function Decoder(player) {
    classCallCheck(this, Decoder);

    this.player = player;
  };

  /**
   * 绘制器
   */
  var Drawer = function Drawer(player) {
    classCallCheck(this, Drawer);

    this.player = player;
  };

  var optionValidator = createCommonjsModule(function (module, exports) {
  !function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if(!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw "string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
  });

  /**
   * 控制器
   */

  var Controller =
  /*#__PURE__*/
  function () {
    function Controller(player) {
      classCallCheck(this, Controller);

      this.player = player;
      this.init();
      this.listen();
    }

    createClass(Controller, [{
      key: "init",
      value: function init() {
        // 自动播放
        if (this.player.options.autoPlay) {
          this.play();
        }
      }
    }, {
      key: "listen",
      value: function listen() {
        var _this = this;

        // 音频时长
        this.player.options.autioElement.addEventListener('canplay', function () {
          _this.player.options.duration = _this.player.options.autioElement.duration;
        }); // 进度变化

        this.player.options.autioElement.addEventListener('timeupdate', function () {
          _this.player.emit('currentTime', _this.player.options.autioElement.currentTime);
        });
        this.player.options.autioElement.addEventListener('ended', function () {
          _this.player.emit('ended', _this.player.options.autioElement.currentTime);

          _this.pause();

          _this.seek(0);
        }); // 播放器按钮

        this.player.options.controlPlayAndPauseElement.addEventListener('click', function () {
          if (_this.player.options.playing) {
            _this.pause();
          } else {
            _this.play();
          }
        });
        this.player.options.progressWrapElement.addEventListener('click', function (event) {
          var clientX = event.clientX;

          var rect = _this.player.options.progressWrapElement.getBoundingClientRect();

          var totalX = _this.player.options.progressWrapElement.clientWidth;
          var seekTime = (clientX - rect.left) / totalX * _this.player.options.duration;

          _this.seek(seekTime);
        });
      }
    }, {
      key: "setSource",
      value: function setSource(target) {
        errorHandle(target && target.url, 'audio url is invalid!');
        this.player.options.autioElement.setAttribute('src', target.url);
        this.player.options.autioElement.load();
        this.player.options.titleBoxElement.innerHTML = this.player.options.title;
      }
    }, {
      key: "play",
      value: function play() {
        var _this2 = this;

        setTimeout(function () {
          var playPromise = _this2.player.options.autioElement.play();

          if (playPromise !== undefined) {
            playPromise.then(function (_) {})["catch"](function (error) {
              console.log(error);
            });
          }

          _this2.player.options.playing = true;
        }, 0);
        this.player.options.controlPlayAndPauseElement.classList.replace('little-control-play', 'little-control-play-playing');
        this.player.options.audioIconElement.classList.add('little-playing');
      }
    }, {
      key: "pause",
      value: function pause() {
        this.player.options.autioElement.pause();
        this.player.options.playing = false;
        this.player.options.controlPlayAndPauseElement.classList.replace('little-control-play-playing', 'little-control-play');
        this.player.options.audioIconElement.classList.remove('little-playing');
      }
    }, {
      key: "seek",
      value: function seek(time) {
        this.player.options.autioElement.currentTime = time;
      }
    }]);

    return Controller;
  }();

  /**
   * 加载器
   */
  var Loader =
  /*#__PURE__*/
  function () {
    function Loader(player) {
      classCallCheck(this, Loader);

      this.player = player;
      this.fileSize = 0;
      this.loadSize = 0;
      this.data = new Uint8Array();
      this.reader = null;
      this.abortController = null;
    }

    createClass(Loader, [{
      key: "load",
      value: function load(target) {
        this.destroy(); // about controller ??

        this.abortController = new AbortController();
        this.player.setOptions(target);
        this.player.controller.setSource(target);
      }
    }, {
      key: "destroy",
      value: function destroy() {
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
    }]);

    return Loader;
  }();

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "@keyframes music-dance {\n    0% {\n        -webkit-transform: scaleY(0);\n        transform: scaleY(0)\n    }\n\n    to {\n        -webkit-transform: scaleY(1);\n        transform: scaleY(1)\n    }\n}\n\n@keyframes title-dance {\n    0% {\n        -webkit-transform: translateX(100%);\n        transform: translateX(100%);\n    }\n\n    to {\n        -webkit-transform: translateX(-100%);\n        transform: translateX(-100%);\n    }\n}\n\n@keyframes progressThick {\n    0% {\n        height: 4px;\n    }\n\n    to {\n        height: 6px;\n    }\n}\n\n@keyframes progressNoneThick {\n    0% {\n        height: 6px;\n    }\n\n    to {\n        height: 4px;\n    }\n}\n\n\n.little-player-container{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    border: 1px solid hsla(0,0%,100%,.32);\n    box-sizing: border-box;\n    z-index: 10;\n    width: 135px;\n    height: auto;\n}\n\n.little-player-self{\n    width: 100%;\n    height: 32px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.little-player-controller{\n    position: relative;\n    width: 100%;\n    height: 135px;\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/manxian.jpg\");\n    background-size: cover;\n    background-position: 50%;\n    background-repeat: no-repeat;\n}\n\n\n.little-player-play-title {\n    font-size: 14px;\n    width: 100px;\n    height: 32px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    overflow: hidden;\n}\n\n.little-player-play-icon {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.little-player-column {\n    width: 2px;\n    height: 14px;\n    margin-right: 2px;\n    transform-origin: center bottom;\n    background-color: #fff;\n}\n\n.little-playing .little-player-column {\n    animation: music-dance 1s linear infinite;\n    animation-direction: reverse;\n}\n\n.hover .little-player-column {\n    width: 2px;\n    height: 14px;\n    margin-right: 2px;\n    transform-origin: center bottom;\n    /*animation: music-dance 1s linear infinite;*/\n    /*animation-direction: reverse;*/\n    background-color: #4becff;\n}\n\n.little-player-column:first-child {\n    transform: scaleY(0.25);\n}\n\n.little-player-column:nth-child(2) {\n    transform: scaleY(0.55);\n    animation-delay: .2s;\n}\n\n.little-player-column:nth-child(3) {\n    transform: scaleY(0.75);\n    animation-delay: .4s;\n}\n\n.little-player-column:last-child {\n    animation-delay: .6s;\n}\n\n.little-player-play-title{\n    overflow: hidden;\n}\n\n.little-player-play-title-prefix .little-player-play-title-box{\n    width: 100%;\n    animation: title-dance 5s linear infinite;\n}\n\n\n.little-player-control-wrap{\n    position: absolute;\n    width: 135px;\n    height: 32px;\n    bottom: 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.little-control-before{\n    cursor: pointer;\n    width: 45px;\n    height: 32px;\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/next.png\");\n    transform: rotate(180deg);\n}\n\n.little-control-before:hover{\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/before.png\");\n}\n\n.little-control-play {\n    cursor: pointer;\n    width: 45px;\n    height: 32px;\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/play.png\");\n}\n\n.little-control-play:hover {\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/hover.png\");\n}\n\n.little-control-play-playing {\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/playing.png\");\n    cursor: pointer;\n    width: 45px;\n    height: 32px;\n}\n\n.little-control-play-playing:hover {\n    cursor: pointer;\n    width: 45px;\n    height: 32px;\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/playing-ac.png\");\n\n}\n\n.little-control-after{\n    cursor: pointer;\n    width: 45px;\n    height: 32px;\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/next.png\");\n}\n\n.little-control-after:hover{\n    background-image: url(\"https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/before.png\");\n}\n\n.little-progress-wrap {\n    width: 100%;\n    height: 4px;\n    position: absolute;\n    left:0;\n    bottom:0;\n    background-color: #000;\n    cursor: pointer;\n    transform-origin: center bottom;\n    z-index: 0;\n}\n\n.thick {\n    animation: progressThick 0.15s forwards;\n}\n\n.none-thick {\n    animation: progressNoneThick 0.15s forwards;\n}\n\n.little-player-play-progress {\n    background-color: #3a91ff;\n    position: absolute;\n    left:0;\n    top:0;\n    height: 100%;\n    /*width: 50%;*/\n    transform-origin: center bottom;\n    z-index: 10;\n}\n\n.little-player-buffer-progress {\n    background-color: #838b8b;\n    position: absolute;\n    left:0;\n    top:0;\n    height: 100%;\n    transform-origin: center bottom;\n    z-index: 5;\n}\n\n.little-info-default {\n    color: #fff;\n}\n\n.little-info-active{\n    color: #4becff;\n}\n\n\n\n";
  styleInject(css);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var id = 0;
  var instances = [];

  var LittlePlayer =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(LittlePlayer, _Emitter);

    createClass(LittlePlayer, null, [{
      key: "instances",
      get: function get() {
        return instances;
      }
    }, {
      key: "version",
      get: function get() {
        return '__VERSION__';
      }
    }, {
      key: "env",
      get: function get() {
        return '__ENV__';
      }
    }, {
      key: "default",
      get: function get() {
        return {
          container: '#littleBox',
          // player dom id
          mediaElement: null,
          // maybe a audio element
          wave: true,
          // player wave
          waveColor: 'rgba(255, 255, 255, 0.1)',
          // wave color
          backgroundColor: 'rgb(28, 32, 34)',
          // player background color
          paddingColor: 'rgba(255, 255, 255, 0.05)',
          // player padding color
          cursor: true,
          //
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
          autoPlay: false,
          // 自动播放
          playing: false // 是否正在播放

        };
      }
      /**
       * 类型标准
       * @returns {Little}
       */

    }, {
      key: "scheme",
      get: function get() {
        var checkNum = function checkNum(name, min, max, isInteger) {
          return function (value, type) {
            errorHandle(type === 'number', "".concat(name, " expects to receive number as a parameter, but got ").concat(type, "."));
            errorHandle(value >= min && value <= max && (isInteger ? Number.isInteger(value) : true), "'options.".concat(name, "' expect ").concat(isInteger ? 'an integer ' : 'a ', "number that >= ").concat(min, " and <= ").concat(max, ", but got ").concat(value, "."));
            return true;
          };
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
          playing: 'boolean'
        };
      }
    }]);

    function LittlePlayer(options) {
      var _this;

      classCallCheck(this, LittlePlayer);

      _this = possibleConstructorReturn(this, getPrototypeOf(LittlePlayer).call(this));
      _this.options = {};
      _this._currentTime = 0;
      _this.isDestroy = false;

      _this.setOptions(options);

      _this.events = new Events(assertThisInitialized(_this));
      _this.template = new Template(assertThisInitialized(_this));
      _this.decoder = new Decoder(assertThisInitialized(_this));
      _this.drawer = new Drawer(assertThisInitialized(_this));
      _this.loader = new Loader(assertThisInitialized(_this));
      _this.controller = new Controller(assertThisInitialized(_this));
      id += 1;
      _this.id = id;
      instances.push(assertThisInitialized(_this));
      return _this;
    }

    createClass(LittlePlayer, [{
      key: "setOptions",
      value: function setOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        errorHandle(optionValidator.kindOf(options) === 'object', 'setOptions expects to receive object as a parameter.');

        if (typeof options.container === 'string') {
          options.container = document.querySelector(options.container);
        }

        if (typeof options.mediaElement === 'string') {
          options.mediaElement = document.querySelector(options.mediaElement);
        }

        this.options = optionValidator(_objectSpread({}, LittlePlayer["default"], {}, this.options, {}, options), LittlePlayer.scheme);
        this.emit('options', this.options);
        return this;
      }
      /**
       * 加载媒体文件
       * @param target
       */

    }, {
      key: "load",
      value: function load(target) {
        if (target instanceof HTMLAudioElement || target instanceof HTMLVideoElement) {
          this.options.mediaElement = target;
          target = target.src;
        }

        this.loader.load(target);
        this.emit('load');
        return this;
      }
    }]);

    return LittlePlayer;
  }(Emitter);

  return LittlePlayer;

})));
//# sourceMappingURL=little-player.js.map
