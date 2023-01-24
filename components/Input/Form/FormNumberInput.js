import { Input } from "native-base";

function FormInput(props) {
  return (
    <Input variant="underlined" size="lg" keyboardType="numeric" {...props} />
  );
}

export default FormInput;
