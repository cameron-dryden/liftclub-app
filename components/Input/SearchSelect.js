import React from "react";
import { Select, FormControl, Input, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SearchSelect(props) {
  return (
    <Select
      variant="native"
      width="100%"
      backgroundColor="grayscale.1"
      borderColor="grayscale.3"
      borderWidth="0px"
      borderBottomWidth="1px"
      pt="1px"
      pb="2px"
      px="10px"
      placeholderTextColor="grayscale.4"
      color="grayscale.6"
      fontSize="16"
      fontWeight="700"
      dropdownIcon={
        <Icon
          as={<MaterialCommunityIcons name="chevron-down" />}
          size="24px"
          p="0"
          m="0"
          color="grayscale.4"
        />
      }
      _actionSheetBody={{
        ListHeaderComponent: (
          <FormControl px="12px" mb="12px" background="transparent">
            <Input
              variant="condensedInput"
              height="40px"
              fontSize={16}
              placeholder="Search"
              {...props.search}
            />
          </FormControl>
        ),
      }}
      {...props}
    />
  );
}

export { SearchSelect };
