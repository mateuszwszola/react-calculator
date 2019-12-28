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
  reset: 'C',
  dot: String.fromCharCode(803)
};

export const inputKeysAction = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '.': 'dot',
  '=': 'equation',
  enter: 'equation',
  '+': 'addition',
  '-': 'subtraction',
  x: 'multiplication',
  '*': 'multiplication',
  '/': 'division',
  backspace: 'backspace',
  c: 'reset',
  escape: 'reset'
};
