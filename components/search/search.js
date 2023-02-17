import { button } from "../button/button.js";
import { svgIcon } from "../svgIcon/svgIcon.js";
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

  return wrapper;
};
