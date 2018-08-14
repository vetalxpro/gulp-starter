import { CommonPage } from './common.page';

export class ContactPage extends CommonPage {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log('contact page');
    return this;
  }

}
