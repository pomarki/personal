import {
  startContainer,
  initialConst,
  morfingConst,
  startArr,
} from "./data.js";

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

function toggleHeader() {
  const headerStateBtn = document.querySelector(".header__button-state");
  const headerLinksSlot = document.querySelector(".header__links-slot");
  const headerButtonsSlot = document.querySelector(".header__buttons-slot");
  const headerSection = document.querySelector(".header");
  headerSection.classList.toggle("header_type_close")
  headerStateBtn.classList.toggle("header__button-state_type_close");
  headerLinksSlot.classList.toggle("header_invisible-element");
  headerButtonsSlot.classList.toggle("header_invisible-element");
}

function toggleTheme() {}



export { changeCard, resetCards, toggleHeader };
