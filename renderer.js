import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { notFound } from "./components/notFound/notFound.js";

class Renderer {
  constructor(state) {
    this.state = state;
  }

  setState(data) {
    this.state = data;
    return this.state;
  }

  createVDom(data) {
    const dom = new Map();

    data.forEach((item) => {
      dom.set(item.id, item);
    });

    return dom;
  }

  render(data) {
    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");

    if (!data.length) {
      gridContainer?.replaceWith(notFound());
      return;
    }

    if (notFoundPage) {
      notFoundPage.replaceWith(cardsSection({ data }));
      return;
    } else {
      gridContainer.replaceWith(cardsSection({ data }));
      return;
    }
  }

  diff(data) {
    this.setState(data);
    // const dom = this.createVDom(data);
    // console.log(dom);
    this.render(data);
  }
}

export { Renderer };
