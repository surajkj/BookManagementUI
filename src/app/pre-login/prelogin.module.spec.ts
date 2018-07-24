import { PreloginModule } from './prelogin.module';

describe('PreloginModule', () => {
  let preloginModule: PreloginModule;

  beforeEach(() => {
    preloginModule = new PreloginModule();
  });

  it('should create an instance', () => {
    expect(preloginModule).toBeTruthy();
  });
});
