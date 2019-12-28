import React from 'react';
import PropTypes from 'prop-types';
import { actionSymbols } from '../helpers';

function ButtonCell({ handleActionBtnClick, action, ...buttonProps }) {
  return (
    <button
      onClick={() => handleActionBtnClick(action)}
      className="border-solid border-gray-900 border text-2xl sm:text-3xl font-light w-full py-4 sm:py-6"
      {...buttonProps}
    >
      {actionSymbols[action] || String(action)}
    </button>
  );
}

ButtonCell.propTypes = {
  action: PropTypes.string.isRequired,
  handleActionBtnClick: PropTypes.func.isRequired
};

export default ButtonCell;
