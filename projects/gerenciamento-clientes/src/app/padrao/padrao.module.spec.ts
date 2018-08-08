import { PadraoModule } from './padrao.module';

describe('PadraoModule', () => {
  let padraoModule: PadraoModule;

  beforeEach(() => {
    padraoModule = new PadraoModule();
  });

  it('should create an instance', () => {
    expect(padraoModule).toBeTruthy();
  });
});
