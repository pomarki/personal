import { Diagram } from "../components/Diagram.js";
import { WorkCard } from "../components/WorkCard.js";

const worksCards = [
  {
    title: "how to learn",
    mainlink: "https://pomarki.github.io/how-to-learn/",
    repolinks: [
      "https://github.com/pomarki/how-to-learn",
      
    ],
    info: "проектная работа Яндекс.Практикума №2 закрепление навыков вёрстки",
    stack: ["HTML5", "CSS3", "grid", "flex", "GIT", "Figma", "semantic"],
    languages: { html: 10, css: 58, js: 15, a: 5, b: 10, c: 2 },
  },
];

let worksList = document.querySelector(".works__list");

/* let container = document.querySelector(".diagram__canvas");


let diagramEl = new Diagram({ circleType: true, languages: worksCards[0].languages });

let diagramItem = diagramEl.generateDiagram()

container.append(diagramItem); */

let cardEl = new WorkCard(worksCards[0]);
let cardItem = cardEl.generateCard();
worksList.append(cardItem);
