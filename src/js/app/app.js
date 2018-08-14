const pages = {
  ALL_CONTACTS: '/all-contacts',
  CONTACT: '/contact',
  ADD_CONTACT: '/add-contact',
  EDIT_CONTACT: '/edit-contact'
};

export class App {
  constructor() {
    this.page = null;
  }

  start() {
    window.CONFIG = window.CONFIG || {};
    this.initPage();
  }

  initPage() {
    switch ( window.CONFIG.PAGE ) {
      case pages.ALL_CONTACTS: {
        import('./pages/all-contacts.page')
          .then(( module ) => {
            this.page = new module.AllContactsPage().init();
          });
        break;
      }
      case pages.CONTACT: {
        import('./pages/contact.page')
          .then(( module ) => {
            this.page = new module.ContactPage().init();
          });
        break;
      }
      case pages.ADD_CONTACT: {
        import('./pages/add-contact.page')
          .then(( module ) => {
            this.page = new module.AddContactPage().init();
          });
        break;
      }
      case pages.EDIT_CONTACT: {
        import('./pages/edit-contact.page')
          .then(( module ) => {
            this.page = new module.EditContactPage().init();
          });
        break;
      }
      default: {

      }
    }
  }
}
