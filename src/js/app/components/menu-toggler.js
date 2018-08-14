import { sideMenuService } from '../services/side-menu.service';

export class MenuToggler {
  constructor() {
    this.btnSelector = '[data-menu-toggler]';
    this.sideMenuService = sideMenuService;
  }

  init() {
    this._findElements();
    this._initEvents();
  }

  _findElements() {
    this.menuBtn = document.querySelector(this.btnSelector);
  }

  _initEvents() {
    this._initBtnClick();
  }

  _initBtnClick() {
    if ( this.menuBtn ) {
      this.menuBtn.addEventListener('click', ( event ) => {
        event.preventDefault();
        this.sideMenuService.toggleMenu();
      });
    }
  }
}
