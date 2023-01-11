import React from "react";
import { Circle, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function SearchBar(props) {
  return (
    <Input
      variant="condensedInput"
      width="80%"
      height="10"
      InputRightElement={
        <Circle size="37px" alignItems="center" bg="app.secondary">
          <Icon
            pl="1px"
            size="6"
            color="grayscale.1"
            as={<MaterialIcons name="search" />}
          />
        </Circle>
      }
      {...props}
    />
  );
}

export { SearchBar };
