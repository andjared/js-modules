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
    const data = Array.from(appendElements.values());

    if (!this.state.size) {
      gridContainer?.replaceWith(notFound());
      return;
    }

    if (notFoundPage) {
      notFoundPage.replaceWith(cardsSection({ data }));
      return;
    }

    Array.from(gridContainer.children).forEach((child) => {
      const id = parseInt(child.id);

      //remove cards that are already rendered but are not in the new state
      if (!this.state.has(id) || removeElements.has(id)) {
        gridContainer.removeChild(child);
      }
    });

    appendElements.forEach((item) => {
      if (!document.getElementById(item.id.toString())) {
        gridContainer.append(card({ ...item }));
      }
    });
  }

  diff(data) {
    const appendElements = new Map();
    const removeElements = new Map();

    data.forEach((item) => {
      if (!this.state.has(item.id)) {
        appendElements.set(item.id, item);
        this.state.set(item.id, item);
      }
    });

    //remove elemente koji postoje u state a ne postoje u data

    this.state.forEach((item) => {
      if (!data.includes(item)) {
        removeElements.set(item.id, item);
        this.state.delete(item.id);
      }
    });

    this.render(appendElements, removeElements);

    return this.state;
  }
}

export { Renderer };
