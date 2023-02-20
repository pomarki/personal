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
    languages: { html: 60, css: 30, js: 10 },
  },
];

let worksList = document.querySelector(".works__list");



let cardEl = new WorkCard(worksCards[0]);
let cardItem = cardEl.generateCard();
worksList.append(cardItem);
