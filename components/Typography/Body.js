import React from "react";
import { Text } from "native-base";

function Body1(props) {
  return (
    <Text
      fontWeight="400"
      fontSize="22px"
      lineHeight="30px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Body2(props) {
  return (
    <Text
      fontWeight="400"
      fontSize="20px"
      lineHeight="28px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Body3(props) {
  return (
    <Text
      fontWeight="400"
      fontSize="18px"
      lineHeight="26px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Body4(props) {
  return (
    <Text
      fontWeight="400"
      fontSize="16px"
      lineHeight="24px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Body5(props) {
  return (
    <Text
      fontWeight="400"
      fontSize="14px"
      lineHeight="22px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Body6(props) {
  return (
    <Text
      fontWeight="400"
      fontSize="12px"
      lineHeight="20px"
      color="grayscale.6"
      {...props}
    />
  );
}

export { Body1, Body2, Body3, Body4, Body5, Body6 };
