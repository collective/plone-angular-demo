import { PloneAngularDemoPage } from './app.po';

describe('plone-angular-demo App', () => {
  let page: PloneAngularDemoPage;

  beforeEach(() => {
    page = new PloneAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
