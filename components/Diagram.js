const diagramOptions = {
  circleType: true,
  languages: { html: 50, css: 48, js: 2 },
};

import { ns, circlesParams } from "../scripts/data.js";
/* class Diagram {
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
} */

class Diagram {
  constructor(options) {
    this._circleType = options.circleType;
    this._languages = options.languages;
  }
  _generateCircle(values) {
    this._circle = document.createElementNS(ns, "circle");
    this._circle.setAttributeNS(null, "r", "15.9");
    this._circle.setAttributeNS(null, "cx", "50%");
    this._circle.setAttributeNS(null, "cy", "50%");
    this._circle.setAttributeNS(null, "stroke-width", "15");
    this._circle.setAttributeNS(null, "fill", "none");
    this._circle.setAttributeNS(
      null,
      "stroke-dasharray",
      `${values.dasharray} 100`
    );
    this._circle.setAttributeNS(null, "stroke-dashoffset", values.dashoffset);
    this._circle.classList.add("diagram__unit");

    /* console.log(this._circle); */
    return this._circle;
  }

  generateDiagram() {
    let startOffset = 0;
    this._svgSprite = document.createElementNS(ns, "svg");
    this._svgSprite.setAttribute("width", "190");
    this._svgSprite.setAttribute("height", "190");
    this._svgSprite.setAttributeNS(null, "viewBox", "0 0 50 50");
    this._svgSprite.classList.add("diagram__chart");

    for (let key in this._languages) {
      let dasharray = this._languages[key];
      let values = {
        dasharray: dasharray,
        dashoffset: startOffset,
      };
      let diagramUnit = this._generateCircle(values);
      this._svgSprite.append(diagramUnit);
      startOffset = startOffset - dasharray;
    }
    
    return this._svgSprite;
  }
}

export { Diagram };
