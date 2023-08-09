import { cardsSection } from "./components/cardsSection/cardsSection.js";
import { header } from "./components/header/header.js";
import { PropertyController } from "./propertyController.js";
import { Renderer } from "./renderer.js";

const App = async () => {
  try {
    const propertyCtx = new PropertyController();
    const rerender = new Renderer();

    const data = await propertyCtx.fetchData();

    const handleSearchEvent = (query) => {
      const data = propertyCtx.filterData(query);
      rerender.setState(data);
    };

    document.body.append(header({ handleSearchEvent }), cardsSection({ data }));
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", App);
