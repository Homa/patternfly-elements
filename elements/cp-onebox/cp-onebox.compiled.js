!function(e,t){if("function"==typeof define&&define.amd)define(["../rh-onebox/rh-onebox.compiled.js","../rhelement/rhelement.compiled.js"],t);else if("undefined"!=typeof exports)t(require("../rh-onebox/rh-onebox.compiled.js"),require("../rhelement/rhelement.compiled.js"));else{t(e.rhOneboxCompiled,e.rhelementCompiled),e.cpOnebox={}}}(this,function(e,t){"use strict";var n=o(e),r=o(t);function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.tag,{arrayName:"rules",matchArrayName:"keywords"}));return e.expandButton=null,e.expanded=!1,e.expandButtonHandler=e.expandButtonHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"styleUrl",get:function(){return"cp-onebox.scss"}},{key:"templateUrl",get:function(){return"cp-onebox.html"}}],[{key:"tag",get:function(){return"cp-onebox"}}]),i(t,[{key:"render",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this),this.expandButton=this.shadowRoot.querySelector("#expandButton"),this.expandButton.addEventListener("click",this.expandButtonHandler)}},{key:"expandButtonHandler",value:function(){this.expanded=!this.expanded,this.expanded?this.setAttribute("expanded",""):this.removeAttribute("expanded")}}]),t}();r.default.create(u)});