import { Input } from "native-base";

function FormInput(props) {
  return (
    <Input
      variant="outline"
      size="sm"
      fontSize="sm"
      focusOutlineColor="primary.200"
      _focus={{
        bgColor: "muted.50",
        selectionColor: "primary.200",
      }}
      {...props}
    />
  );
}

export default FormInput;
