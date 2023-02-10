import { cardPrice } from "./cardPrice.js";
export const cardContent = (
  title,
  description,
  review,
  beds,
  dates,
  price_night,
  price_total
) => {
  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.innerText = title;

  const cardReview = document.createElement("span");
  cardReview.className = "card-review";
  const cardReviewContent = document.createElement("span");
  cardReviewContent.innerText = review;
  const starIcon = document.createElement("i");
  starIcon.className = "fa fa-star";
  cardReview.append(starIcon, cardReviewContent);

  const cardDescription = document.createElement("p");
  cardDescription.className = "card-description";
  cardDescription.innerText = description;

  const cardBeds = document.createElement("p");
  cardBeds.className = "card-beds";
  cardBeds.innerText = beds;

  const cardDate = document.createElement("p");
  cardDate.className = "card-date";
  cardDate.innerText = dates;

  cardContent.append(
    cardTitle,
    cardReview,
    cardDescription,
    cardBeds,
    cardDate,
    cardPrice(price_night, price_total)
  );

  return cardContent;
};
