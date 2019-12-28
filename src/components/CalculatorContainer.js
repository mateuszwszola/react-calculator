import React, { useState, useRef, useEffect } from 'react';
import { mathOperations, inputKeysAction } from '../helpers';
import Calculator from './Calculator';

function CalculatorContainer() {
  const [currentOutput, setCurrentOutput] = useState('');
  const [startFreshNext, setStartFreshNext] = useState(false);
  const tmpValue = useRef(null);
  const tmpOperation = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key.toLowerCase();
      if (inputKeysAction.hasOwnProperty(key)) {
        handleAction(inputKeysAction[key]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleAction]);

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

  function handleAction(action) {
    console.log({
      tmpValue: tmpValue.current,
      tmpOperation: tmpOperation.current,
      action,
      currentOutput
    });
    // action is a number or a 'dot' -> update currentOutput
    if (!isNaN(Number(action)) || action === 'dot') {
      // If output is empty ('') AND action is 0 -> DO NOT update currentOutput (basically, do not add leading zeros or multiple dots)
      if (
        !(Number(action) === 0 && currentOutput === '0') &&
        !(action === 'dot' && currentOutput.includes('.'))
      ) {
        let newOutput;
        if (startFreshNext) {
          newOutput = action === 'dot' ? '0.' : action;
          setStartFreshNext(false);
        } else {
          newOutput =
            action === 'dot' ? currentOutput + '0.' : currentOutput + action;
        }

        setCurrentOutput(newOutput);
      }
    } else if (action === 'reset') {
      resetCalculator();
    } else if (action === 'backspace') {
      setCurrentOutput(currentOutput.slice(0, currentOutput.length - 1)); // remove last character
    } else if (action === 'equation') {
      // calculate only if tmpValue and tmpOperation is saved
      if (tmpValue.current !== null && tmpOperation.current) {
        calculateNewTmpValue();
        setCurrentOutput(tmpValue.current.toString());
        resetTmpValues();
        setStartFreshNext(true);
      }
    } else {
      if (tmpValue.current !== null && tmpOperation.current) {
        // Doing extra operation -> update tmp value
        calculateNewTmpValue();
      } else {
        tmpValue.current = Number(currentOutput); // save current output as number
      }
      tmpOperation.current = action; // save current operation
      setCurrentOutput('');
    }
  }

  return (
    <Calculator
      output={currentOutput || '0'}
      handleActionBtnClick={handleAction}
    />
  );
}

export default CalculatorContainer;
