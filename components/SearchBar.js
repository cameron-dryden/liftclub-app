import React from "react";
import { Circle, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <Input
      width="80%"
      height="10"
      variant="rounded"
      backgroundColor="grayscale.1"
      borderColor="app.tertiary"
      borderWidth="2"
      py="0"
      px="3"
      placeholder="Search for lift clubs"
      placeholderTextColor="grayscale.4"
      color="app.primary"
      fontSize="16"
      fontWeight="500"
      lineHeight="24"
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
      _input={{ bg: "grayscale.1" }}
      _focus={{
        borderColor: "app.primary",
        _android: { selectionColor: "app.primary" },
        _ios: { selectionColor: "app.primary" },
      }}
    />
  );
}

export { SearchBar };
