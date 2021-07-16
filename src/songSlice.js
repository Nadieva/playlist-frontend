import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SongService } from './services/index';

const initialState = {
  songs: [],
  status: 'idle',
};

export const createSong = createAsyncThunk(
  'song/create',
  async (name, artist, gender) => {
    const response = await SongService.create({ name, artist, gender });
    return response.data;
  },
);

export const retrieveSongs = createAsyncThunk('song/retrieveAll', async () => {
  const response = await SongService.getAll();
  return response.data;
});

export const updateSong = createAsyncThunk('song/update', async (id, data) => {
  const response = await SongService.update(id, data);
  return response.data;
});

export const deleteSong = createAsyncThunk(
  'song/deleteById',
  async (id, data) => {
    const response = await SongService.update(id, data);
    return response.data;
  },
);

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSong.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(createSong.fulfilled, (state, action) => {
        // state.status = 'idle';
        state.songs.push(action.payload);
      });
  },
});
export default songSlice.reducer;
