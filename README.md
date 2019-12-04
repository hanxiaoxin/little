## LittlePlayer 音乐播放器

### API

Options

```javascript
import LittlePlayer from 'little';

var player = new LittlePlayer(
    {
        container: document.getElementById("#littleBox")
    }
)
```

Load target:

```javascript
// The target can be the url address of media or a mediaElement
player.load(target);
```

Jump to a certain time:
```javascript
player.seek(second)
```

Modify option:
```javascript
player.setOptions({
    // Like change wave color
    waveColor: 'red',
});
```

Destroy instance:

```javascript
player.destroy();
```
