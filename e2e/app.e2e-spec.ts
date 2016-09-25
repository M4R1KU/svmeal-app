import { SvmealAppPage } from './app.po';

describe('svmeal-app App', function() {
  let page: SvmealAppPage;

  beforeEach(() => {
    page = new SvmealAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
