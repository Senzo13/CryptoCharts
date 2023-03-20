//Remove the token from the cookies and remove the user from the session
export const clearSession = () => {
  //remove the user from the session
  localStorage.removeItem('user');
  //remove the token from the cookies
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
};
