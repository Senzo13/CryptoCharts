import { hashPassword, compareHashAndPassword } from '../../../src/utils/auth/hashPassword';

describe('hasPassword method', () => {
  describe('hashPassword', () => {
    it('should hash the password', async () => {
      const password = 'password';
      const hashedPassword = await hashPassword(password);

      expect(hashedPassword).not.toEqual(password);
    });
  });

  describe('compareHashAndPassword', () => {
    it('should return true for a matching password and hash', async () => {
      const password = 'password';
      const hashedPassword = await hashPassword(password);

      const result = await compareHashAndPassword(password, hashedPassword);

      expect(result).toEqual(true);
    });

    it('should return false for a non-matching password and hash', async () => {
      const password = 'password';
      const hashedPassword = await hashPassword(password);

      const result = await compareHashAndPassword('incorrect', hashedPassword);

      expect(result).toEqual(false);
    });
  });
});
