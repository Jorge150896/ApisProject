import httpClient from '../utils/httpClient';

export const loginUser = async (login) => {
  try {
    const data = await httpClient.post('/api/auth/login', login).then((v) => {
      return v.data;
    });
    return data;
  } catch (e) {
    return e.response.data;
  }
};
