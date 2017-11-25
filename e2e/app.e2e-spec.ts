import { FormExamplePage } from './app.po';

describe('form-example App', () => {
  let page: FormExamplePage;

  beforeEach(() => {
    page = new FormExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
