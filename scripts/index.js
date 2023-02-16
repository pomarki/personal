import { StartCard } from "./StartCard.js";
import { Header } from "../components/Header.js";
import {
  startArr,
  startContainer,
  headerContainer,
  headerOptions,
} from "./data.js";
import { resetCards } from "./utilities.js";

import { renderStartPage } from "../renders/renders.js";

import {
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
} from "./constants.js";








const toggleBookmark = (isOpen, location) => {
  if (location === "about") {
    isOpen
      ? (bookmarkAboutLabel.classList.add(`bookmark__label_type_close`),
        bookmarkAboutLinks.classList.add("bookmark__links_type_open"),
        bookmarkAboutBack.classList.add("bookmark__back_type_close"))
      : (bookmarkAboutLabel.classList.remove("bookmark__label_type_close"),
        bookmarkAboutLinks.classList.remove("bookmark__links_type_open"),
        bookmarkAboutBack.classList.remove("bookmark__back_type_close"));
  }

  if (location === "links") {
    isOpen
      ? (bookmarkLinksLabel.classList.add(`bookmark__label_type_close`),
        bookmarkLinksLinks.classList.add("bookmark__links_type_open"),
        bookmarkLinksBack.classList.add("bookmark__back_type_close"))
      : (bookmarkLinksLabel.classList.remove("bookmark__label_type_close"),
        bookmarkLinksLinks.classList.remove("bookmark__links_type_open"),
        bookmarkLinksBack.classList.remove("bookmark__back_type_close"));
  }
};

renderStartPage();

bookmarkAboutLabel.addEventListener("click", () => {
  toggleBookmark(true, "about");
});

bookmarkAboutClose.addEventListener("click", () => {
  toggleBookmark(false, "about");
});

bookmarkLinksLabel.addEventListener("click", () => {
  toggleBookmark(true, "links");
});

bookmarkLinksClose.addEventListener("click", () => {
  toggleBookmark(false, "links");
});
