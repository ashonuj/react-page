import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import './FlaskLoader.css';

const ChemistrySpinner = () => {
  return (
    <div className="spinner-container">
      <FontAwesomeIcon icon={faFlaskVial} className="spinner" />
    </div>
  );
};

export default ChemistrySpinner;