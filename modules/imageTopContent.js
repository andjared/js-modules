import { button } from "./button.js";
import { svgIcon } from "./svgIcon.js";

export const imageTopContent = (isSuperhost) => {
  const imageTopContent = document.createElement("div");
  imageTopContent.className = "top-content";
  const superhost = document.createElement("div");

  if (isSuperhost) {
    superhost.className = "superhost";
    superhost.innerText = "Superhost";
  }

  imageTopContent.append(
    button("btn-save", svgIcon("../../icons/icon-save.svg#save")),
    superhost
  );

  return imageTopContent;
};
