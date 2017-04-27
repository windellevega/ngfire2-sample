import { Ngfire2AppPage } from './app.po';

describe('ngfire2-app App', function() {
  let page: Ngfire2AppPage;

  beforeEach(() => {
    page = new Ngfire2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
