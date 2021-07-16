/* eslint-disable import/prefer-default-export */
import http from '../http-common';

const getAll = () => http.get('/songs');

const get = (id) => http.get(`/songs/${id}`);

const create = (data) => http.post('/songs/', data);

const update = (id, data) => http.put(`/songs/${id}`, data);

const remove = (id) => http.delete(`/songs/${id}`);

export const SongService = {
  getAll,
  get,
  create,
  update,
  remove,
};
