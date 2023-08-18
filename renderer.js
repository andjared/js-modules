import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { notFound } from "./components/notFound/notFound.js";
import { card } from "./components/card/card.js";

class Renderer {
  constructor() {
    this.state = [];
  }

  setState(data) {
    this.render(data);
  }

  render(data) {
    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");
    //iterate over array that has bigger length
    const iterator =
      data.length > this.state.length ? data.length : this.state.length;

    if (notFoundPage) {
      gridContainer.removeChild(notFoundPage);
    }

    if (!data.length) {
      gridContainer.append(notFound());
    }

    for (let i = 0; i < iterator; i++) {
      if (i < data.length && !this.state.find((el) => el.id === data[i].id)) {
        gridContainer?.append(card({ ...data[i] }));
      }

      if (i >= this.state.length) {
        continue;
      }

      if (data.find((el) => el.id === this.state[i].id)) {
        continue;
      } else {
        const element = document.getElementById(this.state[i].id);
        gridContainer.removeChild(element);
      }
    }

    this.state = data;
  }
}

export { Renderer };
