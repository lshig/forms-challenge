import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Textarea from '../Textarea';

export default function TextareasContent({
  id,
  className,
  onTextareaChange,
  onPreviousClick,
  onSubmitClick,
  textareaOptions
}) {
  return (
    <div id={id} className={className}>
      <div className="form--content">
        {textareaOptions.map((item, index) => (
          <div className="row" key={index}>
            <Textarea {...item} onChange={onTextareaChange} />
          </div>
        ))}
      </div>
      <div className="row">
        <Button
          className="previous"
          onClick={onPreviousClick}
          text="Previous"
        />
        <Button
          className="submit"
          id="submitButton"
          onClick={onSubmitClick}
          text="Submit"
        />
      </div>
    </div>
  );
}

TextareasContent.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onTextareaChange: PropTypes.func.isRequired,
  textareaOptions: PropTypes.array.isRequired
};
