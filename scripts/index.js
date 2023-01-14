const mainContainer = document.querySelector(".start__container");
const aboutBtn = document.querySelector(".start__link_about");
const worksBtn = document.querySelector(".start__link_works");
const resumeBtn = document.querySelector(".start__link_resume");
const linksBtn = document.querySelector(".start__link_links");

aboutBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_red");
});

worksBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_green");
});

resumeBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_orange");
});

linksBtn.addEventListener("mouseover", (e) => {
  mainContainer.classList = "start__container";
  mainContainer.classList.add("start__container_blue");
});

aboutBtn.addEventListener("click", () => {
  mainContainer.classList.add("start__container_invisible");
});
