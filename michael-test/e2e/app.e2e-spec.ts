import { MichaelTestPage } from './app.po';

describe('michael-test App', function() {
  let page: MichaelTestPage;

  beforeEach(() => {
    page = new MichaelTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
