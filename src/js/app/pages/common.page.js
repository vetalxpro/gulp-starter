import { MenuToggler } from '../components/menu-toggler';
import { SideMenu } from '../components/side-menu';

export class CommonPage {
  constructor() {
  }

  init() {
    new MenuToggler().init();
    new SideMenu().init();
    return this;
  }
}
