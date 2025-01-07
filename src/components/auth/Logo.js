import { jsx as _jsx } from "react/jsx-runtime";
import logo from '/src/assets/halisi.png'; // Absolute path for testing
export function Logo() {
    return (_jsx("div", { className: "absolute top-0 left-5 p-5", children: _jsx("img", { src: logo, alt: "Halisi Logo", className: "h-4 w-auto" }) }));
}
