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
    const iterator = data.length > this.state.length ? data : this.state;

    if (!data.length) {
      gridContainer?.replaceWith(notFound());
      return;
    }

    if (notFoundPage) {
      notFoundPage.replaceWith(cardsSection({ data }));
      return;
    }

    console.log(this.state, "state");
    console.log(iterator, "iterator");
    console.log(data, "data");

    for (let i = 0; i < iterator.length; i++) {
      console.log(data[i]);
      console.log(this.state[i]);
    }

    return this.state;
  }
}

export { Renderer };
