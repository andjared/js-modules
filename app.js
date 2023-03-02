import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { header } from "./components/header/header.js";
import { PropertyController } from "./handleData.js";
import { notFound } from "./components/notFound/notFound.js";

const properties = new PropertyController();

const listOfAllProperties = await properties
  .fetchData()
  .then(() => properties.properties);

const handleSearchEvent = (query) => {
  displayData(properties.filterData(query));
};

const displayData = async (data) => {
  try {
    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");

    if (data.length) {
      notFoundPage
        ? notFoundPage.replaceWith(cardsSection({ data }))
        : gridContainer
        ? gridContainer.replaceWith(cardsSection({ data }))
        : document.body.append(
            header({ handleSearchEvent }),
            cardsSection({ data })
          );
    } else {
      gridContainer?.replaceWith(notFound());
    }
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", displayData(listOfAllProperties));
