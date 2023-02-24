import {
  startArr,
  startContainer,
  headerContainer,
  headerOptions,
  worksCards,
} from "../scripts/data.js";
import { headerSection, sectionsArr, startSection } from "../scripts/constants.js";
import { resetCards } from "../scripts/utilities.js";
import { StartCard } from "../components/StartCard.js";
import { Header } from "../components/Header.js";
import { WorkCard } from "../components/WorkCard.js";

const renderStartPage = () => {
  startContainer.classList.remove("start__container_type_invisible");
  headerSection.classList.remove("header_visible");
  startSection.classList.add("start_type_visible")
  headerContainer.innerHTML = "";
  sectionsArr.forEach((item) => {
    let section = Object.keys(item)[0];
    document
      .querySelector(`.${section}`)
      .classList.remove(`${section}_type_visible`);
  });

  startArr.forEach((item) => {
    const card = new StartCard(item);
    const cardElement = card.generateCard();
    startContainer.append(cardElement);
  });

  setTimeout(resetCards, 800);
};

function renderHeader(id) {
  startContainer.innerHTML = "";
  startContainer.classList.add("start__container_type_invisible");
  const header = new Header(headerOptions[id]);
  const headerEl = header.generateHeader();
  headerContainer.className = "header header_type_close header_visible";
  headerContainer.classList.add(`header_${headerOptions[id].headerType}`);
  let actualSection = `${headerOptions[id].headerType}`;
  startSection.classList.remove("start_type_visible")
  document
    .querySelector(`.${actualSection}`)
    .classList.add(`${actualSection}_type_visible`);

  headerContainer.append(headerEl);
}

function renderWorksSection(cards, conteiner) {
  cards.forEach((item) => {
    let cardEl = new WorkCard(item);
    let cardItem = cardEl.generateCard();
    conteiner.append(cardItem);
  })
}

export { renderStartPage, renderHeader, renderWorksSection };
