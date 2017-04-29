import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Select from '../Select'
const SelectsContent = ({
  className,
  selectOptions,
  id,
  onSelectChange,
  onPreviousClick,
  onNextClick
}) => {
  return (
    <div id={id} className={className}>
      <div className='form--content'>
      {selectOptions.map((item,index) => {
        return (
          <div className='row' key={index}>
            <div className='center'>
              <Select
                label={item.label}
                name={item.name}
                onChange={onSelectChange}
                options={item.options}
              />
            </div>
          </div>
        );
      })}
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
SelectsContent.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectOptions: PropTypes.array.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired
}
export default SelectsContent
