import { StartCard } from "./StartCard.js";
import { morfingConst, initialConst } from "./data.js";

const startArr = [
  {
    template: "start-card",
    title: "обо\u00A0мне",
    class: "start__link_about",
    extraClass: "",
    id: 0,
    method: changeCard,
    close: resetCards,
  },
  {
    template: "start-card",
    title: "резюме",
    class: "start__link_resume",
    extraClass: "",
    id: 1,
    method: changeCard,
    close: resetCards,
  },
  {
    template: "start-card",
    title: "работы",
    class: "start__link_works",
    extraClass: "",
    id: 2,
    method: changeCard,
    close: resetCards,
  },
  {
    template: "start-card",
    title: "связь",
    class: "start__link_links",
    extraClass: "",
    id: 3,
    method: changeCard,
    close: resetCards,
  },
];

const startContainer = document.querySelector(".start__container");

startArr.forEach((item) => {
  const card = new StartCard(item);
  const cardElement = card.generateCard();
  startContainer.append(cardElement);
});

function resetCards() {
  getStartCardsArr(startArr).forEach((item, index) => {
    morfingCard(item, initialConst, index, ".start__text");
  });
}

function changeCard(id) {
  let optionArr = getMorfingArr(id);

  getStartCardsArr(startArr).forEach((item, index) => {
    morfingCard(item, optionArr, index, ".start__text");
  });
}

function getMorfingArr(id) {
  return morfingConst[id];
}

function morfingCard(item, arr, index, titleClass) {
  item.style.width = arr[index].width;
  item.style.top = arr[index].top;
  item.style.left = arr[index].left;
  item.querySelector(titleClass).style.rotate = arr[index].rotate;
}

function getStartCardsArr(arr) {
  return arr.map((item) => {
    return startContainer.querySelector(`.${item.class}`);
  });
}

setTimeout(resetCards, 1000);
