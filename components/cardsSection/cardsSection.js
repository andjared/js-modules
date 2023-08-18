import { card } from "../card/card.js";
import styles from "./cardsSection.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const cardsSection = () => {
  const gridContainer = document.createElement("section");
  gridContainer.className = "grid-container";

  return gridContainer;
};
