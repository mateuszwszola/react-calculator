import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { mathOperations } from '../helpers';

function CalculatorContainer() {
  const [clicksHistory, setClicksHistory] = useState([]);
  const [currentOutput, setCurrentOutput] = useState('');
  const [startFreshNext, setStartFreshNext] = useState(false);
  const tmpValue = useRef(null);
  const tmpOperation = useRef(null);

  console.log({ tmpValue, tmpOperation, clicksHistory, currentOutput });

  const handleButtonClick = value => {
    setClicksHistory([...clicksHistory, value]);
    // Value is a number or a 'dot' -> update currentOutput
    if (!Number.isNaN(Number(value)) || value === 'dot') {
      // If output is empty ('') AND value is 0 -> DO NOT update currentOutput (basically, do not add leading zeros)
      if (!(Number(value) === 0 && currentOutput === '')) {
        let newOutput;
        if (startFreshNext) {
          newOutput = value === 'dot' ? '.' : value;
        } else {
          newOutput =
            value === 'dot' ? currentOutput + '.' : currentOutput + value;
        }
        setCurrentOutput(newOutput);
      }
    } else if (value === 'C') {
      setCurrentOutput('');
      tmpValue.current = null;
      tmpOperation.current = null;
    } else if (value === 'backspace') {
      setCurrentOutput(currentOutput.slice(0, currentOutput.length - 1)); // remove last character
    } else if (value === 'equation') {
      if (tmpValue.current && tmpOperation.current) {
        tmpValue.current = mathOperations[tmpOperation.current](
          tmpValue.current,
          Number(currentOutput)
        );
        setCurrentOutput(tmpValue.current.toString());
        tmpValue.current = null;
        tmpOperation.current = null;
        setStartFreshNext(true);
      }
    } else {
      if (tmpValue.current) {
        // Doing extra operation -> update tmp value
        tmpValue.current = mathOperations[tmpOperation.current](
          tmpValue.current,
          Number(currentOutput)
        );
      } else {
        tmpValue.current = Number(currentOutput); // save current display number
      }
      tmpOperation.current = value; // save current operation
      setCurrentOutput('');
    }
  };

  return (
    <Calculator output={currentOutput} handleButtonClick={handleButtonClick} />
  );
}

function Calculator({ output, handleButtonClick }) {
  return (
    <div className="max-w-sm mx-auto text-gray-800">
      <div className="flex">
        <div className="w-full px-6 py-4 bg-gray-900 text-right">
          <h1 className="text-white text-5xl font-thin">{output || 0}</h1>
        </div>
      </div>

      <div className="flex">
        <div className="w-2/4 bg-gray-400">
          <Button action="C" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-gray-400">
          <Button action="backspace" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-orange-500 text-white">
          <Button action="division" handleButtonClick={handleButtonClick} />
        </div>
      </div>

      <div className="flex">
        {['7', '8', '9'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300">
            <Button action={number} handleButtonClick={handleButtonClick} />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 text-white">
          <Button
            action="multiplication"
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>

      <div className="flex">
        {['4', '5', '6'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300">
            <Button action={number} handleButtonClick={handleButtonClick} />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 text-white">
          <Button action="subtraction" handleButtonClick={handleButtonClick} />
        </div>
      </div>

      <div className="flex">
        {['1', '2', '3'].map(number => (
          <div key={number} className="w-1/4 bg-gray-300">
            <Button action={number} handleButtonClick={handleButtonClick} />
          </div>
        ))}
        <div className="w-1/4 bg-orange-500 text-white">
          <Button action="addition" handleButtonClick={handleButtonClick} />
        </div>
      </div>

      <div className="flex">
        <div className="w-2/4 bg-gray-300">
          <Button action="0" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-gray-300">
          <Button action="dot" handleButtonClick={handleButtonClick} />
        </div>
        <div className="w-1/4 bg-orange-500 text-white">
          <Button action="equation" handleButtonClick={handleButtonClick} />
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
