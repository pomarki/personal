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
  {
    title: "ВЗДРЫЖНИ!!!",
    mainlink: "https://pomarki.github.io/how-to-learn/",
    repolinks: [
      "https://github.com/pomarki/how-to-learn",
      
    ],
    info: "проектная работа Яндекс.Практикума №2 закрепление навыков вёрстки",
    stack: ["HTML5", "CSS3", "grid", "flex", "GIT", "Figma", "semantic"],
    languages: { html: 10, css: 20, js: 30, re: 40 },
  },
];

let worksList = document.querySelector(".works__list");


worksCards.forEach((item) => {
  let cardEl = new WorkCard(item);
  let cardItem = cardEl.generateCard();
  worksList.append(cardItem);
})


