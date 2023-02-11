const headerOptions = {
  headerType: "about",
  mainTitle: "главная",
  mainTitleEn: "main",
  currentTitleRu: "обо\u00A0мне",
  linksRu: ["резюме", "работы", "связь"],
  linksEn: ["resume", "works", "links"],
  stateOpen: false,
  headerClass: "header",
  languageBtn: "EN",
};

import { HeaderLink } from "./HeaderLink.js";

class Header {
  constructor(options) {
    this._headerType = options.headerType;
    this._mainTitleRu = options.mainTitleRu;
    this._mainTitleEn = options.mainTitleEn;
    this._currentTitleRu = options.currentTitleRu;
    this._currentTitleEn = options.currentTitleEn;
    this._linksArrRu = options.linksRu;
    this._linksArrEn = options.linksEn;
    this._stateOpen = options.stateOpen;
    this._headerClass = options.headerClass;
    this._languageBtn = options.languageBtn;
  }

  _getTemplate() {
    const headerElement = document
      .getElementById(this._headerClass)
      .content.cloneNode(true);
    return headerElement;
  }

  generateHeader() {
    this._header = this._getTemplate();
    this._header.querySelector(".header__title-text").textContent =
      this._mainTitleRu;
    this._header.querySelector(".header__current-title").textContent =
      this._currentTitleRu;
    this._linksArrRu.forEach((item, index) => {
      let conteiner = this._header.querySelector(".header__links-slot");
      const link = new HeaderLink({linkName: item, tabindex: index});
      const linkElement = link.generateLink();
      conteiner.append(linkElement);
    });
    return this._header;
  }

  /* _setEventListeners() {
    this._startCard
      .querySelector(".start__link")
      .addEventListener("mouseenter", () => {
        this._method(this._id);
      });

    this._startCard
      .querySelector(".start__link")
      .addEventListener("mouseleave", () => {
        this._close();
      });
  } */
}

export { Header };
