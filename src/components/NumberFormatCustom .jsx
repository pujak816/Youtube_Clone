import React from "react";
import { NumericFormat } from "react-number-format";

const NumberFormatCustom = ({ value }) => {
  if (value >= 1000000000) {
    return (
      <NumericFormat
        value={value / 1000000000}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        suffix={"b"}
      />
    );
  } else if (value >= 1000000) {
    return (
      <NumericFormat
        value={value / 1000000}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        suffix={"m"}
      />
    );
  } else if (value >= 1000) {
    return (
      <NumericFormat
        value={value / 1000}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        suffix={"k"}
      />
    );
  } else {
    return (
      <NumericFormat
        value={value}
        displayType={"text"}
        thousandSeparator={true}
      />
    );
  }
};
export default NumberFormatCustom;
