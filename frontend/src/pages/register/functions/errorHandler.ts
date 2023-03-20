export type ErrorHandler = (
  code: MissingEmail | MissingPassword | MissingUsername | unknown,
  callback: (reason: MissingUsernameMessage | MissingPasswordMessage | MissingEmailMessage | UnhandlerErrorMessage) => void
) => void;
const missingEmailMessage = "The email has'nt been sended in the request";
const missingPasswordMessage = "The password has'nt been sended in the request";
const missingUsernameMessage = "The username has'nt been sended in the request";
const unhandledErrorMessage = 'An unhandled error has occured';
const missingEmailCode = 'missing_email';
const missingPasswordCode = 'missing_password';
const missingUsernameCode = 'missingUsername';

type MissingEmail = typeof missingEmailCode;
type MissingPassword = typeof missingPasswordCode;
type MissingUsername = typeof missingUsernameCode;
type MissingEmailMessage = typeof missingEmailMessage;
type MissingPasswordMessage = typeof missingPasswordMessage;
type MissingUsernameMessage = typeof missingUsernameMessage;
type UnhandlerErrorMessage = typeof unhandledErrorMessage;
const errorHandler: ErrorHandler = (code, callback) => {
  switch (code) {
    case missingEmailCode:
      callback(missingEmailMessage);
      break;
    case missingPasswordCode:
      callback(missingPasswordMessage);
      break;
    case missingUsernameCode:
      callback(missingUsernameMessage);
      break;
    default:
      callback(unhandledErrorMessage);
      break;
  }
};

export default errorHandler;
