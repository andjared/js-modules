import { card } from "./modules/card.js";
const dataUrl = "data.json";

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = async () => {
  try {
    const data = await getData(dataUrl);
    data.map((item) => card(item));
  } catch (error) {
    console.log(error);
  }
};

displayData();