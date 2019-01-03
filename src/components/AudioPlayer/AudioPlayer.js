import React from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({fileName}) => (
  <div className="AudioPlayer">
    <audio src={"/audio/" + fileName} controls></audio>
  </div>
);

export default AudioPlayer;
