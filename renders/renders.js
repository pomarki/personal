import { startArr, startContainer, headerContainer } from "../scripts/data.js";
import { resetCards } from "../scripts/utilities.js";
import { StartCard } from "../scripts/StartCard.js";

const renderStartPage = () => {
  
  startArr.forEach((item) => {
    headerContainer.innerHTML = ""
    const card = new StartCard(item);
    const cardElement = card.generateCard();
    startContainer.append(cardElement);
  });

  setTimeout(resetCards, 1000);
};

export { renderStartPage };
