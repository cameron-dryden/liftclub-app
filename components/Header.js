import React from "react";
import { Box } from "native-base";
import { Heading1 } from "./Typography/Headings";

function Header(props) {
  return (
    <Box
      width="100%"
      height="90px"
      bg="app.secondary"
      roundedBottom="25px"
      {...props}
    >
      <Box
        width="100%"
        height="86px"
        bg="grayscale.1"
        roundedBottom="25px"
        alignItems="center"
        justifyContent="center"
      >
        <Heading1>{props.text}</Heading1>
      </Box>
    </Box>
  );
}

export { Header };
