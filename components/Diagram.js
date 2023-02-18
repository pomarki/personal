const diagramDate = {
  circleType: false,
  value: {
    dasharray: 43,
    dashoffset: -52,
  },
};

class Diagram {
  constructor(options) {
    this._circleType = options.circleType;
    this._value = options.value;
  }

  generateDiagram() {
    let ns = "http://www.w3.org/2000/svg";

    this._diagrame = document.createElementNS(ns, "circle");
    this._diagrame.setAttributeNS(null, "r", "15.9");
    this._diagrame.setAttributeNS(null, "cx", "50%");
    this._diagrame.setAttributeNS(null, "cy", "50%");
    this._diagrame.setAttributeNS(null, "stroke-width", "15");
    this._diagrame.setAttributeNS(null, "fill", "none");
    this._diagrame.setAttributeNS(null, 
      "stroke-dasharray",
      `${this._value.dasharray} 100`
    );
    this._diagrame.setAttributeNS(null, "stroke-dashoffset", this._value.dashoffset);
    this._diagrame.classList.add("diagram__unit");

    return this._diagrame;
  }
}

export { Diagram };
