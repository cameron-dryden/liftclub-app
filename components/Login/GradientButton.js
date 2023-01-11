import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { InputButton } from "./InputButton";

function GradientButton(props) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.5 }}
      end={{
        x: 1.0,
        y: 0.5,
      }}
      colors={["#B1CDE2", "#8BBDD8"]}
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
      <InputButton
        variant="gradient"
        buttonText={props.buttonText}
        isLoading={props.isLoading}
        isLoadingText={props.isLoadingText}
        {...props}
      />
    </LinearGradient>
  );
}

export { GradientButton };
