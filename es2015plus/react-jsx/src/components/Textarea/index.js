import React from 'react'
import PropTypes from 'prop-types'
const TextArea = ({name, label, className, onChange, placeholder}) => {
  return (
    <label htmlFor={name}>
      {label}
      <textarea
        className={className}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type='text' />
    </label>
  )
}
TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}
export default TextArea
