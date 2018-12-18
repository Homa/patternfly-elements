!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../pfelement/pfelement.umd")):"function"==typeof define&&define.amd?define(["../pfelement/pfelement.umd"],t):e.PfeBand=t(e.PFElement)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,o)}if("value"in i)return i.value;var r=i.get;return void 0!==r?r.call(o):void 0},e=function(e){function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,o)),t=o.properties;for(var n in t)t.hasOwnProperty(n)&&(e.hasAttribute(n)?e[n]=e.getAttribute(n):(e.setAttribute(n,t[n].value),e[n]=t[n].value));return e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,t),n(o,[{key:"html",get:function(){return'\n<div class="pfe-band__wrapper">\n  <div class="pfe-band__container">\n    '+(this.has_slot("aside")&&this.asidePosition.includes("full")&&this.asidePosition.includes("top")?'<slot class="pfe-band__aside" name="aside"></slot>':"")+'\n    <section class="pfe-band__main">\n      '+(this.has_slot("header")?'<slot class="pfe-band__header" name="header"></slot>':"")+'\n      <div class="pfe-band__content">\n        '+(this.has_slot("aside")&&!this.asidePosition.includes("full")&&this.asidePosition.includes("top")?'<slot class="pfe-band__aside" name="aside"></slot>':"")+'\n        <slot class="pfe-band__body"></slot>\n        '+(!this.has_slot("aside")||this.asidePosition.includes("full")||this.asidePosition.includes("top")?"":'<slot class="pfe-band__aside" name="aside"></slot>')+"\n      </div>\n      "+(this.has_slot("footer")?'<slot class="pfe-band__footer" name="footer"></slot>':"")+"\n    </section>\n    "+(this.has_slot("aside")&&this.asidePosition.includes("full")&&!this.asidePosition.includes("top")?'<slot class="pfe-band__aside" name="aside"></slot>':"")+"\n  </div>\n</div>"}},{key:"schemaUrl",get:function(){return"pfe-band.json"}},{key:"templateUrl",get:function(){return"pfe-band.html"}},{key:"styleUrl",get:function(){return"pfe-band.scss"}},{key:"asidePosition",get:function(){var e=[],t=this.getAttribute("pfe-aside");return t&&(e=t.split(" ")),e}}],[{key:"properties",get:function(){return{"pfe-color":{title:"Background color",name:"pfe-color",type:"string",enum:["lightest","light","base","dark","darkest","complement","accent"],default:"base",observer:"_colorChanged"},"pfe-img-src":{title:"Background image",name:"pfe-img-src",type:"string",default:"",observer:"_imgSrcChanged"}}}},{key:"tag",get:function(){return"pfe-band"}},{key:"observedAttributes",get:function(){return["pfe-aside","pfe-img-src"]}},{key:"cascadingAttributes",get:function(){return{aside:".pfe-band__wrapper"}}},{key:"pfeType",get:function(){return t.pfeType.container}}]),n(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this)}},{key:"attributeChangedCallback",value:function(e,t,n){switch(i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this).call(this,e,t,n),e){case"pfe-img-src":this.shadowRoot.querySelector(".pfe-band__wrapper").style.backgroundImage=n?"url('"+n+"')":""}}}]),o}();return t.create(e),e});
//# sourceMappingURL=pfe-band.umd.js.map
