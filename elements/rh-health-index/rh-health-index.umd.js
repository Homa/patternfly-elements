(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../rhelement/rhelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../rhelement/rhelement.umd'], factory) :
  (global.RhHealthIndex = factory(global.RHElement));
}(this, (function (RHElement) { 'use strict';

  RHElement = RHElement && RHElement.hasOwnProperty('default') ? RHElement['default'] : RHElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2018 Red Hat, Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */

  var RhHealthIndex = function (_RHElement) {
    inherits(RhHealthIndex, _RHElement);
    createClass(RhHealthIndex, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: inline-flex;\n  align-items: center; }\n\n:host([hidden]) {\n  display: none; }\n\n.box-container {\n  display: flex;\n  border: 1px solid var(--rh-theme--color--surface--border, #dfdfdf);\n  margin-left: calc(var(--rh-theme--container-spacer, 1rem) * 0.5); }\n  .box-container .box {\n    background: #fff;\n    width: 10px;\n    height: 20px;\n    border-right: 1px solid var(--rh-theme--color--surface--border, #dfdfdf); }\n    .box-container .box:last-child {\n      border-right: 0; }\n    .box-container .box.active.a {\n      background-color: #3f9c35; }\n    .box-container .box.active.b {\n      background-color: #92d400; }\n    .box-container .box.active.c {\n      background-color: #efaa00; }\n    .box-container .box.active.d {\n      background-color: #ec7a08; }\n    .box-container .box.active.e {\n      background-color: #cc0000; }\n    .box-container .box.active.f {\n      background-color: #a30000; }\n</style>\n<div id=\"healthIndex\"></div>\n<div class=\"box-container\">\n  <div class=\"box a\"></div>\n  <div class=\"box b\"></div>\n  <div class=\"box c\"></div>\n  <div class=\"box d\"></div>\n  <div class=\"box e\"></div>\n  <div class=\"box f\"></div>\n</div>";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-health-index.html";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-health-index.scss";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-health-index";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["health-index"];
      }
    }]);

    function RhHealthIndex() {
      classCallCheck(this, RhHealthIndex);
      return possibleConstructorReturn(this, (RhHealthIndex.__proto__ || Object.getPrototypeOf(RhHealthIndex)).call(this, RhHealthIndex.tag));
    }

    createClass(RhHealthIndex, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        var healthIndex = newValue.toLowerCase();
        var healthIndexUpperCase = newValue.toUpperCase();
        var boxes = [].concat(toConsumableArray(this.shadowRoot.querySelectorAll(".box")));

        this.innerHTML = healthIndexUpperCase;
        this.shadowRoot.querySelector("#healthIndex").innerText = healthIndexUpperCase;

        boxes.forEach(function (box) {
          if (box.classList.contains(healthIndex)) {
            box.classList.add("active");
          } else {
            box.classList.remove("active");
          }
        });

        if (!this.shadowRoot.querySelector(".box.active")) {
          console.warn(RhHealthIndex.tag + ": a valid health-index was not provided. Please use A, B, C, D, E, or F");
        }
      }
    }]);
    return RhHealthIndex;
  }(RHElement);

  RHElement.create(RhHealthIndex);

  return RhHealthIndex;

})));
//# sourceMappingURL=rh-health-index.umd.js.map
