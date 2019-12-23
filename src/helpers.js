export const mathOperations = {
  addition(x, y) {
    return x + y;
  },
  subtraction(x, y) {
    return x - y;
  },
  multiplication(x, y) {
    return x * y;
  },
  division(x, y) {
    return x / y;
  }
};

export const actionSymbols = {
  addition: String.fromCharCode(43),
  subtraction: String.fromCharCode(8722),
  multiplication: String.fromCharCode(215),
  division: String.fromCharCode(247),
  equation: String.fromCharCode(61),
  backspace: String.fromCharCode(8592),
  C: 'C',
  dot: String.fromCharCode(803)
};
