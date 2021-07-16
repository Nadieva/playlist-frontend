/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteSong } from '../../actions/songs';

import './song.scss';

export const Song = ({ song }) => {
  const { id, title, artist, gender } = song;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeleteButton = (index) => {
    dispatch(deleteSong(index));
    history.push('/songs');
  };

  return (
    <div className="card">
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Gender: {gender}</p>
      <input
        type="button"
        value="Edit"
        onClick={() => history.push(`/songs/${id}`)}
      />
      <input type="button" value="X" onClick={() => handleDeleteButton(id)} />
    </div>
  );
};
