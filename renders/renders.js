import { startArr, startContainer, headerContainer } from "../scripts/data.js";
import { headerSection } from "../scripts/constants.js";
import { resetCards } from "../scripts/utilities.js";
import { StartCard } from "../scripts/StartCard.js";

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

export { renderStartPage };
