import { button } from "./button.js";
import { svgIcon } from "./svgIcon.js";

export const imageTopContent = (flag) => {
  const imageTopContent = document.createElement("div");
  imageTopContent.className = "top-content";
  const cardFlag = document.createElement("div");
  //check if flag is not empty string
  if (flag) {
    cardFlag.className = "flag";
    cardFlag.innerText = flag;
  }

  imageTopContent.append(
    button("btn-save", svgIcon("../../icons/icon-save.svg#save")),
    cardFlag
  );

  return imageTopContent;
};
