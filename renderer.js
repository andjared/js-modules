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

  render() {
    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");
    const data = Array.from(this.state.values());

    if (!this.state.size) {
      gridContainer?.replaceWith(notFound());
      return;
    }

    if (notFoundPage) {
      notFoundPage.replaceWith(cardsSection({ data }));
      return;
    }

    //remove cards that are already rendered but are not in the new state
    Array.from(gridContainer.children).forEach((child) => {
      const id = parseInt(child.id);
      if (!this.state.has(id)) {
        gridContainer.removeChild(child);
      }
    });

    //append child if it doesnt already exists in dom
    this.state.forEach((item) => {
      if (!document.getElementById(item.id.toString())) {
        gridContainer.append(card({ ...item }));
      }
    });
  }

  diff(data) {
    //add elements from data that are not already in state
    data.forEach((item) => {
      if (!this.state.has(item.id)) {
        this.state.set(item.id, item);
      }
    });

    //remove elements from state that are not in data
    this.state.forEach((item) => {
      if (!data.includes(item)) {
        this.state.delete(item.id);
      }
    });

    this.render();

    return this.state;
  }
}

export { Renderer };
