import { search } from "../search/search.js";
import styles from "./header.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const header = () => {
  const headerWrapper = document.createElement("header");
  headerWrapper.className = "header";
  headerWrapper.append(search());

  return headerWrapper;
};
