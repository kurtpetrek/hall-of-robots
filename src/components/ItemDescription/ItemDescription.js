import React from 'react';
import './ItemDescription.css';

const ItemDescription = ({description}) => (
  <div>
    <p className="ItemDescription">{description}</p>
  </div>
);

export default ItemDescription;
