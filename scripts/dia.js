import { Diagram } from "../components/Diagram.js";

const options = [{ dasharray: 25 }, { dasharray: 25 }, { dasharray: 50 }];

const worksCards = [
  {
    title: "how to learn",
    mainlink: "https://pomarki.github.io/how-to-learn/",
    repolinks: ["https://github.com/pomarki/how-to-learn"],
    info: "проектная работа Яндекс.Практикума №2 закрепление навыков вёрстки",
    stack: ["HTML5", "CSS3", "grid", "flex", "GIT", "Figma", "semantic"],
    languages: { html: 60, css: 10, js: 30 },
  },
];

let container = document.querySelector(".diagram__canvas");

/* let startOffset = 0;


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
 */

let diagramEl = new Diagram({ circleType: true, languages: worksCards[0].languages });

let diagramItem = diagramEl.generateDiagram()

container.append(diagramItem);
