const headerStateBtn = document.querySelector(".header__button-state");
const headerThemeBtn = document.querySelector(".header__button_theme");
const bodyBlock = document.querySelector(".body");

const aboutSection = document.querySelector(".about");
const linksSection = document.querySelector(".links");
const worksSection = document.querySelector(".works");
const resumeSection = document.querySelector(".resume");
const sectionsArr = [
  { about: aboutSection },
  { links: linksSection },
  { works: worksSection },
  { resume: resumeSection },
];

const startSection = document.querySelector(".start");
const headerSection = document.querySelector(".header");
const headerLinks = document.querySelectorAll(".header__link");
const headerBtns = document.querySelectorAll(".header__button");
const heaferLinksSlot = document.querySelector(".header__links-slot");
const headerLinksArr = Array.from(headerLinks);
const headerBtnsArr = Array.from(headerBtns);

const bookmarkAboutLabel = document.getElementById("bookmark-about-label");
const bookmarkAboutLinks = document.getElementById("bookmark-about-links");
const bookmarkAboutClose = document.getElementById("bookmark-about-close");
const bookmarkAboutBack = document.getElementById("bookmark-about-back");

const bookmarkLinksLinks = document.getElementById("bookmark-links-links");
const bookmarkLinksClose = document.getElementById("bookmark-links-close");
const bookmarkLinksLabel = document.getElementById("bookmark-links-label");
const bookmarkLinksBack = document.getElementById("bookmark-links-back");
const startContainer = document.querySelector(".start__container ");

const worksList = document.querySelector(".works__list");

export {
  aboutSection,
  bodyBlock,
  bookmarkAboutLabel,
  bookmarkAboutLinks,
  bookmarkAboutClose,
  bookmarkAboutBack,
  bookmarkLinksLinks,
  bookmarkLinksClose,
  bookmarkLinksLabel,
  bookmarkLinksBack,
  headerBtns,
  headerLinks,
  headerSection,
  headerBtnsArr,
  headerLinksArr,
  headerStateBtn,
  headerThemeBtn,
  heaferLinksSlot,
  startContainer,
  sectionsArr,
  startSection,
  worksList,
};
