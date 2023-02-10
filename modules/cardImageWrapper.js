import { cardImage } from "./cardImage.js";
import { imageTopContent } from "./imageTopContent.js";

export const cardImageWrapper = (img_url, flag) => {
  const imageWrapper = document.createElement("div");
  imageWrapper.classList = "card-img stacked";

  imageWrapper.append(cardImage(img_url), imageTopContent(flag));
  return imageWrapper;
};
