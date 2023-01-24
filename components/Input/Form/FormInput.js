import { Input } from "native-base";

function FormInput(props) {
  return (
    <Input
      variant="underlined"
      size="lg"
      fontSize="lg"
      focusOutlineColor="primary.200"
      _input={{ ml: 2 }}
      _focus={{
        selectionColor: "primary.200",
      }}
      {...props}
    />
  );
}

export default FormInput;
