class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    // remove the class from the popup element
    console.log("close method call");
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
export default Popup;
