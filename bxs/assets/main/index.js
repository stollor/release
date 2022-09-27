System.register("chunks:///_virtual/CPanelIndex.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var e,t,o,r;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,o=n._decorator,r=n.Component}],execute:function(){var c;t._RF.push({},"99c47IvOh9Hw6w6oqihFGSI","CPanelIndex",void 0);var u=o.ccclass;o.property,n("CPanelIndex",u("CPanelIndex")(c=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var o=t.prototype;return o.start=function(){},o.update=function(n){},o.openUrl=function(n,e){open(e)},t}(r))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CPanelIndex.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});