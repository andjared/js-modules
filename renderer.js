import { card } from "./components/card/card.js";
import hyperScript from "./hyperscript.js";
class Renderer {
  constructor() {
    this.state = {};
  }
  setState(data) {
    this.state = Object.assign({}, data);
    this.render(data);
  }
  createElement(element) {
    const nodeName = element.localName;
    const children = element.childNodes;
    //skip text nodes for now
    if (typeof nodeName !== "undefined") {
      const attrs = element.getAttributeNames();
      const attributes = attrs.map((attr) => {
        return { [`${attr}`]: element.getAttribute(attr) };
      });
      //recursively call fn for each child element

      children.forEach((child) => this.createElement(child));

      const node = hyperScript(nodeName, attributes, children);
      console.log(node);
    }
  }
  extractElements() {
    const data = this.state; // array of objects
    for (let item in data) {
      const element = card({ ...data[item] });
      this.createElement(element);
    }
  }
  render(data) {
    this.extractElements(data);
    //sacuvaj referencu ka elementu
  }

  diff() {
    //odradi diff izmedju vdoma i dom-a
  }
}

export { Renderer };
