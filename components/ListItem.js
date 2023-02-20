class ListItem {
  constructor(text) {
    this._text = text;
  }

  _getTemplate() {
    const listElement = document
      .getElementById("stack-list")
      .content.cloneNode(true);
    return listElement;
  }

  generateListItem() {
    this._listItem = this._getTemplate();
    this._listItem.querySelector(".stack__list-item").textContent = this._text;
    return this._listItem;
  }
}

export { ListItem };
