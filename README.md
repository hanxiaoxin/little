## LittlePlayer 音乐播放器


[示例地址demo](http://little.hanlinbo.top/)

[npm地址](./docs/demo.png)

<img src="https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/little.png" width="350px" alt="demo">

### API

Install

```javascript
npm i @nankle/little
```

Options

```javascript
import LittlePlayer from '@nankle/little';

var player = new LittlePlayer(
    {
        container: document.getElementById("littleBox"),
        autoPlay: false // 自动播放受到最近浏览器限制，开启暂时不生效
    }
)
```

Load target:

```javascript
// The target can be the url address of media or a mediaElement
player.load(
    [
        {
            url: "./audios/break-out.mp3",
            title: "break-out.mp3",
            cover: 'https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/covers/break-out.png'
        },
        {
            url: "./audios/break-out.mp3",
            title: "break-out.mp3",
            cover: 'https://blog-1251618686.cos.ap-guangzhou.myqcloud.com/abouts/covers/break-out.png'
        }
    ]
);
```

Destroy instance:
```javascript
player.destroy();
```
