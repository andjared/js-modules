export const cardImage = (img_url) => {
  const cardImage = document.createElement("img");
  cardImage.src = img_url;

  return cardImage;
};
