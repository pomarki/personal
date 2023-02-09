import { StartCard } from "./StartCard.js";

const startArr = [
  {
    template: "start-card",
    title: "обо\u00A0мне",
    class: "start__link_about",
    extraClass: "",
    id: 1,
    method: changeCard,
  },
  {
    template: "start-card",
    title: "резюме",
    class: "start__link_resume",
    extraClass: "",
    id: 2,
    method: changeCard,
  },
  {
    template: "start-card",
    title: "работы",
    class: "start__link_works",
    extraClass: "",
    id: 3,
    method: changeCard,
  },
  {
    template: "start-card",
    title: "связь",
    class: "start__link_links",
    extraClass: "",
    id: 4,
    method: changeCard,
  },
];

const startContainer = document.querySelector(".start__container");

startArr.forEach((item) => {
  const card = new StartCard(item);
  const cardElement = card.generateCard();
  startContainer.append(cardElement);
});

function startInition() {
  const sizeS = 65;
  const sizeL = 132;
  const sizeXL = 394;
  const size = 197;

  // координаты
  const coordS = 65;
  const coordL = 197;
  const coordZero = 0;

  const startX = 0;
  const startY = 0;
  const startXN = 197;
  const startYN = 197;
  const aboutButton = startContainer.querySelector(".start__link_about");
  const resumeButton = startContainer.querySelector(".start__link_resume");
  const worksButton = startContainer.querySelector(".start__link_works");
  const linksButton = startContainer.querySelector(".start__link_links");

  const aboutText = aboutButton.querySelector(".start__text");
  const resumeText = resumeButton.querySelector(".start__text");
  const worksText = worksButton.querySelector(".start__text");
  const linksText = linksButton.querySelector(".start__text");

  aboutButton.style.width = size + "px";
  resumeButton.style.width = size + "px";
  worksButton.style.width = size + "px";
  linksButton.style.width = size + "px";

  aboutButton.style.top = startY + "px";
  resumeButton.style.top = startY + "px";
  worksButton.style.top = startYN + "px";
  linksButton.style.top = startYN + "px";

  aboutButton.style.left = startX + "px";
  resumeButton.style.left = startYN + "px";
  worksButton.style.left = startX + "px";
  linksButton.style.left = startYN + "px";

  aboutText.style.transform = "rotate(0deg)";
  resumeText.style.transform = "rotate(0deg)";
  worksText.style.transform = "rotate(0deg)";
  linksText.style.transform = "rotate(0deg)";
}

function changeCard(id) {
  startArr.forEach((item) => {
    if(item.id != id) {
      document.querySelector(`.${item.class}`).classList.add("start__new")
    } else {return}
  })
  

}

setTimeout(startInition, 1000);
