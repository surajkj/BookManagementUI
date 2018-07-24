import { PostloginModule } from './postlogin.module';

describe('UiModule', () => {
  let postloginModule: PostloginModule;

  beforeEach(() => {
    postloginModule = new PostloginModule();
  });

  it('should create an instance', () => {
    expect(postloginModule).toBeTruthy();
  });
});
