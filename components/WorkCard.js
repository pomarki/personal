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
    const diagramContainerBig = this._card.querySelector(".diagram__canvas");
    const diagramContainerSmall = this._card.querySelector(
      ".diagram__canvas_type_s"
    );
    const legendContainerBig = this._card.querySelector(".diagram__legend-big");
    const legendContainerSmall = this._card.querySelector(
      ".diagram__legend-small"
    );

    // сборка главной ссылки
    mainLink.href = this._mainlink;
    mainLink.textContent = this._title;

    // сборка легенды диаграммы
    const legend = new Legend(this._languages);
    const legendElBig = legend.generateLegend("big");
    const legendElSmall = legend.generateLegend("small");

    legendContainerBig.append(legendElBig);

    legendContainerSmall.append(legendElSmall);

    // сборка диаграммы
    const diagramEl = new Diagram({
      circleType: true,
      languages: this._languages,
    });

    const diagramItem = diagramEl.generateDiagram();
    const diagramItemSmall = diagramEl.generateDiagramSmall();
    diagramContainerBig.append(diagramItem);
    diagramContainerSmall.append(diagramItemSmall);

    // сборка ссылок на репозитории
    this._repolinks.forEach((item) => {
      const linkItem = new RepoLink(item);
      const linkEl = linkItem.generateLink();
      repoList.append(linkEl);
    });

    // сборка стека
    this._stack.forEach((item) => {
      const stackItem = new ListItem(item);
      const stackEl = stackItem.generateListItem();
      stackList.append(stackEl);
    });

    // сборка информационного блока
    this._card.querySelector(".works__description").textContent = this._info;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    const captionsListBig = this._card.querySelectorAll(
      ".diagram__legend-marker-big"
    );
    const unitsListBig = this._card.querySelectorAll(".diagram__unit-circle");
    const captionsListSmall = this._card.querySelectorAll(
      ".diagram__legend-marker-small"
    );
    const unitsListSmall = this._card.querySelectorAll(".diagram__unit-rect");

    captionsListBig.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        unitsListBig[index].classList.add("diagram_hovered-big");
      });

      item.addEventListener("mouseout", () => {
        unitsListBig[index].classList.remove("diagram_hovered-big");
      });
    });

    captionsListSmall.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        unitsListSmall[index].classList.add("diagram_hovered-small");
      });

      item.addEventListener("mouseout", () => {
        unitsListSmall[index].classList.remove("diagram_hovered-small");
      });
    });

  }
}

export { WorkCard };
