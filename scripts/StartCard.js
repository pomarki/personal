class StartCard {
  constructor(options) {
    this._cardContainer = options.template;
    this._title = options.title;
    this._class = options.class;
    this._extraClass = options.extraClass;
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
    this._startCard.querySelector(".start__link").classList.add(`${this._class + this._extraClass}`);
    this._setEventListeners();
    return this._startCard;
  }

  /*   open() {
    this._popupContainer.classList.add("popup_opened");
    document.addEventListener("keydown", this.keydownFunction);
  }

  close() {
    this._popupContainer.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.keydownFunction);
  } */


  _setEventListeners() {
    /*     this._closeButton.addEventListener("click", () => this.close());
    this._popupContainer.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    }); */
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
