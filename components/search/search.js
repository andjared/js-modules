import { button } from "../button/button.js";
import { svgIcon } from "../svgIcon/svgIcon.js";
import { cardsSection } from "../cardsSection/cardsSection.js";
import { notFound } from "../notFound/notFound.js";
import styles from "./search.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const search = ({ data }) => {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const searchPlace = document.createElement("div");
  searchPlace.className = "search-place";
  const placeLabel = document.createElement("label");
  placeLabel.htmlFor = "place";
  placeLabel.innerText = "Where";
  const placeInput = document.createElement("input");
  placeInput.type = "text";
  placeInput.id = "place";
  placeInput.placeholder = "Search destinations";
  searchPlace.append(placeLabel, placeInput);

  wrapper.append(
    searchPlace,
    button({
      className: "btn-search",
      child: svgIcon({ path: "./icons/icon-search.svg#search" }),
    })
  );

  const filterData = (searchValue) => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const gridContainer = document.querySelector(".grid-container");

    if (filtered.length) {
      gridContainer
        ? gridContainer.replaceWith(cardsSection({ data: filtered }))
        : document
            .querySelector(".not-found")
            .replaceWith(cardsSection({ data: filtered }));
    } else {
      gridContainer?.replaceWith(notFound());
    }
  };

  placeInput.addEventListener("keyup", (e) => filterData(e.target.value));

  return wrapper;
};
