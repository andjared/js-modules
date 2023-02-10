import { cardImage } from "./cardImage.js";
import { imageTopContent } from "./imageTopContent.js";

export const cardImageWrapper = (img_url, flag, cloneNode) => {
  const imageWrapper = document.createElement("div");
  imageWrapper.classList = "card-img stacked";

  const slideIndicators = document.createElement("div");
  slideIndicators.className = "slide-indicators";

  const indicator = document.createElement("span");
  indicator.className = "indicator";

  //append indicator node 5 times
  cloneNode(5, indicator, slideIndicators);

  imageWrapper.append(
    cardImage(img_url),
    imageTopContent(flag),
    slideIndicators
  );

  return imageWrapper;
};
