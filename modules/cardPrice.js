import { button } from "./button.js";
export const cardPrice = (price_night, price_total) => {
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

  return cardPrice;
};
