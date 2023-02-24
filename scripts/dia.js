import { Diagram } from "../components/Diagram.js";
import { WorkCard } from "../components/WorkCard.js";
import { worksCards } from "./data.js";



let worksList = document.querySelector(".works__list");


worksCards.forEach((item) => {
  let cardEl = new WorkCard(item);
  let cardItem = cardEl.generateCard();
  worksList.append(cardItem);
})


