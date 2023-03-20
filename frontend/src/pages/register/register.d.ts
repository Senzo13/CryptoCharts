export const INVALID_USERNAME_LENGTH = 'Username must be longer that 4 characters';
export const INVALID_EMAIL_FORMAT = 'Ensure your email is correctly formatted';
export const EMAIL_ALREADY_USED = 'This email is already used';
export const INVALID_PASSWORD_LENGTH = 'Your password should have at least 8 characters';
export const INVALID_PASSWORD_FORMAT =
  'Your email must, at least, have one uppercase, one symbol, and one number';
export type InvalidUsernameLength = typeof invalid_username_length;
export type InvalidEmailFormat = typeof invalid_email_format;
export type EmailAlreadyUsed = typeof email_already_used;
export type InvalidPasswordLength = typeof invalid_password_length;
export type InvalidPasswordFormat = typeof invalid_password_format;
export type UsernameValidator = {
  state: boolean;
  reason: InvalidUsernameLength | undefined;
};
export type EmailValidator = {
  state: boolean;
  reason: InvalidEmailFormat | EmailAlreadyUsed | undefined;
};
export type PasswordValidator = {
  state: boolean;
  reason: InvalidPasswordLength | InvalidPasswordFormat | undefined;
};
export type ProfileTypesValidator = UsernameValidator | PasswordValidator | EmailValidator;
