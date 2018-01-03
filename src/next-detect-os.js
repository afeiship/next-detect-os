(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var USER_AGENT = global.navigator.userAgent;
  var PLATFORM = global.navigator.platform;
  var IOS_RE = /iPhone|iPad|iPod/;
  var ANDROID_RE = /Android/;
  var BLACKBERRY_RE = /BlackBerry/;
  var MAC_RE = /Mac/;
  var WINDOWS_RE = /Win/;
  var LINUX_RE = /Linux/;

  var NxDetectOs = nx.declare('nx.DetectOs', {
    statics:{
      isIos: function(){
        return IOS_RE.test(PLATFORM);
      },
      isAndroid : function () {
        return ANDROID_RE.test(USER_AGENT);
      },
      isBlackBerry : function () {
        return BLACKBERRY_RE.test(PLATFORM);
      },
      isMac : function () {
        return MAC_RE.test(PLATFORM);
      },
      isWindows : function () {
        return WINDOWS_RE.test(PLATFORM);
      },
      isLinux : function () {
        return LINUX_RE.test(PLATFORM) && !NxDetectOs.isAndroid();
      },
      get: function() {
        if (NxDetectOs.isIos()) return 'iOS';
        if (NxDetectOs.isAndroid()) return 'Android';
        if (NxDetectOs.isBlackBerry()) return 'BlackBerry';
        if (NxDetectOs.isMac()) return 'Mac';
        if (NxDetectOs.isWindows()) return 'Windows';
        if (NxDetectOs.isLinux()) return 'Linux';
        return 'Unknown';
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectOs;
  }

}());
