import axios from 'axios';

export const register = (user_email: string, username: string, password: string) => {
  return axios.post('/auth/register', { user_email, username, password, user_id: 1 });
};
