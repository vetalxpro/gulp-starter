import { CommonPage } from './common.page';

export class AllContactsPage extends CommonPage {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log('all contacts page');
    return this;
  }
}
