class StartCard {
  constructor(options) {
    this._cardContainer = options.template;
    this._title = options.title;
    this._class = options.class;
    this._method = options.method;
    this._close = options.close;
    this._id = options.id;
    this._click = options.click;
  }

  _getTemplate() {
    const cardElement = document
      .getElementById(this._cardContainer)
      .content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._startCard = this._getTemplate();
    this._startCard.querySelector(".start__text").textContent = this._title;
    this._startCard.querySelector(".start__link").classList.add(this._class);
    this._setEventListeners();
    return this._startCard;
  }

  _setEventListeners() {
    const card = this._startCard.querySelector(".start__link");
    card.addEventListener("mouseenter", () => {
      this._method(this._id);
    });

    card.addEventListener("mouseleave", () => {
      this._close();
    });

    card.addEventListener("click", () => {
      this._click(this._id);
    });
  }
}
export { StartCard };
