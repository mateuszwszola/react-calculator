import React from 'react';
import PropTypes from 'prop-types';
import { actionSymbols } from '../helpers';

function ButtonCell({ handleButtonClick, action, ...buttonProps }) {
  return (
    <button
      onClick={() => handleButtonClick(action)}
      className="border-solid border-gray-900 border text-2xl sm:text-3xl font-light w-full py-4 sm:py-6"
      {...buttonProps}
    >
      {actionSymbols[action] || action}
    </button>
  );
}

ButtonCell.propTypes = {
  action: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired
};

export default ButtonCell;
