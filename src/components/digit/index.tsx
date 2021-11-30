import React from "react";

interface DigitProps {
  id: string;
  value: string;
}

export const Digit: React.FC<DigitProps> = ({ id, value }) => {
  return (
    <svg
      id={id}
      className={value}
      width="130"
      height="240"
      viewBox="0 0 260 480"
    >
      <use xlinkHref="#unit-h" className="segment a" x="30" y="0"></use>
      <use xlinkHref="#unit-v" className="segment b" x="220" y="30"></use>
      <use xlinkHref="#unit-v" className="segment c" x="220" y="250"></use>
      <use xlinkHref="#unit-h" className="segment d" x="30" y="440"></use>
      <use xlinkHref="#unit-v" className="segment e" x="0" y="250"></use>
      <use xlinkHref="#unit-v" className="segment f" x="0" y="30"></use>
      <use xlinkHref="#unit-h" className="segment g" x="30" y="220"></use>
    </svg>
  );
};
