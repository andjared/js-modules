import { card } from "./components/card/card.js";
import hyperScript from "./hyperscript.js";

class Renderer {
  constructor() {
    this.state = {};
  }

  setState(data) {
    this.state = Object.assign({}, data);
  }

  createVDom(data) {
    const dom = new Map();

    for (let item in data) {
      const { id } = data[item];
      dom.set(id, data[item]);
    }

    return dom;
  }

  render(data) {
    this.setState(data);
    console.log(this.createVDom(data));

    //sacuvaj referencu ka elementu
  }

  diff() {
    //odradi diff izmedju vdoma i dom-a
  }
}

export { Renderer };
