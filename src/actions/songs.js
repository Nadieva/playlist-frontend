/* eslint-disable no-console */
import {
  CREATE_SONG,
  RETRIEVE_ALL_SONGS,
  RETRIEVE_SONG,
  UPDATE_SONG,
  DELETE_SONG,
  SET_FILTER,
} from './types';

import { SongService } from '../services';

export const createSong =
  ({ title, artist, gender }) =>
  async (dispatch) => {
    try {
      const res = await SongService.create({ title, artist, gender });

      dispatch({
        type: CREATE_SONG,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveAllSongs = () => async (dispatch) => {
  try {
    const res = await SongService.getAll();
    dispatch({
      type: RETRIEVE_ALL_SONGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveSong = (id) => async (dispatch) => {
  try {
    const res = await SongService.get(id);

    dispatch({
      type: RETRIEVE_SONG,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateSong = (id, data) => async (dispatch) => {
  try {
    const res = await SongService.update(id, data);

    dispatch({
      type: UPDATE_SONG,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteSong = (id) => async (dispatch) => {
  try {
    await SongService.remove(id);

    dispatch({
      type: DELETE_SONG,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});
