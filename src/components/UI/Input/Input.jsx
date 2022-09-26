import React from "react";

const Input = ({ dis = true, ph, rf, style, val = "" }) => {
  return (
    <input
      className={style}
      type="text"
      placeholder={ph}
      ref={rf}
      defaultValue={val}
      disabled={dis}
    />
  );
};

export default Input;
