import { LegendItem } from "./LegendItem.js";


class Legend {
  constructor(languages) {
    this._languages = languages;
  }

  _getTemplate(type) {
    const legendElement = document
      .getElementById(`diagrame-legend-${type}`)
      .content.cloneNode(true);
    return legendElement;
  }

  generateLegend(type) {
    this._legendContainer = this._getTemplate(type);
    const legendContainerBig = this._legendContainer.querySelector(`.diagram__list-${type}`);

    const legendEntres = Object.entries(this._languages);

    legendEntres.forEach((item) => {
      let legendEl = new LegendItem(item);
      let legendItem = legendEl.generateLegendItem(type);
      
      legendContainerBig.append(legendItem);
    });

    

    return this._legendContainer;
  }




}

export { Legend };
