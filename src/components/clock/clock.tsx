import React, { useEffect, useState } from "react";
import moment from "moment";
import { Digit } from "../digit";

export const Clock: React.FC = () => {
  useEffect(() => {
    changeTime();
  });
  function changeTime() {
    var hour = moment().format("HH");
    var minute = moment().format("mm");
    var second = moment().format("ss");

    setHourFirstDigit("num-" + hour.substr(0, 1));
    setHourSecondDigit("num-" + hour.substr(1, 1));
    setMinuteFirstDigit("num-" + minute.substr(0, 1));
    setMinuteSecondDigit("num-" + minute.substr(1, 1));
    setSecondFirstDigit("num-" + second.substr(0, 1));
    setSecondSecondDigit("num-" + second.substr(1, 1));

    setTimeout(changeTime, 1000);
  }
  const [hourFirstDigit, setHourFirstDigit] = useState("0");
  const [hourSecondDigit, setHourSecondDigit] = useState("0");
  const [minuteFirstDigit, setMinuteFirstDigit] = useState("0");
  const [minuteSecondDigit, setMinuteSecondDigit] = useState("0");
  const [secondFirstDigit, setSecondFirstDigit] = useState("0");
  const [secondSecondDigit, setSecondSecondDigit] = useState("0");

  return (
    <div className="digital-watch">
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <g id="unit-h">
            <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z"></path>
          </g>
          <g id="unit-v">
            <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z"></path>
          </g>
        </defs>
      </svg>
      <div className="hour">
        <Digit id="hour-1" value={hourFirstDigit} />
        <Digit id="hour-2" value={hourSecondDigit} />
      </div>
      <div className="minute">
        <Digit id="minute-1" value={minuteFirstDigit} />
        <Digit id="minute-2" value={minuteSecondDigit} />
      </div>
      <div className="second">
        <Digit id="second-1" value={secondFirstDigit} />
        <Digit id="second-2" value={secondSecondDigit} />
      </div>
    </div>
  );
};
