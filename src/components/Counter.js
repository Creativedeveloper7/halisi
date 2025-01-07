import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function Counter({ count = 0 }) {
    const [counter, setCounter] = useState(count);
    return (_jsxs("div", { className: "flex min-w-fit border border-gray-400 border-opacity-50 rounded-md", children: [_jsx("button", { className: "border-r border-gray-400 border-opacity-50 p-2 font-mono hover:bg-gray-400 hover:bg-opacity-20 focus:outline-none", onClick: () => setCounter(c => c - 1), children: "-" }), _jsx("span", { className: "mx-auto p-2", children: counter }), _jsx("button", { className: "border-l border-gray-400 border-opacity-50 p-2 font-mono hover:bg-gray-400 hover:bg-opacity-20 focus:outline-none", onClick: () => setCounter(c => c + 1), children: "+" })] }));
}
