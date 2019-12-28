import React from 'react';
import PropTypes from 'prop-types';
import CalculatorOutput from './CalculatorOutput';
import ButtonCell from './ButtonCell';

function Calculator({ output, handleActionBtnClick }) {
  return (
    <div className="w-full max-w-sm mx-auto sm:rounded shadow-xl text-gray-900 border-solid border-gray-800 border">
      <div className="flex">
        <div className="w-full px-6 py-4 bg-gray-900 text-right">
          <CalculatorOutput output={output} />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-2/4 bg-gray-400 hover:bg-gray-500">
          <ButtonCell
            action="reset"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
        <div className="w-1/4 bg-gray-400 hover:bg-gray-500">
          <ButtonCell
            action="backspace"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell
            action="division"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
      </div>

      <div className="flex">
        {['7', '8', '9'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300 hover:bg-gray-400">
            <ButtonCell
              action={number}
              handleActionBtnClick={handleActionBtnClick}
            />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell
            action="multiplication"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
      </div>

      <div className="flex">
        {['4', '5', '6'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300 hover:bg-gray-400">
            <ButtonCell
              action={number}
              handleActionBtnClick={handleActionBtnClick}
            />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell
            action="subtraction"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
      </div>

      <div className="flex">
        {['1', '2', '3'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300 hover:bg-gray-400">
            <ButtonCell
              action={number}
              handleActionBtnClick={handleActionBtnClick}
            />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 text-white hover:bg-orange-600">
          <ButtonCell
            action="addition"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-2/4 bg-gray-300 hover:bg-gray-400">
          <ButtonCell action="0" handleActionBtnClick={handleActionBtnClick} />
        </div>
        <div className="w-1/4 bg-gray-300 hover:bg-gray-400">
          <ButtonCell
            action="dot"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell
            action="equation"
            handleActionBtnClick={handleActionBtnClick}
          />
        </div>
      </div>
    </div>
  );
}

Calculator.propTypes = {
  output: PropTypes.string.isRequired,
  handleActionBtnClick: PropTypes.func.isRequired
};

export default Calculator;
