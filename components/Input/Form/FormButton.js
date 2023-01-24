import { LinearGradient } from "expo-linear-gradient";
import { Button } from "native-base";

function FormButton(props) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.5 }}
      end={{
        x: 1.0,
        y: 0.5,
      }}
      colors={["#c0e4ef", "#9dd1e1"]}
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
      <Button
        variant="unstyled"
        _text={{
          color: "white",
          fontWeight: "medium",
          lineHeight: "sm",
        }}
        _pressed={{ opacity: 0.5 }}
        {...props}
      >
        {props.buttonText}
      </Button>
    </LinearGradient>
  );
}

export default FormButton;
