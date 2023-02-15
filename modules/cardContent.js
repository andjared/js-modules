import { cardPrice } from "./cardPrice.js";
import { cardReview, cardTitle } from "./contentTitleSection.js";
import { cardDescription, cardBeds, cardDate } from "./contentExtraInfo.js";
import styles from "../styles/cardContent.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const cardContent = ({
  title,
  description,
  review,
  beds,
  dates,
  priceNight,
  priceTotal,
}) => {
  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  cardContent.append(
    cardTitle({ title: title }),
    cardReview({ review: review }),
    cardDescription({ description: description }),
    cardBeds({ beds: beds }),
    cardDate({ dates: dates }),
    cardPrice({ priceNight: priceNight, priceTotal: priceTotal })
  );

  return cardContent;
};
