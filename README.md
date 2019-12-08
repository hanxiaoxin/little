## LittlePlayer 音乐播放器


[示例地址demo](http://47.98.226.15/little/)

### API

Options

```javascript
import LittlePlayer from 'little';

var player = new LittlePlayer(
    {
        container: document.getElementById("littleBox"),
        autoPlay: true //自动播放
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
