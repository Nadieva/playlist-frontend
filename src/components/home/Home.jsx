/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { HOME_IMAGE_FOLDER_URL } from '../../Constant';
import './home.sass';

export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const createCarouselItem = (i) => <div>{i}</div>;
  return <div>Home</div>;
};
