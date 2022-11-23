import React from "react";
import { Circle, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <Input
      width="80%"
      height="10"
      placeholder="Search for lift clubs"
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
    />
  );
}

export { SearchBar };
