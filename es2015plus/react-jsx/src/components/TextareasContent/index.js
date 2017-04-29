import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import TextArea from '../TextArea'
const TextareasContent = ({id, className, onTextareaChange, onPreviousClick, onSubmitClick}) => {
  return (
    <div id={id} className={className}>
      <div className='form--content'>
        <div className='row'>
          <TextArea
            className='textarea__small'
            label='First Name'
            name='firstName'
            onChange={onTextareaChange}
            placeholder='Jane'
          />
        </div>
        <div className='row'>
          <TextArea
            className='textarea__small'
            label='Last Name'
            name='lastName'
            onChange={onTextareaChange}
            placeholder='Doe'
          />
        </div>
        <div className='row'>
          <TextArea
            className='textarea__large'
            label='Comments'
            name='comments'
            onChange={onTextareaChange}
            placeholder='Hello, World!'
          />
        </div>
      </div>
      <div className='row'>
        <Button
          className='previous'
          onClick={onPreviousClick}
          text='Previous' />
        <Button
          className='submit'
          id='submitButton'
          onClick={onSubmitClick}
          text='Submit' />
      </div>
    </div>
  )
}
TextareasContent.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onTextareaChange: PropTypes.func.isRequired
}
export default TextareasContent
