import React from 'react';
import './Square.scss';
import PropTypes from 'prop-types';

export const Square = ({ value, onClick }) => (
  <button
    className="square"
    type="button"
    onClick={onClick}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
