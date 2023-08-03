import { card } from "./components/card/card.js";
import hyperScript from "./hyperscript.js";

class Renderer {
  constructor() {
    this.state = {};
  }

  setState(data) {
    this.state = Object.assign({}, data);
  }

  createVDom(data) {}

  render(data) {
    this.setState(data);
    console.log(data);

    //sacuvaj referencu ka elementu
  }

  diff() {
    //odradi diff izmedju vdoma i dom-a
  }
}

export { Renderer };
