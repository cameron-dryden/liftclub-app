import React from "react";
import { Button } from "native-base";

function Chip(props) {
  return (
    <Button
      rounded="full"
      borderWidth="2px"
      borderColor="app.primary"
      bg="grayscale.1"
      variant="outline"
      px="12px"
      py="4px"
      _text={{
        fontSize: "16px",
        color: "grayscale.6",
        fontWeight: "500",
        lineHeight: "20px",
      }}
      _pressed={{
        bg: "app.tertiary",
        borderColor: "app.secondary",
      }}
      {...props}
    />
  );
}

export { Chip };
