import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';

export default function CheckboxesContent({
  checkboxOptions,
  className,
  id,
  onCheckboxClick,
  onAutofillClick,
  onNextClick
}) {
  return (
    <div id={id} className={className}>
      <div className="form--content">
        {checkboxOptions.map((item, index) => (
          <div className="row" key={index}>
            <div className="center">
              <Input
                className="input--checkbox"
                label={item}
                name="weekday"
                onClick={onCheckboxClick}
                type="checkbox"
                value={item}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <Button
          className="autofill"
          id="autofillButton"
          onClick={onAutofillClick}
          text="Autofill"
        />
        <Button className="next" onClick={onNextClick} text="Next" />
      </div>
    </div>
  );
}

CheckboxesContent.propTypes = {
  checkboxOptions: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onAutofillClick: PropTypes.func.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
};
