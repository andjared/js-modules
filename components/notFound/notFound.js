import styles from "./notFound.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const notFound = () => {
  const notFound = document.createElement("div");
  notFound.className = "not-found";
  notFound.innerText = "No search results. Try something else.";

  return notFound;
};
