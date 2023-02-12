import {
  startContainer,
  headerContainer,
  initialConst,
  morfingConst,
  startArr,
  headerOptions,
} from "./data.js";

import { Header } from "../components/Header.js";

function changeCard(id) {
  let optionArr = getMorfingArr(id);

  getStartCardsArr(startArr).forEach((item, index) => {
    morfingCard(item, optionArr, index, ".start__text");
  });
}

function getMorfingArr(id) {
  return morfingConst[id];
}

function getStartCardsArr(arr) {
  return arr.map((item) => {
    return startContainer.querySelector(`.${item.class}`);
  });
}

function resetCards() {
  getStartCardsArr(startArr).forEach((item, index) => {
    morfingCard(item, initialConst, index, ".start__text");
  });
}

function morfingCard(item, arr, index, titleClass) {
  item.style.width = arr[index].width;
  item.style.top = arr[index].top;
  item.style.left = arr[index].left;
  item.querySelector(titleClass).style.rotate = arr[index].rotate;
}

function openHeader(id) {
  startContainer.innerHTML = "";
  startContainer.classList.add("start__container_type_invisible");
  const header = new Header(headerOptions[id]);
  const headerEl = header.generateHeader();
  headerContainer.className = "header header_type_close header_visible";
  headerContainer.classList.add(`header_${headerOptions[id].headerType}`);
  headerContainer.append(headerEl);
}

export { changeCard, resetCards, openHeader };
