import React from 'react';
import PropTypes from 'prop-types';

function CalculatorOutput({ output }) {
  return (
    <h1 className="text-white text-5xl font-thin overflow-x-auto">{output}</h1>
  );
}

CalculatorOutput.propTypes = {
  output: PropTypes.string.isRequired
};

export default CalculatorOutput;
