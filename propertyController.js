import { Renderer } from "./renderer.js";

class PropertyController {
  constructor(properties) {
    this.properties = properties;
    this.renderer = new Renderer();
  }

  async fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();
    this.setData(data);
    return this.properties;
  }

  setData(data) {
    this.properties = data;
  }

  filterData(query = "") {
    const data = this.properties.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    this.renderer.setState(data);
    // console.log(data);
    return data;
  }
}

export { PropertyController };
