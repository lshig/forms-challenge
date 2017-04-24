'use strict'
import React from 'react'
import PropTypes from 'prop-types'
const Select = ({name, label, onChange, options}) => {
  const createOption = (item) => (
    <option
      key={item}
      value={item}>
      {item}
    </option>
  )
  return (
    <div className='select'>
      <select
        id={name}
        name={name}
        onChange={onChange}>
        <option
          key={label}
          value=''>
          {label}
        </option>
        {options.map(createOption)}
      </select>
      <div className='select__arrow' />
    </div>
  )
}
Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}
export default Select
