import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ name, label, onChange, options }) {
  return (
    <div className="select">
      <select id={name} name={name} onChange={onChange}>
        <option key={label} value="">
          {label}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="select__arrow" />
    </div>
  );
}
Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};
