const mainContainer = document.querySelector(".start__container");
const aboutBtn = document.querySelector(".start__link_about");
const worksBtn = document.querySelector(".start__link_works");
const resumeBtn = document.querySelector(".start__link_resume");
const linksBtn = document.querySelector(".start__link_links");
const headerStateBtn = document.querySelector(".header__button-state");
const headerThemeBtn = document.querySelector(".header__button_theme");
const bodyBlock = document.querySelector(".body");

const headerSection = document.querySelector(".header");
const headerLinks = document.querySelectorAll(".header__link");
const headerBtns = document.querySelectorAll(".header__button");
const heaferLinksSlot = document.querySelector(".header__links-slot");
const headerLinksArr = Array.from(headerLinks);
const headerBtnsArr = Array.from(headerBtns);

const bookmarkAboutLabel = document.getElementById("bookmark-about-label");
const bookmarkAboutLinks = document.getElementById("bookmark-about-links");
const bookmarkAboutClose = document.getElementById("bookmark-about-close");

const toggleBookmark = () => {
  bookmarkAboutLabel.classList.add("bookmark__label_type_close");
  bookmarkAboutLinks.classList.add("bookmark__links_type_open");
};

const toggleHeader = () => {
  headerStateBtn.classList.toggle("header__button-state_type_close");
  headerSection.classList.toggle("header_type_close");
  heaferLinksSlot.classList.toggle("header_invisible-element");
  const blockToggle = (arr, ignore) => {
    arr.forEach((item, index) => {
      if (index === ignore) {
        return;
      } else {
        item.classList.toggle("header_invisible-element");
      }
    });
  };
  blockToggle(headerLinksArr);
  blockToggle(headerBtnsArr, 0);
};

const toggleTheme = () => {
  bodyBlock.classList.toggle("body_theme_dark");
  headerThemeBtn.classList.toggle("header__button_theme-dark");
};

headerStateBtn.addEventListener("click", toggleHeader);

aboutBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_red");
});

worksBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_green");
});

resumeBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_orange");
});

linksBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_blue");
});

aboutBtn.addEventListener("click", () => {
  mainContainer.classList.add("start__container_invisible");
});

bookmarkAboutLabel.addEventListener("click", toggleBookmark);

headerThemeBtn.addEventListener("click", toggleTheme);

bookmarkAboutClose.addEventListener("click", () => {});