import React from 'react';
import PropTypes from 'prop-types';

const actionSymbols = {
  addition: String.fromCharCode(43),
  subtraction: String.fromCharCode(8722),
  multiplication: String.fromCharCode(215),
  division: String.fromCharCode(247),
  equation: String.fromCharCode(61),
  backspace: String.fromCharCode(8592),
  C: 'C',
  dot: String.fromCharCode(803)
};

function Button({ handleButtonClick, action, ...buttonProps }) {
  return (
    <button
      onClick={() => handleButtonClick(action)}
      className="border-solid border-gray-600 border text-2xl sm:text-3xl font-light w-full py-4 sm:py-6"
      {...buttonProps}
    >
      {actionSymbols[action] || action}
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired
};

export default Button;
