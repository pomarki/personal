import { Diagram } from "./Diagram.js";
import { RepoLink } from "./RepoLink.js";
import { ListItem } from "./ListItem.js";
import { Legend } from "./Legend.js";

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
    const stackList = this._card.querySelector(".stack__list");
    const diagramContainer = this._card.querySelector(".diagram__canvas");
    const legend = new Legend(this._languages);
    const legendEl = legend.generateLegend();
    this._card.querySelector(".diagram__legend").append(legendEl);

    mainLink.href = this._mainlink;
    mainLink.textContent = this._title;

    const diagramEl = new Diagram({
      circleType: true,
      languages: this._languages,
    });

    const diagramItem = diagramEl.generateDiagram();
    diagramContainer.append(diagramItem);

    this._repolinks.forEach((item) => {
      const linkItem = new RepoLink(item);
      const linkEl = linkItem.generateLink();
      repoList.append(linkEl);
    });

    this._stack.forEach((item) => {
      const stackItem = new ListItem(item);
      const stackEl = stackItem.generateListItem();
      stackList.append(stackEl);
    });

    this._card.querySelector(".works__description").textContent = this._info;
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    let captionsList = this._card.querySelectorAll(".diagram__legend-marker");
    let unitsList = this._card.querySelectorAll(".diagram__unit");
    captionsList.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        unitsList[index].classList.add("diagram_hovered");
      });

      item.addEventListener("mouseout", () => {
        unitsList[index].classList.remove("diagram_hovered");
      });
    });
  }
}

export { WorkCard };
