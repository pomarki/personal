const diagramOptions = {
  circleType: true,
  languages: { html: 50, css: 48, js: 2 },
};

import { ns, circlesParams } from "../scripts/data.js";

class Diagram {
  constructor(options) {
    this._circleType = options.circleType;
    this._languages = options.languages;
  }

  _generateCircle(values) {
    let color = circlesParams.stroke[values.color];

    this._circle = document.createElementNS(ns, "circle");
    this._circle.setAttributeNS(null, "r", "15.9");
    this._circle.setAttributeNS(null, "cx", "50%");
    this._circle.setAttributeNS(null, "cy", "50%");
    this._circle.setAttributeNS(null, "stroke-width", "15");
    this._circle.setAttributeNS(null, "fill", "none");
    this._circle.setAttributeNS(null, "stroke", `var(--${color || "gray"})`);
    this._circle.setAttributeNS(
      null,
      "stroke-dasharray",
      `${values.dasharray} 100`
    );
    this._circle.setAttributeNS(null, "stroke-dashoffset", values.dashoffset);
    this._circle.classList.add("diagram__unit-circle");

    return this._circle;
  }

  _generateRectangle(values) {
    let color = circlesParams.stroke[values.color];
    this._rect = document.createElementNS(ns, "rect");
    this._rect.setAttributeNS(null, "x", values.x);
    this._rect.setAttributeNS(null, "y", "0");
    this._rect.setAttributeNS(null, "height", "10");
    this._rect.setAttributeNS(null, "width", values.width);
    this._rect.setAttributeNS(null, "stroke-width", "0");
    this._rect.setAttributeNS(null, "fill", `var(--${color || "gray"})`);
    this._rect.classList.add("diagram__unit-rect");
    
    return this._rect;
  }

  generateDiagram() {
    let startOffset = 0;
    const langArr = Object.keys(this._languages);

    this._svgSprite = document.createElementNS(ns, "svg");
    this._svgSprite.setAttribute("width", "190");
    this._svgSprite.setAttribute("height", "190");
    this._svgSprite.setAttributeNS(null, "viewBox", "0 0 50 50");
    this._svgSprite.classList.add("diagram__chart");

    for (const key in this._languages) {
      let color = langArr.indexOf(key);

      let dasharray = this._languages[key];
      let values = {
        dasharray: dasharray,
        dashoffset: startOffset,
        color: color,
      };
      let diagramUnit = this._generateCircle(values);
      this._svgSprite.append(diagramUnit);
      startOffset = startOffset - dasharray;
    }

    return this._svgSprite;
  }

  generateDiagramSmall() {
    let startOffset = 0;
    const langArr = Object.keys(this._languages);

    this._svgSprite = document.createElementNS(ns, "svg");
    this._svgSprite.setAttribute("width", "190");
    this._svgSprite.setAttribute("height", "10");
    this._svgSprite.classList.add("diagram__chart_s");

    for (const key in this._languages) {
      let color = langArr.indexOf(key);
      let width = this._languages[key] * 1.9;

      let values = {
        width: width,
        x: startOffset,
        color: color,
      };
      let diagramUnit = this._generateRectangle(values);
      this._svgSprite.append(diagramUnit);
      startOffset = startOffset + width;
    }

    return this._svgSprite;
  }
}

export { Diagram };
