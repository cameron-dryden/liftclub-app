import React from "react";
import { Fab, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CreateLiftclub(props) {
  return (
    <Fab
      onPress={() => {
        props.navigation.navigate("createclub");
      }}
      renderInPortal={false}
      bg="app.primary"
      shadow={3}
      size="55px"
      right="15px"
      bottom="100px"
      icon={
        <Icon
          color="white"
          as={<MaterialCommunityIcons name="plus" />}
          size="25px"
        />
      }
      _pressed={{ bg: "app.secondary" }}
    />
  );
}

export { CreateLiftclub };
