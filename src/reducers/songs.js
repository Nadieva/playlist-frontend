import {
  CREATE_SONG,
  RETRIEVE_ALL_SONGS,
  UPDATE_SONG,
  DELETE_SONG,
} from '../actions/types';

const initialState = [];

const songReducer = (songs = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SONG:
      return [...songs, payload];

    case RETRIEVE_ALL_SONGS:
      return payload;

    case UPDATE_SONG:
      return songs.map((song) => {
        if (song.id === payload.id) {
          return {
            ...song,
            ...payload,
          };
        }
        return song;
      });

    case DELETE_SONG:
      return songs.filter(({ id }) => id !== payload.id);

    default:
      return songs;
  }
};

export default songReducer;
