!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var n={};t(n),e.rhelement=n}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var n=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),o=t.html();return t.tag=e,t.template=document.createElement("template"),t.template.innerHTML=o,window.ShadyCSS&&o&&ShadyCSS.prepareTemplate(t.template,t.tag),t.attachShadow({mode:"open"}),o&&t.shadowRoot.appendChild(t.template.content.cloneNode(!0)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,HTMLElement),t(n,null,[{key:"create",value:function(e){window.customElements.define(e.tag,e)}}]),t(n,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this)}}]),n}();e.default=n});