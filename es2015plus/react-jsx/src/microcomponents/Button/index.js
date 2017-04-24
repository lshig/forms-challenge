'use strict'
import React from 'react'
import PropTypes from 'prop-types'
const Button = ({id, className, onClick, text}) => {
  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      type='button'>
      {text}
    </button>
  )
}
Button.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default Button
