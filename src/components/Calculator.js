import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ButtonCell from './ButtonCell';
import CalculatorOutput from './CalculatorOutput';
import { mathOperations } from '../helpers';

function CalculatorContainer() {
  const [currentOutput, setCurrentOutput] = useState('');
  const [startFreshNext, setStartFreshNext] = useState(false);
  const tmpValue = useRef(null);
  const tmpOperation = useRef(null);

  console.log({
    tmpValue,
    tmpOperation,
    currentOutput,
    startFreshNext
  });

  function resetTmpValues() {
    tmpValue.current = null;
    tmpOperation.current = null;
  }

  function resetCalculator() {
    resetTmpValues();
    setCurrentOutput('');
    setStartFreshNext(false);
  }

  function calculateNewTmpValue() {
    tmpValue.current = mathOperations[tmpOperation.current](
      tmpValue.current,
      Number(currentOutput)
    );
  }

  function handleButtonClick(value) {
    // Value is a number or a 'dot' -> update currentOutput
    if (!Number.isNaN(Number(value)) || value === 'dot') {
      // If output is empty ('') AND value is 0 -> DO NOT update currentOutput (basically, do not add leading zeros)
      if (
        !(Number(value) === 0 && currentOutput === '') &&
        !(value === 'dot' && currentOutput.includes('.'))
      ) {
        let newOutput;
        if (startFreshNext) {
          newOutput = value === 'dot' ? '0.' : value;
          setStartFreshNext(false);
        } else {
          newOutput =
            value === 'dot' ? currentOutput + '0.' : currentOutput + value;
        }

        setCurrentOutput(newOutput);
      }
    } else if (value === 'C') {
      resetCalculator();
    } else if (value === 'backspace') {
      setCurrentOutput(currentOutput.slice(0, currentOutput.length - 1)); // remove last character
    } else if (value === 'equation') {
      // do something only if tmp value and operation is saved
      if (tmpValue.current && tmpOperation.current) {
        calculateNewTmpValue();
        setCurrentOutput(tmpValue.current.toString());
        resetTmpValues();
        setStartFreshNext(true);
      }
    } else {
      if (tmpValue.current && tmpOperation.current) {
        // Doing extra operation -> update tmp value
        calculateNewTmpValue();
      } else {
        tmpValue.current = Number(currentOutput); // save current output as number
      }
      tmpOperation.current = value; // save current operation
      setCurrentOutput('');
    }
  }

  return (
    <Calculator
      output={currentOutput || '0'}
      handleButtonClick={handleButtonClick}
    />
  );
}

function Calculator({ output, handleButtonClick }) {
  return (
    <div className="w-full h-auto max-w-sm rounded shadow-xl text-gray-900 border-solid border-gray-800 border">
      <div className="flex">
        <div className="w-full px-6 py-4 bg-gray-900 text-right">
          <CalculatorOutput output={output} />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-2/4 bg-gray-400 hover:bg-gray-500">
          <ButtonCell action="C" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-gray-400 hover:bg-gray-500">
          <ButtonCell
            action="backspace"
            handleButtonClick={handleButtonClick}
          />
        </div>
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell action="division" handleButtonClick={handleButtonClick} />
        </div>
      </div>

      <div className="flex">
        {['7', '8', '9'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300 hover:bg-gray-400">
            <ButtonCell action={number} handleButtonClick={handleButtonClick} />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell
            action="multiplication"
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>

      <div className="flex">
        {['4', '5', '6'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300 hover:bg-gray-400">
            <ButtonCell action={number} handleButtonClick={handleButtonClick} />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell
            action="subtraction"
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>

      <div className="flex">
        {['1', '2', '3'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300 hover:bg-gray-400">
            <ButtonCell action={number} handleButtonClick={handleButtonClick} />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 text-white hover:bg-orange-600">
          <ButtonCell action="addition" handleButtonClick={handleButtonClick} />
        </div>
      </div>

      <div className="flex">
        <div className="w-2/4 bg-gray-300 hover:bg-gray-400">
          <ButtonCell action="0" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-gray-300 hover:bg-gray-400">
          <ButtonCell action="dot" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-orange-500 hover:bg-orange-600 text-white">
          <ButtonCell action="equation" handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

Calculator.propTypes = {
  output: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired
};

export default CalculatorContainer;
