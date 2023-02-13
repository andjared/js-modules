import { cardContent } from "./cardContent.js";
import { cardImageWrapper } from "./cardImageWrapper.js";

export const card = ({ data }) => {
  const card = document.createElement("div");
  card.className = "card";

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
    cardImageWrapper({ imgUrl: imgUrl, isSuperhost: isSuperhost }),
    cardContent({
      title: title,
      description: description,
      review: review,
      beds: beds,
      dates: dates,
      priceNight: priceNight,
      priceTotal: priceTotal,
    })
  );

  return card;
};
