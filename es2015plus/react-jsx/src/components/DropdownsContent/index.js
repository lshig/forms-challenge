'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../microcomponents/Button/index'
import Select from '../../microcomponents/Select/index'
const DropdownsContent = ({id, className, onSelectChange, onPreviousClick, onNextClick}) => {
  const createOptionsList = (startIndex, endIndex) => {
    let results = []
    for (var i = startIndex; i <= endIndex; i++) {
      results.push(i)
    }
    return results
  }
  const options = {
    month: createOptionsList(1, 12),
    day: createOptionsList(1, 31),
    year: createOptionsList(2000, 2018)
  }
  return (
    <div id={id} className={className}>
      <div className='form--content'>
        <div className='row'>
          <div className='center'>
            <Select
              label='Month'
              name='month'
              onChange={onSelectChange}
              options={options.month}
            />
          </div>
        </div>
        <div className='row'>
          <div className='center'>
            <Select
              label='Day'
              name='day'
              onChange={onSelectChange}
              options={options.day}
            />
          </div>
        </div>
        <div className='row'>
          <div className='center'>
            <Select
              label='Year'
              name='year'
              onChange={onSelectChange}
              options={options.year}
            />
          </div>
        </div>
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
DropdownsContent.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired
}
export default DropdownsContent
