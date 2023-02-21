class LegendItem {
  constructor(options) {
    this._key = options[0];
    this._value = options[1];
  }

  _getTemplate() {
    const legengItemElement = document
      .getElementById("diagrame-legend-item")
      .content.cloneNode(true);
    return legengItemElement;
  }

  generateLegendItem() {
    this._legendItem = this._getTemplate();
    this._legendItem.querySelector(".diagram__legend-marker").textContent =
      this._key + "\u00A0" + this._value + "%";
    console.log(this._legendItem);
    return this._legendItem;
  }
}

export { LegendItem };
