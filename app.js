import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { header } from "./components/header/header.js";
import { handleData } from "./handleData.js";
import { notFound } from "./components/notFound/notFound.js";

const displayData = async (e) => {
  try {
    const data = await handleData(e);
    const gridContainer = document.querySelector(".grid-container");
    const notFoundPage = document.querySelector(".not-found");

    if (data.length) {
      notFoundPage
        ? notFoundPage.replaceWith(cardsSection({ data }))
        : gridContainer
        ? gridContainer.replaceWith(cardsSection({ data }))
        : document.body.append(header(), cardsSection({ data }));
    } else {
      gridContainer?.replaceWith(notFound());
    }
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", (e) => displayData(e));
document.addEventListener("keyup", (e) => displayData(e));
