import React from 'react';
import { Link } from 'react-router-dom';
import './PreviousNextLinks.css';

const PreviousNextLinks = ({previous, next}) => (
  <div className="PreviousNextLinks">
    { previous && <Link to={"/" + previous}>Previous</Link> }
    { next && <Link to={"/" + next}>Next</Link> }
  </div>
);

export default PreviousNextLinks;
