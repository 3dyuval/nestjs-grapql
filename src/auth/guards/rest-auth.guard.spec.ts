import { RestAuthGuard } from './rest-auth.guard';

describe('RestAuthGuard', () => {
  it('should be defined', () => {
    expect(new RestAuthGuard()).toBeDefined();
  });
});
