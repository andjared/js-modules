import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { notFound } from "./components/notFound/notFound.js";

class Renderer {
  constructor() {
    this.state = [];
  }

  setState(data) {
    this.state = [...data];
    this.render(this.state);
  }

  createVDom(data) {
    const dom = new Map();

    data.forEach((item) => {
      dom.set(item.id, item);
    });

    return dom;
  }

  render(data) {
    console.log(this.createVDom(data));

    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");

    if (!data.length) {
      gridContainer?.replaceWith(notFound());
      return;
    }

    if (notFoundPage) {
      notFoundPage.replaceWith(cardsSection({ data }));
      return;
    }

    if (gridContainer) {
      gridContainer.replaceWith(cardsSection({ data }));
      return;
    }

    //sacuvaj referencu ka elementu
  }

  diff() {
    //odradi diff izmedju vdoma i dom-a
  }
}

export { Renderer };
