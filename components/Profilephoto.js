import React from "react";
import { Box, Avatar, Circle } from "native-base";

function Profilephoto() {
  return (
    <Box>
      <Circle size="38px" bg="app.secondary" alignItems="center">
        <Avatar
          size="34"
          bg="app.secondary"
          source={require("../assets/icon.png")}
        />
      </Circle>
    </Box>
  );
}

export { Profilephoto };
