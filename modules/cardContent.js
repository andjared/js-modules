import { button } from "./button.js";

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
  // card price with nested elements
  const cardPrice = document.createElement("div");
  cardPrice.className = "card-price";

  const nightPrice = document.createElement("span");
  nightPrice.className = "price-night";
  const nightPriceValue = document.createElement("span");
  nightPriceValue.className = "price-value";
  nightPriceValue.innerText = price_night;
  nightPrice.append(nightPriceValue, "night");

  const priceDivider = document.createElement("span");
  priceDivider.innerText = "·";

  const totalPrice = document.createElement("span");
  totalPrice.className = "price-total";
  const totalPriceValue = document.createElement("span");
  totalPriceValue.className = "price-value";
  totalPriceValue.innerText = price_total;
  totalPrice.append(totalPriceValue, "total");

  cardPrice.append(nightPrice, priceDivider, button("btn-price", totalPrice));

  cardContent.append(
    cardTitle,
    cardReview,
    cardDescription,
    cardBeds,
    cardDate,
    cardPrice
  );

  return cardContent;
};
