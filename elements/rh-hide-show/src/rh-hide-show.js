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

import RHElement from "../rhelement/rhelement.js";

class RhHideShow extends RHElement {
  static get tag() {
    return "rh-hide-show";
  }

  get styleUrl() {
    return "rh-hide-show.css";
  }

  get templateUrl() {
    return "rh-hide-show.html";
  }

  get isTab() {
    return this.parentNode.offsetWidth > 768;
  }

  get tabVariant() {
    return this.getAttribute("rh-variant");
  }

  get tabOrientation() {
    if (this.hasAttribute("vertical")) {
      return "vertical";
    }
  }

  static get observedAttributes() {
    return ["vertical", "selected-index", "rh-variant", "theme", "color"];
  }

  static get cascadingAttributes() {
    return {
      vertical: "rh-tabs",
      "selected-index": "rh-tabs",
      "rh-variant": "rh-tabs",
      theme: "rh-accordion",
      color: "rh-accordion"
    };
  }

  // Declare the type of this component
  static get rhType() {
    return RHElement.rhType.combo;
  }

  constructor() {
    super(RhHideShow, {
      delayRender: true
    });

    this.groupings = [];

    this._observer = new MutationObserver(() => {
      const tempGrouping = [...this.querySelectorAll("rh-hide-show-set")];
      tempGrouping.forEach(group => {
        const tempGroup = {
          heading: group.querySelector("[heading]"),
          body: group.querySelector(":not([heading])")
        };

        this.groupings.push(tempGroup);
      });

      this.render();
    });

    this._observer.observe(this, {
      attributes: true,
      childList: true
    });

    // this.variant = this.getAttribute('rh-variant');
    // console.log(this.variant);
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.parentNode.offsetWidth);
  }

  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

RHElement.create(RhHideShow);

export default RhHideShow;
