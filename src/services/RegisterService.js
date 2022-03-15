import httpClient from '../utils/httpClient';

export const registerUser = async (register) => {
  try {
    const data = await httpClient.post('/api/usuarios', register).then((v) => {
      return v.data;
    });
    return data;
  } catch (e) {
    return e.response.data.errors;
  }
};
