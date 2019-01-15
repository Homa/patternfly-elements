import PFElement from "../pfelement/pfelement.js";

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

// -- Polyfills
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

class PfeBand extends PFElement {
  get html() {
    return `<style>:host {
  display: block;
  --pfe-band--padding__vertical:               calc( var(--pfe-theme--container-spacer, 1rem) * 4);
  --pfe-band--padding__horizontal:             calc( var(--pfe-theme--container-spacer, 1rem) * 1);
  --pfe-band--padding:                         var(--pfe-band--padding__vertical)  var(--pfe-band--padding__horizontal);
  --pfe-band--backgroundColor:                 var(--pfe-theme--color--surface--base, #dfdfdf);
  --pfe-band--backgroundPosition:              center center;
  --pfe-band--border:                          var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;
  --pfe-band--layout:                          1fr;
  --pfe-band_header--layout:                   1fr;
  --pfe-band_body--layout:                     1fr;
  --pfe-band_footer--layout:                   1fr;
  --pfe-band_aside--layout:                    1fr;
  --pfe-band--gutter:                          var(--pfe-theme--container-spacer, 1rem);
  --pfe-broadcasted--color--text:              var(--pfe-theme--color--surface--base--text, #333);
  --pfe-broadcasted--color--ui-link:           var(--pfe-theme--color--surface--base--link, #00538c);
  --pfe-broadcasted--color--ui-link--visited:  var(--pfe-theme--color--surface--base--link--visited, #7551a6);
  --pfe-broadcasted--color--ui-link--hover:    var(--pfe-theme--color--surface--base--link--hover, #00305b);
  --pfe-broadcasted--color--ui-link--focus:    var(--pfe-theme--color--surface--base--link--focus, #00305b);
  --pfe-band--width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding: calc(var(--pfe-band--padding__vertical) / 2) var(--pfe-band--padding__horizontal);
  border: var(--pfe-band--border);
  background-color: var(--pfe-band--backgroundColor);
  background-position: var(--pfe-band--backgroundPosition);
  color: var(--pfe-broadcasted--color--text); }
  @media screen and (min-width: 768px) {
    :host {
      --pfe-band--width: calc( 768px - calc(var(--pfe-band--padding__horizontal) * 4) ); } }
  @media screen and (min-width: 992px) {
    :host {
      --pfe-band--width: calc( 992px - calc(var(--pfe-band--padding__horizontal) * 4) ); } }
  @media screen and (min-width: 1200px) {
    :host {
      --pfe-band--width: calc( 1200px - calc(var(--pfe-band--padding__horizontal) * 4) ); } }
  @media print {
    :host {
      --pfe-band--padding: calc(var(--pfe-band--padding__vertical) / 2) var(--pfe-band--padding__horizontal); } }
  @media (min-width: 576px) {
    :host {
      padding: var(--pfe-band--padding); } }
  @media print {
    :host {
      background-color: white !important;
      background-image: none !important;
      box-shadow: none !important; } }
  :host *, :host *::before, :host *::after {
    box-sizing: border-box; }

:host([pfe-color="darker"]) {
  --pfe-band--backgroundColor:                  var(--pfe-theme--color--surface--darker, #464646);
  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darker--text, #fff);
  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darker--link, #99ccff);
  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darker--link--visited, #b38cd9);
  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darker--link--hover, #cce6ff);
  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darker--link--focus, #cce6ff); }

:host([pfe-color="darkest"]) {
  --pfe-band--backgroundColor:                  var(--pfe-theme--color--surface--darkest, #131313);
  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darkest--text, #fff);
  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darkest--link, #99ccff);
  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darkest--link--visited, #b38cd9);
  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darkest--link--hover, #cce6ff);
  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff); }

:host([pfe-color="accent"]) {
  --pfe-band--backgroundColor:                  var(--pfe-theme--color--surface--accent, #fe460d);
  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--accent--text, #fff);
  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--accent--link, #99ccff);
  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--accent--link--visited, #b38cd9);
  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--accent--link--hover, #cce6ff);
  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--accent--link--focus, #cce6ff); }

:host([pfe-color="complement"]) {
  --pfe-band--backgroundColor:                  var(--pfe-theme--color--surface--complement, #0477a4);
  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--complement--text, #fff);
  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--complement--link, #99ccff);
  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--complement--link--visited, #b38cd9);
  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--complement--link--hover, #cce6ff);
  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--complement--link--focus, #cce6ff); }

:host([pfe-color="lighter"]) {
  --pfe-band--backgroundColor:                  var(--pfe-theme--color--surface--lighter, #ececec);
  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lighter--text, #333);
  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lighter--link, #06c);
  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lighter--link--visited, rebeccapurple);
  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lighter--link--hover, #003366);
  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lighter--link--focus, #003366); }

:host([pfe-color="lightest"]) {
  --pfe-band--backgroundColor:                  var(--pfe-theme--color--surface--lightest, #fff);
  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lightest--text, #333);
  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lightest--link, #06c);
  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lightest--link--visited, rebeccapurple);
  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lightest--link--hover, #003366);
  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lightest--link--focus, #003366); }

:host([pfe-size="small"]) {
  --pfe-band--padding:   calc(var(--pfe-band--padding__vertical) / 4)  var(--pfe-band--padding__horizontal); }

.pfe-band__container {
  --pfe-band_region--width: calc(1fr - 240px - var(--pfe-band--gutter));
  --pfe-band--gridTemplateArea_row2: "body";
  position: relative;
  margin: 0 auto;
  max-width: var(--pfe-band--width);
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between; }
  @media (min-width: 768px) {
    .pfe-band__container {
      --pfe-band--gridTemplateArea_row2: "body body"; } }
  @supports (display: grid) {
    .pfe-band__container {
      display: grid;
      grid-gap: var(--pfe-band--gutter);
      grid-column-gap: calc(var(--pfe-band--gutter) * 3);
      grid-template-columns: var(--pfe-band--layout);
      grid-template-rows: max-content;
      grid-template-areas: var(--pfe-band--gridTemplateArea_row1) var(--pfe-band--gridTemplateArea_row2); } }
  @media (min-width: 768px) {
    .pfe-band__container[pfe-aside-desktop="left"], .pfe-band__container[pfe-aside-mobile="top"] {
      flex-direction: row-reverse; } }
  .pfe-band__container[pfe-has-header] {
    --pfe-band--gridTemplateArea_row1: "header"; }
    @media (min-width: 768px) {
      .pfe-band__container[pfe-has-header] {
        --pfe-band--gridTemplateArea_row1: "header header"; } }
    .pfe-band__container[pfe-has-header][pfe-aside-mobile="top"] {
      --pfe-band--gridTemplateArea_row1: "aside" "header"; }
      @media (min-width: 768px) {
        .pfe-band__container[pfe-has-header][pfe-aside-mobile="top"] {
          --pfe-band--gridTemplateArea_row1: "header header"; } }
  .pfe-band__container[pfe-has-aside] {
    --pfe-band--gridTemplateArea_row2: "main" "aside"; }
    @media (min-width: 768px) {
      .pfe-band__container[pfe-has-aside] {
        --pfe-band--layout: 1fr 240px;
        --pfe-band--gridTemplateArea_row2: "main aside"; } }
    @media (min-width: 992px) {
      .pfe-band__container[pfe-has-aside] {
        --pfe-band--layout: 1fr 300px; } }
  .pfe-band__container[pfe-aside-mobile="top"] {
    --pfe-band--gridTemplateArea_row1: "aside";
    --pfe-band--gridTemplateArea_row2: "main"; }
  @media (min-width: 768px) {
    .pfe-band__container[pfe-aside-height="full"] {
      --pfe-band--gridTemplateArea_row1: "aside";
      --pfe-band--gridTemplateArea_row2: "main"; } }
  @media (min-width: 768px) {
    .pfe-band__container[pfe-aside-height="full"][pfe-aside-mobile="bottom"], .pfe-band__container[pfe-aside-height="full"][pfe-aside-mobile="top"] {
      --pfe-band--gridTemplateArea_row1: "main aside";
      --pfe-band--gridTemplateArea_row2: "main aside"; } }
  @media (min-width: 768px) {
    .pfe-band__container[pfe-aside-height="full"][pfe-aside-desktop="left"] {
      --pfe-band--gridTemplateArea_row1: "aside main";
      --pfe-band--gridTemplateArea_row2: "aside main"; } }
  @media (min-width: 768px) {
    .pfe-band__container[pfe-aside-desktop="left"] {
      --pfe-band--layout: 240px 1fr;
      --pfe-band--gridTemplateArea_row2: "aside main"; } }
  @media (min-width: 992px) {
    .pfe-band__container[pfe-aside-desktop="left"] {
      --pfe-band--layout: 300px 1fr; } }

.pfe-band__main {
  display: flex;
  flex-flow: column nowrap; }
  @supports (display: grid) {
    .pfe-band__main {
      display: grid;
      grid-gap: var(--pfe-band--gutter);
      grid-column-gap: calc(var(--pfe-band--gutter) * 3);
      grid-template-areas: var(--pfe-band_main--gridTemplateArea_header) "body" var(--pfe-band_main--gridTemplateArea_footer); } }
  @supports (display: grid) {
    [pfe-has-header] .pfe-band__main {
      --pfe-band_main--gridTemplateArea_header: "header"; } }
  @supports (display: grid) {
    [pfe-has-footer] .pfe-band__main {
      --pfe-band_main--gridTemplateArea_footer: "footer"; } }
  .pfe-band__main > *:not(:last-child) {
    margin-bottom: var(--pfe-band--gutter); }
  @media (min-width: 768px) {
    .pfe-band__main {
      width: var(--pfe-band_region--width); } }

.pfe-band__header {
  display: flex;
  flex-flow: column nowrap; }
  @supports (display: grid) {
    .pfe-band__header {
      display: grid;
      grid-gap: var(--pfe-band--gutter);
      grid-template-columns: var(--pfe-band_header--layout);
      grid-template-rows: max-content; } }
  .pfe-band__header:not(:last-child) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__header:not(:last-child) {
        margin-bottom: 0; } }
  .pfe-band__header::slotted(*) {
    margin: 0; }
  .pfe-band__header::slotted(*:not(:last-child)) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__header::slotted(*:not(:last-child)) {
        margin-bottom: 0; } }

.pfe-band__body {
  display: flex;
  flex-flow: column nowrap; }
  @supports (display: grid) {
    .pfe-band__body {
      display: grid;
      grid-gap: var(--pfe-band--gutter);
      grid-template-columns: var(--pfe-band_body--layout);
      grid-template-rows: max-content; } }
  .pfe-band__body:not(:last-child) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__body:not(:last-child) {
        margin-bottom: 0; } }
  .pfe-band__body::slotted(*) {
    margin: 0; }
  .pfe-band__body::slotted(*:not(:last-child)) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__body::slotted(*:not(:last-child)) {
        margin-bottom: 0; } }

.pfe-band__footer {
  display: flex;
  flex-flow: column nowrap; }
  @supports (display: grid) {
    .pfe-band__footer {
      display: grid;
      grid-gap: var(--pfe-band--gutter);
      grid-template-columns: var(--pfe-band_footer--layout);
      grid-template-rows: max-content; } }
  .pfe-band__footer:not(:last-child) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__footer:not(:last-child) {
        margin-bottom: 0; } }
  .pfe-band__footer::slotted(*) {
    margin: 0; }
  .pfe-band__footer::slotted(*:not(:last-child)) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__footer::slotted(*:not(:last-child)) {
        margin-bottom: 0; } }

.pfe-band__aside {
  display: flex;
  flex-flow: column nowrap; }
  @supports (display: grid) {
    .pfe-band__aside {
      display: grid;
      grid-gap: var(--pfe-band--gutter);
      grid-template-columns: var(--pfe-band_aside--layout);
      grid-template-rows: max-content; } }
  .pfe-band__aside:not(:last-child) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__aside:not(:last-child) {
        margin-bottom: 0; } }
  .pfe-band__aside::slotted(*) {
    margin: 0; }
  .pfe-band__aside::slotted(*:not(:last-child)) {
    margin-bottom: var(--pfe-band--gutter); }
    @supports (display: grid) {
      .pfe-band__aside::slotted(*:not(:last-child)) {
        margin-bottom: 0; } }

@supports (display: grid) {
  @media (min-width: 0) {
    .pfe-band__header {
      grid-area: header;
      width: auto; } } }

@supports (display: grid) {
  @media (min-width: 0) {
    .pfe-band__main {
      grid-area: main;
      width: auto; } } }

@supports (display: grid) {
  @media (min-width: 0) {
    .pfe-band__aside {
      grid-area: aside;
      width: auto; } } }

@media (min-width: 768px) {
  .pfe-band__header {
    order: -1; } }

@media (min-width: 768px) {
  .pfe-band__body > *::slotted(*:not(:last-child)) {
    margin-bottom: var(--pfe-band--gutter); } }

@media (min-width: 768px) {
  .pfe-band__aside {
    order: 1;
    width: 240px; }
    [pfe-aside-desktop="right"] .pfe-band__aside {
      order: 0; } }

@media (min-width: 992px) {
  .pfe-band__aside {
    width: 300px; } }</style>
<section class="pfe-band__container"${
      this.has_slot("pfe-band-aside") ? ` pfe-has-aside` : ""
    }${this.has_slot("pfe-band-header") ? ` pfe-has-header` : ""}${
      this.has_slot("pfe-band-footer") ? ` pfe-has-footer` : ""
    }>
  ${
    this.has_slot("pfe-band-aside") && this.asidePosition.mobile === "top"
      ? `<slot class="pfe-band__aside" name="pfe-band-aside"></slot>`
      : ""
  }
  ${
    this.has_slot("pfe-band-aside") && this.asidePosition.height === "full"
      ? `<div class="pfe-band__main">`
      : ""
  }
  ${
    this.has_slot("pfe-band-header")
      ? `<slot class="pfe-band__header" name="pfe-band-header"></slot>`
      : ""
  }
  ${
    this.has_slot("pfe-band-aside") && this.asidePosition.height !== "full"
      ? `<div class="pfe-band__main">`
      : ""
  }
    <slot class="pfe-band__body"></slot>
    ${
      this.has_slot("pfe-band-footer")
        ? `<slot class="pfe-band__footer" name="pfe-band-footer"></slot>`
        : ""
    }
    ${this.has_slot("pfe-band-aside") ? `</div>` : ""}
  ${
    this.has_slot("pfe-band-aside") && this.asidePosition.mobile !== "top"
      ? `<slot class="pfe-band__aside" name="pfe-band-aside"></slot>`
      : ""
  }
</section>`;
  }

  static get properties() {
    return {
      "pfe-color": {
        title: "Background color",
        type: "string",
        enum: [
          "lightest",
          "lighter",
          "base",
          "darker",
          "darkest",
          "complement",
          "accent"
        ],
        default: "base",
        observer: "_colorChanged"
      },
      "pfe-img-src": {
        title: "Background image",
        type: "string",
        default: "",
        observer: "_imgSrcChanged"
      },
      "pfe-aside-desktop": {
        title: "Aside positioning (desktop)",
        type: "string",
        default: "right",
        enum: ["right", "left"],
        observer: "_basicAttributeChanged",
        options: { dependencies: [{ type: "slot", id: "pfe-band-aside" }] }
      },
      "pfe-aside-mobile": {
        title: "Aside positioning (mobile)",
        type: "string",
        default: "bottom",
        enum: ["top", "bottom"],
        observer: "_basicAttributeChanged",
        options: { dependencies: [{ type: "slot", id: "pfe-band-aside" }] }
      },
      "pfe-aside-height": {
        title: "Aside height",
        type: "string",
        default: "body",
        enum: ["full", "body"],
        observer: "_basicAttributeChanged",
        options: { dependencies: [{ type: "slot", id: "pfe-band-aside" }] }
      }
    };
  }

  static get slots() {
    return {
      "pfe-band-header": {
        title: "Header",
        type: "array",
        namedSlot: true,
        maxItems: 3,
        items: { title: "Body item", oneOf: [{ $ref: "raw" }] }
      },
      "pfe-band-body": {
        title: "Body",
        type: "array",
        namedSlot: false,
        items: { oneOf: [{ $ref: "pfe-card" }, { $ref: "raw" }] }
      },
      "pfe-band-footer": {
        title: "Footer",
        type: "array",
        namedSlot: true,
        maxItems: 3,
        items: { oneOf: [{ $ref: "pfe-cta" }, { $ref: "raw" }] }
      },
      "pfe-band-aside": {
        title: "Aside",
        type: "array",
        namedSlot: true,
        maxItems: 5,
        items: { oneOf: [{ $ref: "pfe-card" }, { $ref: "raw" }] }
      }
    };
  }

  static get tag() {
    return "pfe-band";
  }

  get schemaUrl() {
    return "pfe-band.json";
  }

  get templateUrl() {
    return "pfe-band.html";
  }

  get styleUrl() {
    return "pfe-band.scss";
  }

  get asidePosition() {
    return {
      desktop: this.getAttribute("pfe-aside-desktop"),
      mobile: this.getAttribute("pfe-aside-mobile"),
      height: this.getAttribute("pfe-aside-height")
    };
  }

  static get observedAttributes() {
    return [
      "pfe-aside-desktop",
      "pfe-aside-mobile",
      "pfe-aside-height",
      "pfe-color",
      "pfe-img-src"
    ];
  }

  static get cascadingAttributes() {
    return {
      "pfe-aside-desktop": ".pfe-band__container",
      "pfe-aside-mobile": ".pfe-band__container",
      "pfe-aside-height": ".pfe-band__container"
    };
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Container;
  }

  constructor() {
    super(PfeBand, { type: PfeBand.PfeType });
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    super.attributeChangedCallback(attr, oldValue, newValue);

    // If the observer is defined in the attribute properties
    if (this[attr] && this[attr].observer) {
      // Get the observer function
      let observer = this[this[attr].observer].bind(this);
      // If it's a function, allow it to run
      if (typeof observer === "function") observer(attr, oldValue, newValue);
    }
  }

  _basicAttributeChanged(attr, oldValue, newValue) {
    this[attr].value = newValue;
  }

  // Update the color attribute and contexts
  _colorChanged(attr, oldValue, newValue) {
    this[attr].value = newValue;
    // If the new value has a dark background, update children elements
    this._updateContext(newValue);
  }

  // Update the background image
  _imgSrcChanged(attr, oldValue, newValue) {
    // Set the image as the background image
    this.style.backgroundImage = newValue ? `url('${newValue}')` : ``;
  }

  // Set the children's context if parent background is dark
  _updateContext(context) {
    if (["darkest", "darker", "complement", "accent"].includes(context)) {
      ["pfe-cta"].forEach(elementName => {
        const els = [...this.querySelectorAll(`${elementName}`)];
        els.forEach(el => {
          const myContainer = el.closest("[pfe-type=container]");
          if (myContainer === this || myContainer === null) {
            el.setAttribute("on", "dark");
          }
        });
      });
    }
  }
}

PFElement.create(PfeBand);

export default PfeBand;
//# sourceMappingURL=pfe-band.js.map
