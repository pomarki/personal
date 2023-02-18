import { Diagram } from "../components/Diagram.js";

const options = [{ dasharray: 25 }, { dasharray: 25 }, { dasharray: 50 }];

let startOffset = 0;
let container = document.querySelector(".diagram__canvas");

let ns = "http://www.w3.org/2000/svg";

let svgSprite = document.createElementNS(ns, "svg");

svgSprite.setAttribute("width", "190");
svgSprite.setAttribute("height", "190");
svgSprite.setAttributeNS(null, "viewBox", "0 0 50 50");
svgSprite.classList.add("diagram__chart");

options.forEach((item) => {
  let diagram = new Diagram({
    circleType: false,
    value: { dasharray: item.dasharray, dashoffset: startOffset },
  });
  const diagramElement = diagram.generateDiagram();
  svgSprite.append(diagramElement);
  startOffset = startOffset - item.dasharray;
});



container.append(svgSprite);

function addDiagram() {

}