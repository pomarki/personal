class HeaderLink {
  constructor(options) {
    this._linkName = options.linkName;
    this._tabindex = options.tabindex;
  }

  _getTemplate() {
    const linkElement = document
      .getElementById("header-link")
      .content.cloneNode(true);
    return linkElement;
  }

  generateLink() {
    this._headerLink = this._getTemplate();
    this._headerLink.querySelector(".header__link").textContent =
      this._linkName;
    this._headerLink.tabindex = this._tabindex;
    return this._headerLink;
  }
}

export { HeaderLink };

//tabindex не фурычит