!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.PFElement=t()}(this,function(){"use strict";var o=function(){return null};function r(){o("[reveal] web components ready"),o("[reveal] elements ready, revealing the body"),window.document.body.removeAttribute("unresolved")}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},e=function(e){function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.type,o=void 0===n?null:n,r=t.delayRender,i=void 0!==r&&r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return u._pfeClass=e,u.tag=e.tag,u._queue=[],u.template=document.createElement("template"),"object"===l(e.properties)&&u._mapSchemaToProperties(e.properties),u.attachShadow({mode:"open"}),o&&u._queueAction({type:"setProperty",data:{name:"pfeType",value:o}}),i||u.render(),u}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,HTMLElement),t(a,[{key:"has_slot",value:function(e){return this.querySelector("[slot='"+e+"']")}},{key:"pfeType",get:function(){return this.getAttribute("pfe-type")},set:function(e){this.setAttribute("pfe-type",e)}}],[{key:"create",value:function(e){window.customElements.define(e.tag,e)}},{key:"debugLog",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(a._debugLog=!!e),a._debugLog}},{key:"log",value:function(){var e;a.debugLog()&&(e=console).log.apply(e,arguments)}},{key:"PfeTypes",get:function(){return{Container:"container",Content:"content",Combo:"combo"}}}]),t(a,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.classList.add("PFElement"),this._queue.length&&this._processQueue()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this._pfeClass.cascadingAttributes){var o=this._pfeClass.cascadingAttributes[e];o&&this._copyAttribute(e,o)}}},{key:"_copyAttribute",value:function(e,t){var n=[].concat(c(this.querySelectorAll(t)),c(this.shadowRoot.querySelectorAll(t))),o=this.getAttribute(e),r=null==o?"removeAttribute":"setAttribute",i=!0,u=!1,a=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){l.value[r](e,o)}}catch(e){u=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(u)throw a}}}},{key:"_mapSchemaToProperties",value:function(e){var o=this;Object.entries(e).forEach(function(e){var t=e[0],n=e[1];o[t]=n,o[t].value=null,o.hasAttribute(t)?o[t].value=o.getAttribute(t):n.default&&(o._hasDependency(n.options)||n.options&&n.options.dependencies.length<=0)&&(o.setAttribute(t,n.default),o[t].value=n.default)})}},{key:"_hasDependency",value:function(e){var t=this;return(e?e.dependencies:[]).forEach(function(e){if("slot"===e.type&&t.has_slot(e.id)||"attribute"===e.type&&t.getAttribute(e.id))return!0}),!1}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var t=this;this._queue.forEach(function(e){t["_"+e.type](e.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var t=e.name,n=e.value;this[t]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML="",this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];a.log.apply(a,["["+this.tag+"]"].concat(t))}}]),a}();return function(e){o=e;var t=window.WebComponents,n=t&&window.WebComponents.ready;!t||n?r():window.addEventListener("WebComponentsReady",r)}(e.log),e});
//# sourceMappingURL=pfelement.umd.js.map
