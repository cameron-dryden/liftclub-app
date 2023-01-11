import React from "react";
import { Button } from "native-base";

function InputButton(props) {
  return (
    <Button
      onPress={() => {
        console.log(props.buttonText);
      }}
      {...props}
    >
      {props.buttonText}
    </Button>
  );
}

export { InputButton };
