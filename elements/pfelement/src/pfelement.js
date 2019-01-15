import { autoReveal } from "./reveal.js";

class PFElement extends HTMLElement {
  static create(pfe) {
    window.customElements.define(pfe.tag, pfe);
  }

  static debugLog(preference = null) {
    if (preference !== null) {
      PFElement._debugLog = !!preference;
    }
    return PFElement._debugLog;
  }

  static log(...msgs) {
    if (PFElement.debugLog()) {
      console.log(...msgs);
    }
  }

  static get PfeTypes() {
    return {
      Container: "container",
      Content: "content",
      Pattern: "pattern"
    };
  }

  get pfeType() {
    return this.getAttribute("pfe-type");
  }

  set pfeType(value) {
    this.setAttribute("pfe-type", value);
  }

  constructor(pfeClass, { type = null, delayRender = false } = {}) {
    super();

    this._pfeClass = pfeClass;
    this.tag = pfeClass.tag;
    this._queue = [];
    this.template = document.createElement("template");

    if (typeof pfeClass.properties === "object") {
      this._mapSchemaToProperties(pfeClass.properties);
    }

    this.attachShadow({ mode: "open" });

    if (type) {
      this._queueAction({
        type: "setProperty",
        data: {
          name: "pfeType",
          value: type
        }
      });
    }

    if (!delayRender) {
      this.render();
    }
  }

  connectedCallback() {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleElement(this);
    }

    this.classList.add("PFElement");

    if (this._queue.length) {
      this._processQueue();
    }
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (!this._pfeClass.cascadingAttributes) {
      return;
    }

    const cascadeTo = this._pfeClass.cascadingAttributes[attr];
    if (cascadeTo) {
      this._copyAttribute(attr, cascadeTo);
    }
  }

  _copyAttribute(name, to) {
    const recipients = [
      ...this.querySelectorAll(to),
      ...this.shadowRoot.querySelectorAll(to)
    ];
    const value = this.getAttribute(name);
    const fname = value == null ? "removeAttribute" : "setAttribute";
    for (const node of recipients) {
      node[fname](name, value);
    }
  }

  _queueAction(action) {
    this._queue.push(action);
  }

  _processQueue() {
    this._queue.forEach(action => {
      this[`_${action.type}`](action.data);
    });

    this._queue = [];
  }

  _setProperty({ name, value }) {
    this[name] = value;
  }

  _mapSchemaToProperties(properties) {
    // Map the imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/element.json
    Object.entries(properties).forEach(prop => {
      let attr = prop[0];
      let data = prop[1];
      // Set the attribute's property equal to the schema input
      this[attr] = data;
      // Initialize the value to null
      this[attr].value = null;

      // If the attribute exists on the host
      if (this.hasAttribute(attr)) {
        // Set property value based on the existing attribute
        this[attr].value = this.getAttribute(attr);
      }
      // Otherwise, look for a default and use that instead
      else if (data.default) {
        // If the dependency exists or there are no dependencies, set the default
        if (
          this._hasDependency(data.options) ||
          (data.options && data.options.dependencies.length <= 0)
        ) {
          this.setAttribute(attr, data.default);
          this[attr].value = data.default;
        }
      }
    });
  }

  _hasDependency(opts) {
    // Get any possible dependencies for this attribute to exist
    let dependencies = opts ? opts.dependencies : [];
    // Check that dependent item exists
    dependencies.forEach(dep => {
      // If the type is slot, check that it exists OR
      // if the type is an attribute, check if the attribute is defined
      if (
        (dep.type === "slot" && this.has_slot(dep.id)) ||
        (dep.type === "attribute" && this.getAttribute(dep.id))
      ) {
        // If the slot does exist, add the attribute with the default value
        return true;
      }
    });
    return false;
  }

  render() {
    this.shadowRoot.innerHTML = "";
    this.template.innerHTML = this.html;

    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, this.tag);
    }

    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  log(...msgs) {
    PFElement.log(`[${this.tag}]`, ...msgs);
  }
}

autoReveal(PFElement.log);

export default PFElement;
//# sourceMappingURL=PFElement.js.map
