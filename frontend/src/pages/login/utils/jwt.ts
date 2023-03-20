export const storeToken = (name: string, value: string) => {
  document.cookie = name + '=' + (value || '') + '; expires=' + new Date(Date.now() + 86400e3);
};
export const getToken = (name: string) => {
  var value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length > 0 && parts.length === 2) return parts.pop()?.split(';').shift();
};

