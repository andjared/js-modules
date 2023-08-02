import { card } from "./components/card/card.js";
import hyperScript from "./hyperscript.js";

class Renderer {
  constructor() {
    this.state = {};
  }

  setState(data) {
    this.state = Object.assign({}, data);
  }

  createElement(element) {
    const { localName, childNodes } = element;
    let attributes;
    //skip text nodes for attributes
    if (localName) {
      const attrs = element.getAttributeNames();
      attributes = attrs.map((attr) => {
        return { [`${attr}`]: element.getAttribute(attr) };
      });
    }

    //recursively call fn for each child element
    const children = [...childNodes].map((child) => {
      if (!child.localName) {
        return child.textContent;
      } else {
        return this.createElement(child);
      }
    });

    const node = hyperScript(localName, attributes, children);

    return node;
  }

  createVDom(data) {
    const dom = {};
    for (let item in data) {
      const element = card({ ...data[item] });
      dom[item] = this.createElement(element);
    }
    return dom;
  }

  render(data) {
    this.setState(data);
    const dom = this.createVDom(this.state);
    console.log(dom);

    //sacuvaj referencu ka elementu
  }

  diff() {
    //odradi diff izmedju vdoma i dom-a
  }
}

export { Renderer };
