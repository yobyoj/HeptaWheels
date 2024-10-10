import React from 'react';
import { Link } from 'react-router-dom';

const UsedCars = () => {
  return (
    <div>
      <h1>Used Cars</h1>
      <p>List of used cars will go here.</p>
      <Link to="/">Back to Main Page</Link>
    </div>
  );
};

export default UsedCars;
