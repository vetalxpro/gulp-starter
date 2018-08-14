import { CommonPage } from './common.page';

export class AddContactPage extends CommonPage {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log('add contact page');
    return this;
  }
}
