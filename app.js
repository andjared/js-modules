import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { header } from "./components/header/header.js";
import { notFound } from "./components/notFound/notFound.js";
import { PropertyController } from "./propertyController.js";
import { Renderer } from "./renderer.js";

const App = async () => {
  try {
    const propertyCtx = new PropertyController();
    const data = await propertyCtx.fetchData();

    const handleSearchEvent = (query) => {
      const data = propertyCtx.filterData(query);
      const rerender = new Renderer();
      rerender.render(data);
    };

    render(data, handleSearchEvent);
  } catch (error) {
    console.log(error);
  }
};

const render = (data, handleSearchEvent) => {
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

  document.body.append(header({ handleSearchEvent }), cardsSection({ data }));
};

window.addEventListener("DOMContentLoaded", App);
