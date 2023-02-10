import { cardContent } from "./cardContent.js";
import { cardImageWrapper } from "./cardImageWrapper.js";

export const card = (data) => {
  const card = document.createElement("div");
  card.className = "card";
  const {
    title,
    description,
    review,
    beds,
    dates,
    price_night,
    price_total,
    img_url,
    flag,
  } = data;
  //   append nested elements to card & pass needed properties
  card.append(
    cardImageWrapper(img_url, flag),
    cardContent(
      title,
      description,
      review,
      beds,
      dates,
      price_night,
      price_total
    )
  );

  return card;
};
