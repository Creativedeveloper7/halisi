import { useState } from 'react';

interface CounterProps {
  count?: number;
}

export function Counter({ count = 0 }: CounterProps) {
  const [counter, setCounter] = useState(count);

  return (
    <div className="flex min-w-fit border border-gray-400 border-opacity-50 rounded-md">
      <button
        className="border-r border-gray-400 border-opacity-50 p-2 font-mono hover:bg-gray-400 hover:bg-opacity-20 focus:outline-none"
        onClick={() => setCounter(c => c - 1)}
      >
        -
      </button>
      <span className="mx-auto p-2">{counter}</span>
      <button
        className="border-l border-gray-400 border-opacity-50 p-2 font-mono hover:bg-gray-400 hover:bg-opacity-20 focus:outline-none"
        onClick={() => setCounter(c => c + 1)}
      >
        +
      </button>
    </div>
  );
}