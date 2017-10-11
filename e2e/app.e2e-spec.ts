import { AdminSectionPage } from './app.po';

describe('admin-section App', () => {
  let page: AdminSectionPage;

  beforeEach(() => {
    page = new AdminSectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
