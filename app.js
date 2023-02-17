import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { search } from "./components/search/search.js";
const dataUrl = "data.json";

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = async () => {
  try {
    const data = await getData(dataUrl);
    document.body.append(search({ data }), cardsSection({ data }));
  } catch (error) {
    console.log(error);
  }
};

displayData();
