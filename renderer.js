import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { notFound } from "./components/notFound/notFound.js";
import { card } from "./components/card/card.js";

class Renderer {
  constructor() {
    this.state = new Map();
  }

  setState(data) {
    this.diff(data);
  }

  render(appendElements, removeElements) {
    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");

    //no search results
    if (!this.state.size > 0) {
      gridContainer?.replaceWith(notFound());
      return;
    }

    if (notFoundPage) {
      notFoundPage.replaceWith(cardsSection({ data: appendElements }));
      return;
    }
  }

  diff(data) {
    const appendElements = [];
    const removeElements = [];
    console.log(appendElements);

    data.forEach((item) => {
      if (!this.state.has(item.id)) {
        appendElements.push(item);
        this.state.set(item.id, item);
      }
    });

    //remove elemente koji postoje u state a ne postoje u data

    this.state.forEach((item) => {
      if (!data.includes(item)) {
        removeElements.push(item);
        this.state.delete(item.id);
      }
    });

    this.render(appendElements, removeElements);

    return this.state;
  }
}

export { Renderer };
