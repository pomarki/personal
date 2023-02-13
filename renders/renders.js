import {
  startArr,
  startContainer,
  headerContainer,
  headerOptions,
} from "../scripts/data.js";
import { headerSection } from "../scripts/constants.js";
import { resetCards } from "../scripts/utilities.js";
import { StartCard } from "../scripts/StartCard.js";
import { Header } from "../components/Header.js";

const renderStartPage = () => {
  startContainer.classList.remove("start__container_type_invisible");
  headerSection.classList.remove("header_visible");
  headerContainer.innerHTML = "";
  startArr.forEach((item) => {
    const card = new StartCard(item);
    const cardElement = card.generateCard();
    startContainer.append(cardElement);
  });

  setTimeout(resetCards, 1000);
};

function renderHeader(id) {
  startContainer.innerHTML = "";
  startContainer.classList.add("start__container_type_invisible");
  const header = new Header(headerOptions[id]);
  const headerEl = header.generateHeader();
  headerContainer.className = "header header_type_close header_visible";
  headerContainer.classList.add(`header_${headerOptions[id].headerType}`);

  headerContainer.append(headerEl);
}

export { renderStartPage, renderHeader };
