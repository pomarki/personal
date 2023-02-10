import { StartCard } from "./StartCard.js";
import { startArr, startContainer } from "./data.js";
import { resetCards } from "./utilities.js";

startArr.forEach((item) => {
  const card = new StartCard(item);
  const cardElement = card.generateCard();
  startContainer.append(cardElement);
});

setTimeout(resetCards, 1000);
