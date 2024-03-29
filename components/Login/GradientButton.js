import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, useColorModeValue } from "native-base";

function GradientButton(props) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.5 }}
      end={{
        x: 1.0,
        y: 0.5,
      }}
      colors={useColorModeValue(["#B1CDE2", "#8BBDD8"], ["#8BBDD8", "#5C8CB3"])}
      elevation={3}
      style={{
        borderRadius: 50,
        width: "50%",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      }}
    >
      <Button variant="gradient" {...props}>
        {props.buttonText}
      </Button>
    </LinearGradient>
  );
}

export { GradientButton };
