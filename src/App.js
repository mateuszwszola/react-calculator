import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="flex flex-col bg-orange-100 h-screen">
      <main className="flex-grow w-full flex items-start sm:items-center">
        <Calculator />
      </main>
      <footer className="flex flex-col items-center justify-center sm:flex-row sm:justify-around  text-center px-4 py-1 bg-gray-900 text-indigo-200 tracking-wide font-light sm:text-lg">
        <a
          className="block mt-1 sm:mt-0 px-2 py-1  hover:text-indigo-300"
          href="https://github.com/mateuszwszola"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mateusz Wszola
        </a>
        <a
          className="block mt-1 sm:mt-0 px-2 py-1  hover:text-indigo-300"
          href="https://github.com/mateuszwszola/react-calculator-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
