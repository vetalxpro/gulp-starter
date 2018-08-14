class SideMenuService {
  constructor() {
    this.containerSelector = '[data-page-wrapper]';
    this.containerMenuOpenedClass = 'side-menu-opened';
    this._isMenuOpen = false;
    this._findElements();
  }

  openMenu() {
    this._isMenuOpen = true;
    this.container.classList.add(this.containerMenuOpenedClass);
  }

  closeMenu() {
    this._isMenuOpen = false;
    this.container.classList.remove(this.containerMenuOpenedClass);
  }

  toggleMenu() {
    if ( this._isMenuOpen ) {
      return this.closeMenu();
    }
    return this.openMenu();
  }

  _findElements() {
    this.container = document.querySelector(this.containerSelector);
  }
}


export const sideMenuService = new SideMenuService();
