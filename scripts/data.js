import { changeCard, resetCards } from "./utilities.js";
import { renderHeader } from "../renders/renders.js";
import { renderStartPage } from "../renders/renders.js";
import { toggleHeader } from "./utilities.js";

const ns = "http://www.w3.org/2000/svg";

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

const circlesParams = {
  r: "15.9",
  cx: "50%",
  cy: "50%",
  "stroke-width": "15",
  fill: "none",
  stroke: ["red", "orange", "blue", "green", "violet"]
}

const startArr = [
  {
    template: "start-card",
    title: "обо\u00A0мне",
    class: "start__link_about",
    id: 0,
    method: changeCard,
    close: resetCards,
    click: renderHeader,
  },
  {
    template: "start-card",
    title: "резюме",
    class: "start__link_resume",
    id: 1,
    method: changeCard,
    close: resetCards,
    click: renderHeader,
  },
  {
    template: "start-card",
    title: "работы",
    class: "start__link_works",
    id: 2,
    method: changeCard,
    close: resetCards,
    click: renderHeader,
  },
  {
    template: "start-card",
    title: "связь",
    class: "start__link_links",
    id: 3,
    method: changeCard,
    close: resetCards,
    click: renderHeader,
  },
];

const startContainer = document.querySelector(".start__container");
const headerContainer = document.querySelector(".header");

const headerOptions = [
  {
    headerType: "about",
    mainTitleRu: "главная",
    mainTitleEn: "main",
    currentTitleRu: "обо\u00A0мне",
    linksRu: ["резюме", "работы", "связь"],
    linksEn: ["resume", "works", "links"],
    stateOpen: false,
    headerClass: "header",
    languageBtn: "EN",
    gotoMain: renderStartPage,
    toggle: toggleHeader,
  },
  {
    headerType: "resume",
    mainTitleRu: "главная",
    mainTitleEn: "main",
    currentTitleRu: "резюме",
    linksRu: ["работы", "связь", "обо\u00A0мне"],
    linksEn: ["works", "links", "about"],
    stateOpen: false,
    headerClass: "header",
    languageBtn: "EN",
    gotoMain: renderStartPage,
    toggle: toggleHeader,
  },
  {
    headerType: "works",
    mainTitleRu: "главная",
    mainTitleEn: "main",
    currentTitleRu: "работы",
    linksRu: ["связь", "обо\u00A0мне", "резюме"],
    linksEn: ["links", "about", "resume"],
    stateOpen: false,
    headerClass: "header",
    languageBtn: "EN",
    gotoMain: renderStartPage,
    toggle: toggleHeader,
  },
  {
    headerType: "links",
    mainTitleRu: "главная",
    mainTitleEn: "main",
    currentTitleRu: "связь",
    linksRu: ["обо\u00A0мне", "резюме", "работы"],
    linksEn: ["about", "resume", "works"],
    stateOpen: false,
    headerClass: "header",
    languageBtn: "EN",
    gotoMain: renderStartPage,
    toggle: toggleHeader,
  },
];

export {
  circlesParams,
  morfingConst,
  ns,
  initialConst,
  startArr,
  startContainer,
  headerContainer,
  headerOptions,
};
