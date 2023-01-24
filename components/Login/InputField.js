import React from "react";
import { Input, Icon, FormControl, Link } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function InputField(props) {
  const [isInputFocused, setInputFocused] = React.useState(false);

  return (
    <FormControl
      shadow={isInputFocused ? 4 : ""}
      isRequired={props.isRequired}
      isInvalid={props.isInvalid && !isInputFocused}
    >
      {isInputFocused ? (
        <FormControl.Label>
          {String(props.placeholderText).toUpperCase()}
        </FormControl.Label>
      ) : (
        ""
      )}
      <Input
        placeholder={String(props.placeholderText).toUpperCase()}
        InputLeftElement={
          props.iconName ? (
            <Icon
              as={<MaterialCommunityIcons name={props.iconName} />}
              size="24px"
              ml="8px"
              mb="2px"
              _light={{ color: isInputFocused ? "grayscale.6" : "grayscale.4" }}
              _dark={{ color: isInputFocused ? "grayscale.1" : "grayscale.3" }}
            />
          ) : (
            ""
          )
        }
        InputRightElement={
          props.linkText ? (
            <Link
              onPress={() => {
                console.log("Forgot password");
              }}
              _text={{
                color: "app.primary",
                fontSize: "12",
                fontWeight: "700",
                letterSpacing: "0.5px",
              }}
              pr="10px"
              isUnderlined={false}
            >
              {String(props.linkText).toUpperCase()}
            </Link>
          ) : (
            ""
          )
        }
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          setInputFocused(false);
        }}
        {...props}
      />
      <FormControl.ErrorMessage>{props.errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}

export { InputField };
