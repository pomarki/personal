import { StartCard } from "./StartCard.js";
import { startArr, resetCards, startContainer } from "./data.js";

startArr.forEach((item) => {
  const card = new StartCard(item);
  const cardElement = card.generateCard();
  startContainer.append(cardElement);
});

setTimeout(resetCards, 1000);
