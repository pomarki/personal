const aboutButton = document.querySelector(".start__link_about");
const resumeButton = document.querySelector(".start__link_resume");
const worksButton = document.querySelector(".start__link_works");
const linksButton = document.querySelector(".start__link_links");

const aboutText = aboutButton.querySelector(".start__text");
const resumeText = resumeButton.querySelector(".start__text");
const worksText = worksButton.querySelector(".start__text");
const linksText = linksButton.querySelector(".start__text");

const cardLinkArr = Array.from(document.querySelectorAll(".start__link"));

const startArr = [
  { template: "start-card", title: "обо&nbsp;мне", class: "start__link_about" },
  { template: "start-card", title: "резюме", class: "start__link_resume" },
  { template: "start-card", title: "работы", class: "start__link_works" },
  { template: "start-card", title: "связь", class: "start__link_links" },
];

// ширина карточек

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

const reset = () => {
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

};

setTimeout(reset, 1000) 


const aboutTransform = () => {
  aboutButton.style.width = sizeXL + "px";
  resumeButton.style.top = coordL + "px";
  resumeButton.style.left = sizeS + sizeL + "px";
  worksButton.style.width = sizeS + "px";
  worksButton.style.top = size + "px";
  worksText.style.transform = "rotate(-90deg)";
  linksButton.style.left = coordS + "px";
  linksButton.style.top = coordL + "px";
  linksButton.style.width = sizeL + "px";
  linksText.style.transform = "rotate(-90deg)";
};

const resumeTransform = () => {
  aboutButton.style.width = "65px";
  aboutButton.style.top = "197px";
  aboutText.style.transform = "rotate(-90deg)";
  resumeButton.style.left = "0";
  resumeButton.style.width = "394px";
  worksButton.style.width = "132px";
  worksButton.style.left = "65px";
  worksText.style.transform = "rotate(-90deg)";
};

const worksTransform = () => {
  worksButton.style.width = "394px";
  aboutButton.style.width = "65px";
  aboutText.style.transform = "rotate(-90deg)";
  resumeButton.style.left = "65px";
  resumeButton.style.width = "132px";
  resumeText.style.transform = "rotate(-90deg)";
  linksButton.style.top = "0";
};

const linksTransform = () => {
  linksButton.style.width = "394px";
  linksButton.style.left = "0";
  worksButton.style.top = "0";
  aboutButton.style.width = "132px";
  aboutButton.style.left = "197px";
  aboutText.style.transform = "rotate(-90deg)";
  resumeButton.style.left = "329px";
  resumeButton.style.width = "65px";
  resumeText.style.transform = "rotate(-90deg)";
};

aboutButton.addEventListener("mouseover", aboutTransform);

aboutButton.addEventListener("mouseleave", reset);

resumeButton.addEventListener("mouseover", resumeTransform);

resumeButton.addEventListener("mouseleave", reset);

worksButton.addEventListener("mouseover", worksTransform);

worksButton.addEventListener("mouseleave", reset);

linksButton.addEventListener("mouseover", linksTransform);

linksButton.addEventListener("mouseleave", reset);