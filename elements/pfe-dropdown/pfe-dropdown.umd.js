!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../rhelement/rhelement.umd")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd"],t):e.PfeDropdown=t(e.RHElement)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.tag))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n),r(t,[{key:"templateUrl",get:function(){return"pfe-dropdown.html"}},{key:"styleUrl",get:function(){return"pfe-dropdown.scss"}}],[{key:"tag",get:function(){return"pfe-dropdown"}}]),t}();return n.create(e),e});
//# sourceMappingURL=pfe-dropdown.umd.js.map
