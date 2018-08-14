import { sideMenuService } from '../services/side-menu.service';

export class SideMenu {
  constructor() {
    this.sideMenuSelector = '[data-side-menu]';
    this.sideMenuCloseBtnSelector = '[data-side-menu-close]';
    this.sideMenuService = sideMenuService;
  }

  init() {
    this._findElements();
    this._initEvents();
    return this;
  }

  _findElements() {
    this.sideMenu = document.querySelector(this.sideMenuSelector);
    this.sideMenuCloseBtn = this.sideMenu.querySelector(this.sideMenuCloseBtnSelector);
  }

  _initEvents() {
    this._initBackdropClick();
  }

  _initBackdropClick() {
    const onSideMenuCloseClick = () => {
      this.sideMenuService.closeMenu();
    };
    this.sideMenuCloseBtn.addEventListener('click', onSideMenuCloseClick);
  }
}
