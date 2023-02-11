class StartCard {
  constructor(options) {
    this._cardContainer = options.template;
    this._title = options.title;
    this._class = options.class;
    this._method = options.method;
    this._close = options.close;
    this._id = options.id;
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
    this._startCard
      .querySelector(".start__link")
      .addEventListener("mouseenter", () => {
        this._method(this._id);
      });

    this._startCard
      .querySelector(".start__link")
      .addEventListener("mouseleave", () => {
        this._close();
      });
  }
}
export { StartCard };
