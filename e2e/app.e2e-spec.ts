import { CosmicAngularPage } from './app.po';

describe('cosmic-angular App', () => {
  let page: CosmicAngularPage;

  beforeEach(() => {
    page = new CosmicAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
