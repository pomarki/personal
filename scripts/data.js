const cV = {
  z: "0px",
  s: "65px",
  m: "132px",
  e: "197px",
  l: "329px",
  xl: "394px",
  ed: "0deg",
  rd: "-90deg",
};

const initialConst = [
  { width: cV.e, top: cV.z, left: cV.z, rotate: cV.ed },
  { width: cV.e, top: cV.z, left: cV.e, rotate: cV.ed },
  { width: cV.e, top: cV.e, left: cV.z, rotate: cV.ed },
  { width: cV.e, top: cV.e, left: cV.e, rotate: cV.ed },
];

const morfingConst = [
  [
    { id: 0, width: cV.xl, top: cV.z, left: cV.z, rotate: cV.ed },
    { id: 1, width: cV.e, top: cV.e, left: cV.e, rotate: cV.ed },
    { id: 2, width: cV.s, top: cV.e, left: cV.z, rotate: cV.rd },
    { id: 3, width: cV.m, top: cV.e, left: cV.s, rotate: cV.rd },
  ],
  [
    { id: 0, width: cV.e, top: cV.e, left: cV.z, rotate: cV.ed },
    { id: 1, width: cV.xl, top: cV.z, left: cV.z, rotate: cV.ed },
    { id: 2, width: cV.m, top: cV.e, left: cV.e, rotate: cV.rd },
    { id: 3, width: cV.s, top: cV.e, left: cV.l, rotate: cV.rd },
  ],
  [
    { id: 0, width: cV.s, top: cV.z, left: cV.z, rotate: cV.rd },
    { id: 1, width: cV.m, top: cV.z, left: cV.s, rotate: cV.rd },
    { id: 2, width: cV.xl, top: cV.e, left: cV.z, rotate: cV.ed },
    { id: 3, width: cV.e, top: cV.z, left: cV.e, rotate: cV.ed },
  ],
  [
    { id: 0, width: cV.m, top: cV.z, left: cV.e, rotate: cV.rd },
    { id: 1, width: cV.s, top: cV.z, left: cV.l, rotate: cV.rd },
    { id: 2, width: cV.e, top: cV.z, left: cV.z, rotate: cV.ed },
    { id: 3, width: cV.xl, top: cV.e, left: cV.z, rotate: cV.ed },
  ],
];

const startArr = [
  {
    template: "start-card",
    title: "обо\u00A0мне",
    class: "start__link_about",
    id: 0,
    method: changeCard,
    close: resetCards,
  },
  {
    template: "start-card",
    title: "резюме",
    class: "start__link_resume",
    id: 1,
    method: changeCard,
    close: resetCards,
  },
  {
    template: "start-card",
    title: "работы",
    class: "start__link_works",
    id: 2,
    method: changeCard,
    close: resetCards,
  },
  {
    template: "start-card",
    title: "связь",
    class: "start__link_links",
    id: 3,
    method: changeCard,
    close: resetCards,
  },
];

const startContainer = document.querySelector(".start__container");

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

export { morfingConst, initialConst, startArr, resetCards, startContainer };
