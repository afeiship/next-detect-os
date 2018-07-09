# next-detect-os
> Detect os for next.

## usgage:
```js
import NxDetectOs from 'next-detect-os';

// is:
NxDetectOs.isIos();
NxDetectOs.isAndroid();
NxDetectOs.isBlackBerry();
NxDetectOs.isMac();
NxDetectOs.isWindows();
NxDetectOs.isLinux();
NxDetectOs.isWechat();
NxDetectOs.isMobile();

// get os: [ios/android/blackBerry/mac/windows/linux/wechat]
if (NxDetectOs.isIos()) return 'ios';
if (NxDetectOs.isAndroid()) return 'android';
if (NxDetectOs.isBlackBerry()) return 'blackBerry';
if (NxDetectOs.isMac()) return 'mac';
if (NxDetectOs.isWindows()) return 'windows';
if (NxDetectOs.isLinux()) return 'linux';
if (NxDetectOs.isWechat()) return 'wechat';
```

## resources:
+ https://bitsrc.io/tomlandau/simple-js/platform-detection/detect-os/code
