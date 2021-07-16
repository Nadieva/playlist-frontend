/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { retrieveAllSongs } from '../../actions/songs';
import { Song } from '../song';
import './songList.scss';

export const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  useEffect(() => {
    dispatch(retrieveAllSongs());
  }, [dispatch]);

  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const setActiveSong = (song, index) => {
    setCurrentSong(song);
    setCurrentIndex(index);
  };
  const history = useHistory();
  return (
    <div className="list">
      <input
        type="button"
        value="+"
        onClick={() => history.push('/songs/-1')}
      />

      {songs !== undefined &&
        songs !== null &&
        songs.map((song, index) => (
          <Song
            key={song.id}
            song={song}
            onClick={() => setActiveSong(song, index)}
          />
        ))}
    </div>
  );
};
