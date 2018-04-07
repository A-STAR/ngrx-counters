import { CountersPage } from './app.po';

describe('counter App', function() {
  let page: CountersPage;

  beforeEach(() => {
    page = new CountersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
