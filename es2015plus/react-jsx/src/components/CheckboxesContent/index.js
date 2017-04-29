import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Input from '../Input'
const CheckboxesContent = ({id, className, onCheckboxClick, onAutofillClick, onNextClick}) => {
  const choices = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
    <div id={id} className={className}>
      <div className='form--content'>
        {choices.map(box =>
          <div className='row' key={box}>
            <div className='center'>
              <Input
                className='input--checkbox'
                label={box}
                name='weekday'
                onClick={onCheckboxClick}
                type='checkbox'
                value={box} />
            </div>
          </div>
        )}
      </div>
      <div className='row'>
        <Button
          className='autofill'
          id='autofillButton'
          onClick={onAutofillClick}
          text='Autofill' />
        <Button
          className='next'
          onClick={onNextClick}
          text='Next' />
      </div>
    </div>
  )
}
CheckboxesContent.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onAutofillClick: PropTypes.func.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
}
export default CheckboxesContent
