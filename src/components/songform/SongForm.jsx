/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSong, createSong } from '../../actions/songs';
import './songform.scss';

export const SongForm = () => {
  const { id } = useParams();
  const song = useSelector((state) =>
    state.songs.find((element) => element.id === id),
  );
  const songDefault = {
    title: '',
    artist: '',
    gender: '',
  };
  const songForm = song !== undefined && song !== null ? song : songDefault;
  const { title, artist, gender } = songForm;
  const [titleForm, setTitleForm] = useState(title);
  const [artistForm, setArtistForm] = useState(artist);
  const [genderForm, setGenderForm] = useState(gender);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitButton = () => {
    if (song !== undefined && song !== null) {
      dispatch(
        updateSong(id, {
          title: titleForm,
          artist: artistForm,
          gender: genderForm,
        }),
      );
    } else {
      dispatch(
        createSong({
          title: titleForm,
          artist: artistForm,
          gender: genderForm,
        }),
      );
    }

    history.push('/songs');
  };

  return (
    <div>
      <form onSubmit={handleSubmitButton} className="row">
        <div className="row">
          <label htmlFor="titleId">
            Title:
            <input
              id="titleId"
              type="text"
              value={titleForm}
              placeholder="title"
              onChange={(event) => setTitleForm(event.target.value)}
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="artistId">
            Artist:
            <input
              id="artistId"
              type="text"
              value={artistForm}
              placeholder="artist"
              onChange={(event) => {
                setArtistForm(event.target.value);
                console.log(artistForm);
              }}
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="genderId">
            Gender:
            <input
              id="genderId"
              type="text"
              value={genderForm}
              placeholder="gender"
              onChange={(event) => setGenderForm(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <input
            type="button"
            value="Cancel"
            onClick={() => history.push('/songs')}
          />
        </div>
      </form>
    </div>
  );
};
