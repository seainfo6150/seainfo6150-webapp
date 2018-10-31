import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button  = ({
  children ='This is a button',
  className = styles.base
}) => (
  <button className={className}>
    {children}
  </button>
);

Button.PropTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default Button;
