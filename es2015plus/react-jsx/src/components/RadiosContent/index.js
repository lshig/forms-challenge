import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Input from '../Input'
const RadiosContent = ({id, className, onRadioClick, onPreviousClick, onNextClick}) => {
  const choices = [{
    label: '5AM - 11:59AM',
    value: 'Morning'
  }, {
    label: '12PM - 12:59PM',
    value: 'Noon'
  }, {
    label: '1PM - 4:59PM',
    value: 'Afternoon'
  }, {
    label: '5PM - 7:59AM',
    value: 'Evening'
  }, {
    label: '8PM - 11:59AM',
    value: 'Night'
  }, {
    label: '12AM - 12:59AM',
    value: 'Midnight'
  }, {
    label: '1AM - 4:59AM',
    value: 'Late Night'
  }]
  return (
    <div id={id} className={className}>
      <div className='form--content'>
        {choices.map(radio =>
          <div className='row' key={radio.value}>
            <div className='center'>
              <Input
                className='input--radio'
                label={radio.label}
                name='timeOfDay'
                onClick={onRadioClick}
                type='radio'
                value={radio.value} />
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
  onRadioClick: PropTypes.func.isRequired
}
export default RadiosContent
