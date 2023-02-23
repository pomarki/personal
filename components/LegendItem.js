class LegendItem {
  constructor(options) {
    this._key = options[0];
    this._value = options[1];
  }

  _getTemplate(type) {
    const legengItemElement = document
      .getElementById(`diagrame-legend-item-${type}`)
      .content.cloneNode(true);
    return legengItemElement;
  }

  generateLegendItem(type) {
    this._legendItem = this._getTemplate(type);
    this._legendItem.querySelector(`.diagram__legend-marker-${type}`).textContent =
      this._key + ":\u00A0" + this._value + "%";
    
    return this._legendItem;
  }
}

export { LegendItem };
