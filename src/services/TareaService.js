import httpClient from '../utils/httpClient';

export const getTareas = async () => {
  const data = await httpClient
    .get(`/api/tareas?limite=100&desde=0}`)
    .then((v) => v.data);
  return data;
};

export const gettareaById = async (tarea) => {
  const data = await httpClient.get(`/api/tareas/${tarea}`).then((v) => v.data);
  return data;
};

export const createTarea = async (tarea, token) => {
  let config = {
    headers: {
      'x-token': token
    }
  };

  try {
    const data = await httpClient
      .post('/api/tareas', tarea, config)
      .then((v) => {
        return v.data;
      });
    return data;
  } catch (e) {
    return e.response.data;
  }
};
export const updateTarea = async (id, tarea, token) => {
  let config = {
    headers: {
      'x-token': token
    }
  };
  try {
    const data = await httpClient
      .put(`/api/tareas/${id}`, tarea, config)
      .then((v) => v.data);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

export const deleteTarea = async (idTarea, token) => {
  let config = {
    headers: {
      'x-token': token
    }
  };
  try {
    const data = await httpClient
      .delete(`/api/tareas/${idTarea}`, config)
      .then((v) => v.data);
    return data;
  } catch (e) {
    return e.response.data;
  }
};
