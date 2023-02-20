class RepoLink {
  constructor(link) {
    this._repoLink = link;
  }

  _getTemplate() {
    const linkElement = document
      .getElementById("works-repo")
      .content.cloneNode(true);
    return linkElement;
  }

  generateLink() {
    this._linkItem = this._getTemplate();
    const linkConteiner = this._linkItem.querySelector(".works__repo-link");
    linkConteiner.href = this._repoLink;
    linkConteiner.textContent = this._repoLink;

    return this._linkItem;
  }
}

export { RepoLink };
