import { card } from "./components/card/card.js";

const container = document.querySelector(".container");
const dataUrl = "data.json";

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = async () => {
  try {
    const data = await getData(dataUrl);
    data.map((item) => {
      container.append(card({ ...item }));
    });
  } catch (error) {
    console.log(error);
  }
};

displayData();
