import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { header } from "./components/header/header.js";
import { handleData } from "./handleData.js";
import { notFound } from "./components/notFound/notFound.js";

let searchQuery = "";

const handleSearch = (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  displayData(searchQuery);
};

const displayData = async (searchQuery) => {
  try {
    const data = await handleData({ searchQuery });

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
    //attach event listener only once and return search query
    const searchInput = document.querySelector("#place");
    searchInput.addEventListener("keyup", (e) => handleSearch(e), {
      once: true,
    });
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", displayData(searchQuery));
