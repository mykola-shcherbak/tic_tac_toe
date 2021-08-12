import React from 'react';
import Proptypes from 'prop-types';
import './Player.scss';

export const Player = ({ name, value, onChange, text }) => (
  <div>
    <label htmlFor={name} className="label">{text}</label>
    <input
      className="input"
      id={name}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

Player.propTypes = {
  name: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};
