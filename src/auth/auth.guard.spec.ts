import { AuthGuard } from './local.strategy';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });
});
