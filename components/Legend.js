import { LegendItem } from "./LegendItem.js";

class Legend {
  constructor(languages) {
    this._languages = languages;
  }

  _getTemplate() {
    const legendElement = document
      .getElementById("diagrame-legend")
      .content.cloneNode(true);
    return legendElement;
  }

  generateLegend() {
    this._legendContainer = this._getTemplate();
    const legend = this._legendContainer.querySelector(".diagram__list");
    const legendEntres = Object.entries(this._languages);

    legendEntres.forEach((item) => {
      let legendEl = new LegendItem(item);
      let legendItem = legendEl.generateLegendItem();
      legendItem;
      legend.append(legendItem);
    });

    return this._legendContainer;
  }
}

export { Legend };
