import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  className,
  label,
  name,
  onClick,
  type,
  value
}) {
  return (
    <label className={`input ${className}`}>
      {label}
      <input name={name} onClick={onClick} type={type} value={value} />
      <div className="input__choice" />
    </label>
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
