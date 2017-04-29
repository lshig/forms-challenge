import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Input from '../Input'
const RadiosContent = ({
  id,
  className,
  onRadioClick,
  onPreviousClick,
  onNextClick,
  radioOptions
}) => {
  return (
    <div
      id={id}
      className={className}>
      <div className='form--content'>
        {radioOptions.map((item,index) =>
          <div className='row' key={index}>
            <div className='center'>
              <Input
                className='input--radio'
                label={item.label}
                name='timeOfDay'
                onClick={onRadioClick}
                type='radio'
                value={item.value} />
            </div>
          </div>
        )}
      </div>
      <div className='row'>
        <Button
          className='previous'
          onClick={onPreviousClick}
          text='Previous' />
        <Button
          className='next'
          onClick={onNextClick}
          text='Next' />
      </div>
    </div>
  )
}
RadiosContent.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onRadioClick: PropTypes.func.isRequired,
  radioOptions: PropTypes.array.isRequired
}
export default RadiosContent
