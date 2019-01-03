import React from 'react';
import './MainImage.css';

const MainImage = ({fileName}) => (
  <img className="MainImage" src={"./images/" + fileName} alt=""/>
);

export default MainImage;
