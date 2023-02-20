import { Diagram } from "./Diagram.js";
import { RepoLink } from "./RepoLink.js";

class WorkCard {
  constructor(options) {
    this._title = options.title;
    this._mainlink = options.mainlink;
    this._repolinks = options.repolinks;
    this._info = options.info;
    this._stack = options.stack;
    this._languages = options.languages;
    /* this._circleType = options.circleType; */
  }

  _getTemplateCard() {
    const cardElement = document
      .getElementById("works-card")
      .content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplateCard();
    const mainLink = this._card.querySelector(".works__link");
    const repoList = this._card.querySelector(".works__repo-list");
    mainLink.href = this._mainlink;
    mainLink.textContent = this._title;
    this._repolinks.forEach((item) => {
      const linkItem = new RepoLink(item);
      const linkEl = linkItem.generateLink();
      repoList.append(linkEl);
    });
    this._card.querySelector(".works__description").textContent = this._info;

    return this._card;
  }
}

export { WorkCard };
