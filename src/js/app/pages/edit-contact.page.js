import { CommonPage } from './common.page';

export class EditContactPage extends CommonPage {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log('edit contact page');
    return this;
  }
}
