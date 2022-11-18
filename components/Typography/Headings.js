import React from "react";
import { Heading } from "native-base";

function Heading1(props) {
  return (
    <Heading
      fontWeight="600"
      fontSize="40px"
      lineHeight="48px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Heading2(props) {
  return (
    <Heading
      fontWeight="600"
      fontSize="28px"
      lineHeight="36px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Heading3(props) {
  return (
    <Heading
      fontWeight="600"
      fontSize="24px"
      lineHeight="32px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Heading4(props) {
  return (
    <Heading
      fontWeight="600"
      fontSize="20px"
      lineHeight="28px"
      color="grayscale.6"
      {...props}
    />
  );
}

function Heading5(props) {
  return (
    <Heading
      fontWeight="600"
      fontSize="18px"
      lineHeight="28px"
      color="grayscale.6"
      {...props}
    />
  );
}

export { Heading1, Heading2, Heading3, Heading4, Heading5 };
