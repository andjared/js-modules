import { cardContent } from "./cardContent.js";
import { cardImageWrapper } from "./cardImageWrapper.js";

export const card = (data) => {
  const card = document.createElement("div");
  card.className = "card";

  const cloneNode = (n, node, parent) => {
    for (let i = 0; i < n; i++) {
      const clonedNode = node.cloneNode(true);
      parent.append(clonedNode);
    }
  };

  const {
    title,
    description,
    review,
    beds,
    dates,
    priceNight,
    priceTotal,
    imgUrl,
    isSuperhost,
  } = data;
  //   append nested elements to card & pass needed properties
  card.append(
    cardImageWrapper(imgUrl, isSuperhost, cloneNode),
    cardContent(title, description, review, beds, dates, priceNight, priceTotal)
  );

  return card;
};
