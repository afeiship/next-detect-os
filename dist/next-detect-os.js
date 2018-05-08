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
  var USER_AGENT = global.navigator.userAgent;
  var MICROMESSENGER = 'MicroMessenger';
  var MOBILE_RE = /AppleWebKit.*Mobile.*/;


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
      isWechat: function(){
        return USER_AGENT.indexOf(MICROMESSENGER) > -1;
      },
      isMobile: function(){
        return USER_AGENT.test(MOBILE_RE);
      },
      get: function() {
        if (NxDetectOs.isIos()) return 'ios';
        if (NxDetectOs.isAndroid()) return 'android';
        if (NxDetectOs.isBlackBerry()) return 'blackBerry';
        if (NxDetectOs.isMac()) return 'mac';
        if (NxDetectOs.isWindows()) return 'windows';
        if (NxDetectOs.isLinux()) return 'linux';
        if (NxDetectOs.isWechat()) return 'wechat';
        return null;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectOs;
  }

}());
